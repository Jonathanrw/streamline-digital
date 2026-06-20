# Core Component: Content Calendar

## 1. Content Database
**Table Name:** `[DB] Content`

### Properties:
| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Title** | Title | Title of the content piece |
| **Platform** | Multi-select | Options: `Twitter`, `LinkedIn`, `Blog`, `Newsletter`, `Instagram`, `YouTube` |
| **Status** | Status | Options: `Idea`, `Researching`, `Drafting`, `Review`, `Scheduled`, `Published` |
| **Publish Date** | Date | When it will go live |
| **Topic** | Select | Options: `Educational`, `Promotional`, `Personal`, `Case Study` |
| **Files & Media** | Files & Media | For images, videos, or draft docs |
| **URL** | URL | Link to published post |
| **Project** | Relation | Links to `[DB] Projects` (if content is part of a project launch) |

### Views:
1. **Pipeline (Board View):** Grouped by Status.
2. **Editorial Calendar (Calendar View):** Shows content by Publish Date.
3. **By Platform (Board View):** Grouped by Platform.
4. **Idea Bank (List View):** Filtered by "Status = Idea".

---

## 2. Content Templates
* **Social Media Post Template:** Includes a checklist for "Hooks", "Body", "Call to Action", and "Tags".
* **Newsletter Template:** Includes sections for "Subject Line", "Main Content", and "Sponsor/Product Mention".
