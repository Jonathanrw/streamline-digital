# Technical Specs: Client Portal v2

## 1. Database Schemas

### A. Project Timeline (Database)
- **Phase Name** (Title)
- **Status** (Select: Not Started, In Progress, Review, Completed)
- **Target Date** (Date)
- **Actual Completion** (Date)
- **Dependency** (Relation: Self)
- **Progress** (Formula: Based on sub-tasks)

### B. Deliverables & Approvals (Database)
- **Deliverable Name** (Title)
- **Due Date** (Date)
- **Status** (Select: Draft, Final Review, Approved)
- **File Link** (URL/Files & Media)
- **Client Feedback** (Text)
- **Approved Date** (Date)

### C. Communications & Log (Database)
- **Event Name** (Title)
- **Date** (Date)
- **Type** (Select: Meeting, Decision, Asset Delivery)
- **Notes** (Text)
- **Project Phase** (Relation: Project Timeline)

## 2. Page Templates

### [Main Portal Template]
- **Header**: High-level project stats (Status, Deadline, Overall Progress).
- **Body**: 
    - Linked View of Project Timeline (Gantt/Gallery view).
    - Linked View of Deliverables (Gallery view for visual assets).
    - "Resource Hub" section (Links to contracts, brand kits).
    - "Quick Actions" for clients (Request Review, Upload Asset).

## 3. Automation Triggers (via Notion or Zapier)
- **Status Change**: When a Phase is marked 'Completed', auto-notify the client via email.
- **Approval**: When a Deliverable is marked 'Approved', auto-archive and move to the 'Secure Asset Hub'.
- **Deadline Reminder**: 24 hours before a Deliverable is due, notify the Solopreneur.
