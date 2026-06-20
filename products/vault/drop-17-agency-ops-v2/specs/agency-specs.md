# Agency Operations v2 - Technical Specifications

## 1. Team Performance Dashboard
**Database: Team Members**
- **Properties:**
  - `Name`: Title.
  - `Role`: Select (Project Manager, Designer, Developer, Admin).
  - `Rate/Hour`: Currency.
  - `Capacity (Hrs/Wk)`: Number.
  - `Active Projects`: Relation to Projects database.
- **Database: Time Logs**
  - `Date`: Date.
  - `Minutes`: Number.
  - `Project`: Relation.
  - `Type`: Select (Billable, Internal, Training).
  - `Utilization %`: Formula (`Minutes / (Capacity * 60)`).

## 2. Advanced SOP Multi-User Engine
**Database: SOP Hub**
- **Properties:**
  - `Procedure Name`: Title.
  - `Department`: Select (Sales, Delivery, Finance, HR).
  - `Role Assigned`: Multiselect (Relation to Roles).
  - `Last Verified`: Date.
  - `Verification Status`: Select (Current, Needs Update, Expired).
  - `Owner`: People.
- **Views:**
  - `Role-Specific Dashboards`: Linked views filtered by `Role Assigned`.
  - `Audit Queue`: Filtered for `Verification Status != Current`.

## 3. Profit-Sharing Models
**Database: Profit Pools**
- **Logic:**
  - `Total Gross Revenue`: Sum from Transactions.
  - `Direct Expenses`: Sum of payroll + software.
  - `Gross Profit`: `Revenue - Expenses`.
  - `Operating Reserve (10%)`: Formula.
  - `Shared Profit Pool`: `(Gross Profit - Reserve) * Share %`.
- **Properties:**
  - `Quarter`: Title.
  - `Pool Amount`: Currency.
  - `Individual Payouts`: Rollup from Team database.

## 4. Capacity Planner
**Formula Logic:**
- `Total Available Agency Hours`: Sum of all Team Member capacities.
- `Committed Project Hours`: Sum of estimated hours from Active Projects.
- `Next Hire Trigger`: Formula (`If utilization > 85% for 3 weeks -> TRIGGER HIRE`).
- **View:** 
  - `Traffic Light View`: Green (0-70%), Yellow (71-85%), Red (86%+).
