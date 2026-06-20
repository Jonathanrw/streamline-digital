# Database Schema: Internal Wiki

## Properties
- **Name**: Title
- **Category**: Select (Admin, Marketing, Sales, Fulfillment, Finance)
- **Status**: Select (Draft, Under Review, Active, Needs Update)
- **Owner**: Person
- **Last Updated**: Last Edited Time
- **Difficulty**: Select (Easy, Medium, Hard)
- **Tags**: Multi-select (Optional: Policies, Guides, References)
- **Content**: Page Content (Markdown/Notion Blocks)

## Views
1. **Gallery View (By Category)**: Cards showing the article name and owner, grouped by Category.
2. **Table View (Full List)**: Sorted by Last Updated (Descending).
3. **List View (Needs Update)**: Filtered where Status = "Needs Update".
4. **Gallery View (The First 7 Days)**: Filtered by Tag = "Onboarding" or Category = "Admin".
