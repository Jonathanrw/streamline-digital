# Technical Specs: Client Health & Retention Dashboard

## Database 1: Retainer Clients
- **Client Name**: Title
- **Retainer Tier**: Select (Basic, Pro, Premium)
- **Monthly Fee**: Number ($)
- **Start Date**: Date
- **Billing Cycle**: Select (1st of month, 15th of month, Custom)
- **Status**: Select (Active, Paused, At Risk, Churned)
- **Primary Service**: Select (Maintenance, Strategy, Content, Support)
- **Client Health Score**: Formula (calculated based on recent interaction and deliverable status)

## Database 2: Deliverable Tracker (Recurring)
- **Deliverable Name**: Title
- **Client**: Relation (to Retainer Clients)
- **Month**: Select (Jan-Dec)
- **Status**: Select (Not Started, In Progress, Review, Completed)
- **Due Date**: Date
- **Actual Completion Date**: Date

## Database 3: Monthly Performance Reports
- **Report Title**: Title
- **Client**: Relation (to Retainer Clients)
- **Period**: Date Range
- **Key Metrics**: Text
- **Win of the Month**: Text
- **Next Month Focus**: Text
- **Report Status**: Select (Drafting, Sent, Client Reviewed)

## Automation Workflows
- **Monthly Reset**: Automated creation of monthly deliverables on the 1st of each month.
- **Health Alert**: Notification when a deliverable is overdue by >3 days, changing Client Health Score to "At Risk".
- **Reporting Reminder**: Automated task for the freelancer on the 25th of each month to draft the Performance Report.
