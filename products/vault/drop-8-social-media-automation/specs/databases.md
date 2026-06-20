# Database Specifications: Social Media Automation

## 1. Content Calendar (Scheduler)
| Property | Type | Description |
| :--- | :--- | :--- |
| Name | Title | Internal name of the post. |
| Status | Select | Draft, Review, Scheduled, Published. |
| Platforms | Multi-select | LinkedIn, Twitter, Instagram, Facebook. |
| Publish Date | Date | The date and time the post should go live. |
| Media | Files & Media | Upload images or videos here. |
| Copy | Text | The actual post content. |
| Tags/Hashtags | Text | Relevant tags for discovery. |
| Link | URL | Link to the live post (after publishing). |

## 2. Engagement Tracker
| Property | Type | Description |
| :--- | :--- | :--- |
| Date | Date | The day engagement was performed. |
| Platform | Select | Which platform was targeted. |
| Goal (Comments) | Number | Target number of comments/replies. |
| Actual (Comments) | Number | Actual number of comments/replies. |
| Time Spent | Number | Minutes spent on engagement. |
| Efficiency | Formula | (Actual / Goal) * 100. |

## 3. Repurposing Engine (Echo)
| Property | Type | Description |
| :--- | :--- | :--- |
| Anchor Content | Relation | Link to the original long-form piece. |
| Distribution Task | Text | e.g., "Extract 3 quotes for Twitter". |
| Status | Select | To Do, In Progress, Done. |
| Deadline | Date | When the repurposed content must be ready. |
