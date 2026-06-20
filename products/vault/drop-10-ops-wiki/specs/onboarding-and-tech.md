# Module 3 & 4: Onboarding & Tech Stack

## Purpose
Standardize how new people enter the business and how tools are managed.

## Database: Team Onboarding
- **Team Member**: (Select: Team Member)
- **Role**: (Dropdown: VA, Designer, Copywriter, Developer)
- **Start Date**: (Date)
- **Progress**: (Formula/Progress Bar based on linked Checklist)
- **Mentor**: (Select: Team Member)
- **Onboarding Checklist**: (Relation to Checklist Items)

## Database: Tech Stack Directory
- **Tool Name**: (Title)
- **Function**: (e.g., "CRM", "Email Marketing", "Hosting")
- **Billing Cycle**: (Monthly, Yearly)
- **Monthly Cost**: (Number)
- **Admin**: (Select: Team Member)
- **Login Portal**: (URL)
- **Integration Type**: (Native, Zapier, API)

## Formula: Annual SaaS Spend
- **Formula**: `if(prop("Billing Cycle") == "Monthly", prop("Monthly Cost") * 12, prop("Monthly Cost"))`
