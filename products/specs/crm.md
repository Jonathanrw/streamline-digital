# Core Component: CRM (Client Relationship Manager)

## 1. Contacts Database
**Table Name:** `[DB] CRM`

### Properties:
| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Contact Name** | Title | Name of person/company |
| **Type** | Select | Options: `Lead`, `Current Client`, `Past Client`, `Partner` |
| **Status** | Status | Options: `Inquiry`, `Discovery`, `Proposal`, `Onboarding`, `Active`, `Closed` |
| **Email** | Email | Contact address |
| **Website** | URL | Client website |
| **Last Contacted** | Date | Last time you reached out |
| **Projects** | Relation | Links to `[DB] Projects` |
| **Value** | Number | Estimated or actual contract value |

### Template: "Client Portal"
* Section for "Brand Assets", "Important Links", and "Meeting Notes".
* Linked view of `[DB] Projects` filtered by this contact.

---

## 2. Meeting Notes
**Table Name:** `[DB] Meeting Notes`

### Properties:
| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Meeting Title** | Title | Purpose of the meeting |
| **Date** | Date | When it happened |
| **Contact** | Relation | Links to `[DB] CRM` |
| **Project** | Relation | Links to `[DB] Projects` |
| **Notes** | Text | Summary of discussion |

### View:
1. **Recent Meetings:** List view sorted by Date descending.
