# Drop #19 Database Specifications: Freelance Collaboration Engine

## 1. Team Directory (`team_directory`)
Stores information about collaborators and their roles.
| Field | Type | Description |
| :--- | :--- | :--- |
| `member_id` | ID | Unique identifier for the team member. |
| `name` | String | Full name. |
| `role` | Select | e.g., Copywriter, Designer, Dev, VA. |
| `status` | Select | Active, Onboarding, Offboarded. |
| `rate_hourly` | Currency | Internal rate for margin calculation. |
| `timezone` | String | For coordination. |
| `specialties` | Multi-select | Tags for skills (e.g., SEO, Figma, React). |
| `onboarding_doc` | Link | Path to their specific onboarding materials. |

## 2. Project Handover Log (`handover_log`)
The "Source of Truth" for task delegation.
| Field | Type | Description |
| :--- | :--- | :--- |
| `handover_id` | ID | Unique identifier. |
| `project_link` | Relation | Linked to Master Projects DB. |
| `assigned_to` | Relation | Linked to Team Directory. |
| `status` | Select | Briefing, In-Progress, Review, Done. |
| `context_brief` | Text | High-level summary of the "Why". |
| `asset_vault` | Link | Folder/Doc containing required files. |
| `success_criteria` | Text | Bulleted list of what "Done" looks like. |
| `due_date` | Date | Hard deadline. |

## 3. Resource Allocation (`resource_allocation`)
Visualizing the team's workload.
| Field | Type | Description |
| :--- | :--- | :--- |
| `allocation_id` | ID | Unique identifier. |
| `member_id` | Relation | Linked to Team Directory. |
| `project_id` | Relation | Linked to Master Projects DB. |
| `start_date` | Date | Start of engagement. |
| `end_date` | Date | End of engagement. |
| `utilization` | Percent | Estimated percentage of their capacity. |

## 4. Client Transparency Sync (`client_sync`)
Bridges internal work to external communication.
| Field | Type | Description |
| :--- | :--- | :--- |
| `sync_id` | ID | Unique identifier. |
| `internal_task` | Relation | Linked to Internal Task DB. |
| `external_alias` | String | Client-friendly name for the task. |
| `show_to_client` | Boolean | Toggle for external visibility. |
| `client_status` | Select | Queued, Brewing, Ready for Review. |
