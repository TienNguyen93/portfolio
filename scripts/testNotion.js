import dotenv from 'dotenv';
dotenv.config();

const dbId = '2a32e658-6e54-81c8-b649-c1764bfb73f6';
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
  
  if (query.results && query.results.length > 0) {
    console.log('Skills available:');
    query.results.forEach(row => {
      const name = row.properties['Skill']?.title[0]?.plain_text || row.properties['Name']?.title[0]?.plain_text || 'Unknown';
      console.log(`- ID: ${row.id} => Name: ${name}`);
    });
  }
}

run().catch(console.error);
