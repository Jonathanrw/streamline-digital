# Social Media Echo Dashboard

The dashboard is the "Echo Command Center" where the solopreneur reviews AI drafts and monitors distribution.

## Layout Components

### 1. The Anchor Monitor (Left Column - 60%)
- **Component**: Linked Database (Content Calendar / Anchor DB)
- **View**: Gallery View
- **Filter**: `Status` = "Published" OR "Repurposing"
- **Properties Shown**: `Echo Status` (Rollup of child log statuses), `Original Date`.

### 2. The Approval Queue (Right Column - 40%)
- **Component**: Linked Database (Distribution Log)
- **View**: List View
- **Filter**: `Status` = "🤖 AI-Drafted"
- **Sort**: `Scheduled Date` ascending.
- **Instruction**: "Click to review and tweak AI output before scheduling."

### 3. Quick Stats (Top Bar)
- **Active Echoes**: Count of Log items where `Status` != "🚀 Live".
- **Weekly Reach**: Sum of `Impressions` for logs in the last 7 days.
- **Top Platform**: Platform with the highest average `Engagement Rate`.

### 4. Navigation & Setup
- Link to **Platform Master**
- Link to **AI Prompt Library**
- Button: "Manual Echo Trigger" (Useful for old content)

## Workflow Note
The dashboard relies on a "Rollup" from the Content Calendar to show how many "Spokes" have been created/completed for each "Hub" piece. If an Anchor piece has 4 log entries and 2 are live, the progress is 50%.
