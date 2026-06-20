# Content Engine Pro: Database Schema

## 1. Idea Bank [DB]
*Focus: Frictionless capture of raw ideas.*

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Title** | Title | The core concept or hook |
| **Status** | Select | `New`, `Developing`, `Archived`, `Promoted to Pipeline` |
| **Topic** | Multi-select | `Sales`, `Educational`, `Behind the Scenes`, `Opinion` |
| **Inspiration Source** | URL/Files | Link to reference or screenshot |
| **Batch Week** | Select | Week 1, Week 2, etc. (for planning batch days) |

## 2. Content Pipeline [DB]
*Focus: The engine for batching and formatting.*

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Title** | Title | Working title |
| **Platform** | Multi-select | `X (Twitter)`, `LinkedIn`, `Instagram`, `Threads` |
| **Stage** | Status | `Not Started`, `Drafting`, `Formatting`, `Ready to Schedule`, `Published` |
| **Publish Date** | Date | Final slot on the calendar |
| **Anchor Content** | Text/Draft | The primary copy |
| **Platform Format: X** | Formula | Character count + Thread indicator |
| **Platform Format: LI** | Text | Hook focus area |
| **Platform Format: IG** | Text | Caption + Hashtag block |
| **Repurpose?** | Checkbox | Triggers "Social Echo" workflow |

## 3. Platform Master [DB]
*Focus: Storing constraints and best practices for each platform.*

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Platform** | Title | e.g., LinkedIn |
| **Character Limit** | Number | |
| **Optimal Hook Type** | Select | `Question`, `Statement`, `Controversial`, `Listicle` |
| **Best Times** | Text | Recommended posting windows |

## 4. 365-Day Content Calendar [DB]
*Focus: Long-term strategic planning.*

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Date** | Title (Date) | Unique date for every day of the year |
| **Theme of the Day** | Select | `Motivation`, `Case Study`, `Tutorial`, `Soft Sell` |
| **Scheduled Post** | Relation | Links to Content Pipeline |
| **Holiday/Event** | Text | e.g., Black Friday, New Year |

## 5. Content Pillars [DB]
*Focus: Strategic alignment and topic balance.*

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Title** | Title | e.g., "Notion Automation" |
| **Description** | Text | What this pillar covers |
| **Published Count** | Rollup | Count of Published items in Pipeline |
| **Target Frequency** | Select | Low, Medium, High (to monitor balance) |

## 6. Writing Frameworks [DB]
*Focus: Speeding up the drafting process.*

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Framework Name** | Title | e.g., "AIDA", "PAS", "The Bridge" |
| **Structure** | Text | The breakdown (e.g., Attention, Interest...) |
| **Example** | Text | A pre-written example for reference |

