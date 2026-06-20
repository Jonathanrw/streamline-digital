# Lead Gen Machine Dashboard

## Layout
The dashboard is designed as a centralized "Control Center" for managing leads.

### 1. Stats Bar (Callouts with Rollups)
- **🔥 Hot Leads Pending**: Total count of Inquiries with `Status` = Hot and `Next Action` != Done.
- **🌱 Active Nurtures**: Total count of Inquiries with `Status` = Nurture.
- **💰 Pipeline Value**: Sum of `Base Price` from `Assigned Services` for all Hot leads.

### 2. Main Workspace (Two-Column Layout)
#### Column 1: Priority Actions
- **View**: Linked Database (Inquiries)
- **Mode**: Board View
- **Grouping**: `Next Action`
- **Filter**: `Status` = Hot

#### Column 2: Lead Feed
- **View**: Linked Database (Inquiries)
- **Mode**: List View
- **Filter**: `Date Created` is within the last 7 days.
- **Sort**: `Score` descending.

### 3. Navigation Bar (Quick Links)
- [Add New Lead] (Button - creates page in Inquiries)
- [View Full Pipeline] (Link to Pipeline Page)
- [Service Catalog] (Link to Catalog Page)

## User Experience Gotcha
- **Form Integration**: Remind the user that the `Score` formula only works if the form answers match the `Select` labels exactly. It's recommended to use a dropdown in the form builder.
