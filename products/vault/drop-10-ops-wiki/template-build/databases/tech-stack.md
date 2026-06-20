# Database Schema: Tech Stack Directory

## Properties
- **Tool Name**: Title
- **Function**: Select (CRM, Email Marketing, Hosting, Project Management, Design, Finance)
- **Billing Cycle**: Select (Monthly, Yearly)
- **Monthly Cost**: Number
- **Admin**: Person
- **Login Portal**: URL
- **Integration**: Multi-select (Native, Zapier, Make, API)
- **Status**: Select (Active, Testing, Legacy)
- **Annual Cost**: Formula: `if(prop("Billing Cycle") == "Monthly", prop("Monthly Cost") * 12, prop("Monthly Cost"))`

## Views
1. **Table View (Cost Analysis)**: Grouped by Function, with Sum of Annual Cost.
2. **Gallery View (Toolbox)**: Visual grid of all Active tools.
3. **List View (Admin Assignments)**: Filtered or Grouped by Admin.
4. **Calendar View (Renewals)**: (If Renewal Date property is added).
