import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const token = process.env.NOTION_API_KEY;

const PROJECTS_DB_ID = '2a32e658-6e54-81ee-9de3-e10b6cd0115a';
const SKILLS_DB_ID = '2a32e658-6e54-81c8-b649-c1764bfb73f6';

const headers = {
  'Authorization': `Bearer ${token}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json'
};

async function fetchDatabase(dbId) {
  const res = await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, {
    method: 'POST',
    headers
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch db ${dbId}: ${res.statusText}`);
  }
  const data = await res.json();
  return data.results;
}

async function run() {
  console.log('Fetching Skills database...');
  const skillsData = await fetchDatabase(SKILLS_DB_ID);
  
  // Create mapping of Skill ID -> Skill Name
  const skillsMap = {};
  skillsData.forEach(row => {
    const titleProp = row.properties['Skill'] || row.properties['Name'];
    const name = titleProp?.title?.[0]?.plain_text;
    if (name) {
      skillsMap[row.id] = name;
    }
  });

  console.log(`Loaded ${Object.keys(skillsMap).length} skills.`);

  console.log('Fetching Projects database...');
  const projectsData = await fetchDatabase(PROJECTS_DB_ID);

  const projects = projectsData.map(row => {
    const title = row.properties['Project']?.title?.[0]?.plain_text || 'Untitled Project';
    const description = row.properties['Short Description']?.rich_text?.map(t => t.plain_text).join('') || '';
    const link = row.properties['GitHub']?.url || null;
    
    // Resolve relation IDs to skill names
    const skillIds = row.properties['Skills']?.relation || [];
    const tech = skillIds.map(rel => skillsMap[rel.id]).filter(Boolean);

    // Pick a random variant for the chip based on string length just to vary the colors
    const variants = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'];
    const tagVariant = variants[title.length % variants.length];
    const category = tech[0] || 'Project';

    return {
      title,
      category,
      tagVariant,
      description,
      tech,
      link
    };
  });

  console.log(`Parsed ${projects.length} projects.`);

  // Write to src/data/projects.json
  const outDir = path.join(__dirname, '../src/data');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  const outPath = path.join(outDir, 'projects.json');
  fs.writeFileSync(outPath, JSON.stringify(projects, null, 2));
  console.log(`Successfully wrote projects to ${outPath}`);
}

run().catch(console.error);
