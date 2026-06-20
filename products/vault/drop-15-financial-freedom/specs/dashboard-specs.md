# Financial Freedom Dashboard - Technical Specifications

## 1. Real-Time P&L Tracking
**Database: Transactions Hub**
- **Properties:**
  - `Date`: Transaction date.
  - `Amount`: Currency (Amount).
  - `Type`: Select (Income, Expense).
  - `Category`: Select (Software, Advertising, Contractors, Education, etc.).
  - `Source`: Text (Stripe, PayPal, Bank).
  - `Tax Deductible?`: Checkbox.
- **Views:**
  - `Monthly P&L`: Grouped by Month, summed by Type.
  - `Expense Breakdown`: Pie chart / Grouped view by Category.
  - `Audit Mode`: Filtered for `Category = Subscription`.

## 2. Tax Savings Calculator
**Database: Tax Reserves**
- **Logic:**
  - `Estimated Revenue`: Sum of all `Income` type transactions.
  - `Estimated Expenses`: Sum of all `Expense` type transactions.
  - `Net Profit`: `Estimated Revenue` - `Estimated Expenses`.
  - `Tax Rate`: Number (e.g., 0.30 for 30%).
  - `Estimated Tax Liability`: `Net Profit` * `Tax Rate`.
- **Properties:**
  - `Year/Quarter`: Title.
  - `Amount Saved`: Currency (Amount already set aside).
  - `Target Amount`: Formula (Calculating based on Tax Rate).
  - `Status`: Formula (Met, Under, Over).

## 3. Investment Goal Planner
**Database: Wealth Planner**
- **Properties:**
  - `Goal Name`: Title (e.g., Retirement Fund, Down Payment).
  - `Target Value`: Currency (Amount).
  - `Current Value`: Currency (Amount).
  - `Monthly Contribution`: Currency (Amount).
  - `Timeline`: Date (Target completion).
- **Views:**
  - `Progress Bar`: Formula view showing `(Current Value / Target Value) * 100`.
  - `Monthly Roadmap`: Timeline view of multiple goals.

## 4. Subscription & Recurring Cost Auditor
**Database: Subscriptions**
- **Properties:**
  - `Service Name`: Title.
  - `Monthly Cost`: Currency.
  - `Annual Cost`: Formula (`Monthly Cost * 12`).
  - `Value Score`: Select (Critical, Helpful, Low Value).
  - `Renewal Date`: Date.
- **Views:**
  - `Cost Optimization`: Filtered for `Value Score = Low Value`.
  - `Upcoming Renewals`: Sorted by `Renewal Date`.
