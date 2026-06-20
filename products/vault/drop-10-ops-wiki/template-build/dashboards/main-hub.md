# Dashboard: Operations Hub

## Layout Structure

### Header Section
- **Icon**: 🧠 (Brain)
- **Cover Image**: Minimalist tech/office pattern.
- **Title**: Operations Wiki & SOP Hub
- **Description**: The central nervous system for [Business Name].

### Row 1: Navigation & Quick Links (4 Columns)
- **Column 1**: `[[Internal Wiki]]` (Link to page) - "Search Documentation"
- **Column 2**: `[[SOP Library]]` (Link to page) - "Standard Procedures"
- **Column 3**: `[[Team Onboarding]]` (Link to page) - "Hire & Scale"
- **Column 4**: `[[Tech Stack]]` (Link to page) - "SaaS Management"

### Row 2: Active Feed (2 Columns)
- **Column 1 (Large)**: **Recently Updated Wiki**
    - Linked View: `Internal Wiki`
    - View Type: Table
    - Filters: Status = Active
    - Sort: Last Updated (Descending)
    - Limit: 5
- **Column 2 (Small)**: **Active Onboarding**
    - Linked View: `Team Onboarding`
    - View Type: Gallery
    - Filters: Status = In Progress
    - Properties Shown: Name, Progress Bar

### Row 3: Metrics & Maintenance (2 Columns)
- **Column 1**: **SaaS Spend Summary**
    - Linked View: `Tech Stack`
    - View Type: Table (Summing Annual Cost)
- **Column 2**: **Needs Update**
    - Linked View: `Internal Wiki`
    - View Type: List
    - Filters: Status = Needs Update
