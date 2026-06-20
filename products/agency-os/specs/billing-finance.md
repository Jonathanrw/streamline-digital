# Agency OS: Billing & Finance Specification

## 1. Invoices Database
Track payments and billing status.

**Properties:**
*   **Invoice #** (Title)
*   **Client** (Relation: Client Database)
*   **Project** (Relation: Projects Database)
*   **Amount** (Number/Currency)
*   **Issue Date** (Date)
*   **Due Date** (Date)
*   **Status** (Select: Draft, Sent, Partially Paid, Paid, Overdue, Cancelled)
*   **Payment Link** (URL)
*   **Days Overdue** (Formula)

## 2. Revenue Tracker
Aggregated views of income.

**Views:**
*   **Paid This Month:** Sum of "Paid" invoices where Issue Date is this month.
*   **Accounts Receivable:** List of "Sent" and "Overdue" invoices.
*   **Quarterly Projections:** Grouped by Quarter.

## 3. Expense Tracker
Track agency overhead and contractor payouts.

**Properties:**
*   **Expense Name** (Title)
*   **Category** (Select: Software, Contractor, Marketing, Rent, Other)
*   **Amount** (Number/Currency)
*   **Date** (Date)
*   **Recipient** (Relation: Team Directory if contractor payout)

## 4. Profitability Dashboard
*   **Project Profitability:** Formula (Project Contract Value - Contractor Payouts - Estimated Overhead).
*   **Net Profit:** Automatic calculation of Revenue - Expenses.
