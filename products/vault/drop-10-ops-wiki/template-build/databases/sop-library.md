# Database Schema: SOP Library

## Properties
- **Process Name**: Title
- **Frequency**: Select (Daily, Weekly, Monthly, Quarterly, Per Project)
- **Time to Complete**: Text (e.g., "30 mins", "2 hours")
- **Prerequisites**: Multi-select (Access, Software, Hardware)
- **Video Tutorial**: URL
- **Wiki Article**: Relation (Links to Internal Wiki)
- **Status**: Select (Active, Retired, In Progress)
- **Primary Owner**: Person
- **Last Audit**: Date

## Views
1. **Board View (By Frequency)**: Columns for Daily, Weekly, Monthly, etc.
2. **Table View (Full List)**: Sorted by Process Name.
3. **Gallery View (High Frequency)**: Filtered where Frequency = "Daily" or "Weekly".
4. **List View (Ready for Audit)**: Filtered where Last Audit is before 3 months ago.
