import dotenv from 'dotenv';
dotenv.config();

const dbId = '2a32e658-6e54-81ee-9de3-e10b6cd0115a';
const token = process.env.NOTION_API_KEY;

async function run() {
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json'
  };

  const queryRes = await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, { 
    method: 'POST',
    headers 
  });
  const query = await queryRes.json();
  
  const targetProject = query.results.find(row => {
    const title = row.properties['Project']?.title?.[0]?.plain_text;
    return title === 'Diabetes Prediction';
  });

  if (targetProject) {
    console.log(`Found project with ID: ${targetProject.id}. Archiving...`);
    const updateRes = await fetch(`https://api.notion.com/v1/pages/${targetProject.id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ archived: true })
    });
    
    if (updateRes.ok) {
      console.log('Archive successful.');
    } else {
      console.log('Archive failed:', await updateRes.text());
    }
  } else {
    console.log('Could not find the project in Notion database.');
  }
}

run().catch(console.error);
