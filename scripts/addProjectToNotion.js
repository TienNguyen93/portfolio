import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config();
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const PROJECTS_DB_ID = '2a32e658-6e54-81ee-9de3-e10b6cd0115a';

async function addProject() {
  await notion.pages.create({
    parent: { database_id: PROJECTS_DB_ID },
    properties: {
      'Project': {
        title: [
          { text: { content: 'Brazilian E-Commerce Data Pipeline with Databricks' } }
        ]
      },
      'Short Description': {
        rich_text: [
          { text: { content: 'An end-to-end ETL pipeline built on Databricks to analyze Brazilian e-commerce data, demonstrating production-grade data engineering practices using Medallion architecture, Spark optimization, and AI-powered business intelligence.\n\n• Processed 100K+ orders across 8 interconnected CSV files\n• Generated 15+ executive-level business intelligence metrics\n• Performed sentiment analysis on customer reviews to identify improvement opportunities with Genie AI' } }
        ]
      },
      'Skills': {
        relation: [
          { id: '2a32e658-6e54-81c2-bb21-e8ee4663866f' }, // Python
          { id: '2a32e658-6e54-8161-ae6f-e9ab2c1d617f' }, // Data Analytics
          { id: '2a32e658-6e54-8183-a3e6-db76be65c0d8' }  // SQL
        ]
      }
    }
  });
  console.log('Successfully added project to Notion!');
}

addProject().catch(console.error);
