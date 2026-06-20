# Core Component: Finance Tracker

## 1. Income Database
**Table Name:** `[DB] Income`

### Properties:
| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Transaction Name** | Title | Description of income (e.g., "Client Invoice #001") |
| **Amount** | Number | Amount received |
| **Date** | Date | Date received |
| **Category** | Select | Options: `Services`, `Digital Products`, `Affiliate`, `Sponsorship` |
| **Client** | Relation | Links to `[DB] CRM` |
| **Month** | Formula | `formatDate(prop("Date"), "MMMM YYYY")` |

---

## 2. Expense Database
**Table Name:** `[DB] Expenses`

### Properties:
| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Item Name** | Title | Name of expense |
| **Amount** | Number | Amount spent |
| **Date** | Date | Date of transaction |
| **Category** | Select | Options: `Software`, `Marketing`, `Outsourcing`, `Education`, `Taxes` |
| **Recurring?** | Checkbox | For monthly subscriptions |
| **Month** | Formula | `formatDate(prop("Date"), "MMMM YYYY")` |

---

## 3. Financial Overview (Dashboard Widget)
* **Total Revenue (Current Month):** Linked view of Income filtered by this month, showing "Sum" at the bottom.
* **Total Expenses (Current Month):** Linked view of Expenses filtered by this month, showing "Sum" at the bottom.
* **Estimated Profit:** Description showing the difference.
