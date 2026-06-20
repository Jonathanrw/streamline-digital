# Solopreneur Workflow Hub: Database Schemas & Templates

## 1. Project Manager
### Projects Database
- **Name** (Title)
- **Status** (Select: Active, On Hold, Completed, Planning)
- **Priority** (Select: High, Medium, Low)
- **Deadline** (Date)
- **Progress** (Formula: Based on linked tasks)
- **Client** (Relation: Contacts Database)
- **Timeline** (Date Range)

### Task Database
- **Task Name** (Title)
- **Due Date** (Date)
- **Status** (Select: To-Do, In Progress, Review, Done)
- **Project** (Relation: Projects Database)
- **Priority** (Select: P1, P2, P3)

## 2. Content Calendar
### Content Database
- **Content Title** (Title)
- **Platform** (Multi-select: LinkedIn, Twitter, Blog, YouTube, Newsletter)
- **Status** (Select: Idea, Drafting, Designing, Scheduled, Published)
- **Publish Date** (Date)
- **Assets** (Files & Media)
- **Sponsor/Partner** (Relation: Contacts Database)

## 3. Finance Tracker
### Income Database
- **Invoice #** (Title)
- **Client** (Relation: Contacts Database)
- **Amount** (Number - Currency)
- **Date Received** (Date)
- **Status** (Select: Invoiced, Paid, Overdue)
- **Project** (Relation: Projects Database)

### Expense Database
- **Expense Item** (Title)
- **Category** (Select: SaaS, Marketing, Hardware, Travel, Taxes)
- **Amount** (Number - Currency)
- **Date** (Date)
- **Frequency** (Select: One-time, Monthly, Annual)

## 4. CRM (Client Relationship Manager)
### Contacts Database
- **Name** (Title)
- **Company** (Text)
- **Type** (Select: Client, Lead, Partner, Referral)
- **Status** (Select: Warm, Active, Past, VIP)
- **Last Contacted** (Date)
- **Email** (Email)

## Page Templates
### [Project Template]
- Includes a linked view of the Task Database filtered for this project.
- Key Deliverables checklist.
- Meeting Notes section (linked).
- Quick Links to shared assets (Google Drive/Figma).

### [Client Template]
- Client brief and goals.
- Active Projects (linked view).
- Invoicing History (linked view).
- Brand guidelines / style notes.
