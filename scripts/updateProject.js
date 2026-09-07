import dotenv from 'dotenv';
dotenv.config();

const dbId = '2a32e658-6e54-81ee-9de3-e10b6cd0115a';
const token = process.env.NOTION_API_KEY;

const updates = [
  {
    titleMatch: 'Brazilian E-Commerce Data Pipeline with Databricks',
    newDescription: 'Processed 100K+ order records across 8 sources by building Medallion architecture ETL pipeline on Databricks Lakeflow. Generated 15+ key BI metrics by deploying AI/BI dashboards and leveraging Genie AI for sentiment analysis.'
  },
  {
    titleMatch: 'HVAC Business Automation — n8n AI Workflow',
    newDescription: 'Built n8n automation workflow to reduce manual client intake by logging structured records into Notion CRM. Reduced client response time to < 1 minute by integrating AI agent to generate and send personalized emails via Gmail.'
  }
];

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
  
  for (const item of updates) {
    const targetProject = query.results.find(row => {
      const title = row.properties['Project']?.title?.[0]?.plain_text;
      return title === item.titleMatch;
    });

    if (targetProject) {
      console.log(`Found project "${item.titleMatch}" (${targetProject.id}). Updating Notion...`);
      const updateRes = await fetch(`https://api.notion.com/v1/pages/${targetProject.id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
          properties: {
            'Short Description': {
              rich_text: [
                {
                  text: {
                    content: item.newDescription
                  }
                }
              ]
            }
          }
        })
      });
      
      if (updateRes.ok) {
        console.log(`Successfully updated Notion for "${item.titleMatch}".`);
      } else {
        console.log(`Failed to update "${item.titleMatch}":`, await updateRes.text());
      }
    } else {
      console.log(`Could not find project "${item.titleMatch}" in Notion database.`);
    }
  }
}

run().catch(console.error);
