# Agency OS: Multi-Client Project Management Specification

## 1. Projects Database
The high-level view of all active work across all clients.

**Properties:**
*   **Project Name** (Title)
*   **Client** (Relation: Client Database)
*   **Status** (Select: Backlog, Discovery, In Progress, Review, Completed, On Hold)
*   **Timeline** (Date Range)
*   **Progress** (Formula: Rollup of completed tasks vs. total tasks)
*   **Health** (Formula: Status icon based on deadline proximity and task completion)
*   **Total Tasks** (Rollup)
*   **Completed Tasks** (Rollup)

## 2. Tasks Database
Granular actions required to complete projects.

**Properties:**
*   **Task Name** (Title)
*   **Project** (Relation: Projects Database)
*   **Assignee** (Person: Team Member)
*   **Status** (Status: To Do, Doing, Blocked, Done)
*   **Priority** (Select: Low, Medium, High, Urgent)
*   **Due Date** (Date)
*   **Estimated Hours** (Number)
*   **Actual Hours** (Number)

## 3. Visualizations
*   **Master Portfolio:** Timeline view of all projects.
*   **Agency Kanban:** Grouped by Status, showing all tasks across all projects.
*   **Workload Balance:** Grouped by Assignee to see team capacity.
*   **Deadline Calendar:** Calendar view of task and project deadlines.
