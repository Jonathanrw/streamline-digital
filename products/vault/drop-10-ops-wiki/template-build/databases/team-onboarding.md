# Database Schema: Team Onboarding

## Properties
- **Team Member**: Title
- **Role**: Select (VA, Designer, Copywriter, Developer, Project Manager)
- **Start Date**: Date
- **Mentor**: Person
- **Progress**: Formula (visual progress bar)
- **Status**: Select (Not Started, In Progress, Complete, Offboarded)
- **Checklist**: Relation (Links to Onboarding Tasks - a sub-database)

## Sub-Database: Onboarding Tasks
- **Task Name**: Title
- **Team Member**: Relation (Links to Team Onboarding)
- **Status**: Checkbox
- **Wiki Ref**: Relation (Links to Internal Wiki)
- **SOP Ref**: Relation (Links to SOP Library)

## Views
1. **Gallery View (Active Onboarding)**: Shows cards with name, role, and progress bar. Filtered where Status = "In Progress".
2. **Timeline View**: Shows onboarding periods for all new hires.
3. **Table View (Archive)**: Filtered where Status = "Complete" or "Offboarded".
