# Core Component: Email Marketing Sequences

## 1. Sequence Manager (Notion Database)
**Table Name:** `[DB] Email Sequences`

### Properties:
| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Sequence Name** | Title | Name of the automation (e.g., "Welcome Sequence") |
| **Trigger** | Text | What starts the sequence (e.g., "Signed up for Lead Magnet") |
| **Status** | Status | Options: `Drafting`, `Active`, `Paused` |
| **Platform** | Select | Options: `ConvertKit`, `Mailchimp`, `MailerLite` |
| **Goal** | Select | Options: `Nurture`, `Sales`, `Retention` |

---

## 2. Email Templates Database
**Table Name:** `[DB] Email Templates`

### Properties:
| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Subject Line** | Title | The headline of the email |
| **Sequence** | Relation | Links to `[DB] Email Sequences` |
| **Day/Order** | Number | Which day it's sent (Day 0, Day 1, etc.) |
| **Status** | Status | Options: `Draft`, `Ready`, `Live` |

---

## 3. High-Conversion "Welcome" Sequence Template
* **Email 1: The Delivery (Immediate)**
    * Goal: Deliver the freebie and set expectations.
* **Email 2: The Origin Story (Day 1)**
    * Goal: Build trust and show authority.
* **Email 3: The Value Drop (Day 2)**
    * Goal: Provide a quick win without asking for anything.
* **Email 4: The Soft Sell (Day 3)**
    * Goal: Introduce the main product/service as a solution.
* **Email 5: The FAQ/Social Proof (Day 5)**
    * Goal: Overcome objections and show results.
