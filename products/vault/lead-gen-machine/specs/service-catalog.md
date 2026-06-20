# Service Catalog Database Specification

## Properties
- **Service Name**: `Title`
- **Base Price**: `Number` (Currency)
- **Service Type**: `Select` (One-off, Monthly, Productized)
- **Ideal Persona**: `Select` (Solopreneur, Agency, Content Creator)
- **Deliverables**: `Multi-select` (Notion Template, Email Sequence, Automation Flow)
- **Duration**: `Number` (Days)
- **Inquiries**: `Relation` (Link to Inquiries Database)

## Sample Data
| Service Name | Base Price | Service Type | Ideal Persona | Deliverables |
| :--- | :--- | :--- | :--- | :--- |
| **Workflow Audit** | $499 | One-off | Solopreneur | Audit Doc, Loom Video |
| **Custom Hub Build** | $2,500 | Custom | Agency | Full Notion Workspace |
| **Automation Engine** | $1,200 | Custom | Content Creator | 5 Zapier/Make Flows |
| **The Vault Access** | $19/mo | Monthly | Solopreneur | Weekly Drops |

## Views
- **Service Menu**: Gallery view showing `Base Price` and `Service Type`.
- **Backend Admin**: Table view with all properties.
