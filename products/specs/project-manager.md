# Core Component: Project Manager

## 1. Projects Database
**Table Name:** `[DB] Projects`

### Properties:
| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Project Name** | Title | Name of the project |
| **Status** | Select | Options: `Not Started`, `Active`, `On Hold`, `Completed`, `Cancelled` |
| **Deadline** | Date | Final delivery date |
| **Priority** | Select | Options: `High`, `Medium`, `Low` |
| **Client** | Relation | Links to `[DB] CRM` |
| **Tasks** | Relation | Links to `[DB] Tasks` (Auto-populated) |
| **Progress** | Formula | `(length(filter(prop("Tasks"), prop("Status") == "Done")) / length(prop("Tasks"))) * 100` |
| **Archive** | Checkbox | For hiding old projects |

### Template: "New Project"
* Includes a linked view of the `[DB] Tasks` filtered by "Project = This Page".
* Section for "Project Brief" and "Resources".

---

## 2. Tasks Database
**Table Name:** `[DB] Tasks`

### Properties:
| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Task Name** | Title | Name of the task |
| **Status** | Status | Options: `To Do`, `In Progress`, `Done` |
| **Due Date** | Date | When it needs to be finished |
| **Project** | Relation | Links to `[DB] Projects` |
| **Priority** | Select | Options: `P1`, `P2`, `P3` |
| **Time Estimate** | Number | Estimated hours |

### Views:
1. **My Tasks (Board View):** Grouped by Status, filtered by "Status != Done".
2. **Calendar View:** Shows tasks by Due Date.
3. **By Project:** Grouped by Project relation.
