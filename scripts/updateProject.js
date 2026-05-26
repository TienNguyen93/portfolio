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
    return title === 'Brazilian E-Commerce Data Pipeline with Databricks';
  });

  if (targetProject) {
    console.log(`Found project with ID: ${targetProject.id}. Updating...`);
    const updateRes = await fetch(`https://api.notion.com/v1/pages/${targetProject.id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        properties: {
          'Short Description': {
            rich_text: [
              {
                text: {
                  content: 'An end-to-end ETL pipeline built on Databricks to analyze Brazilian e-commerce data, demonstrating production-grade data engineering practices using Medallion architecture, Spark optimization, and AI-powered business intelligence.'
                }
              }
            ]
          }
        }
      })
    });
    
    if (updateRes.ok) {
      console.log('Update successful.');
    } else {
      console.log('Update failed:', await updateRes.text());
    }
  } else {
    console.log('Could not find the project in Notion database.');
  }
}

run().catch(console.error);
