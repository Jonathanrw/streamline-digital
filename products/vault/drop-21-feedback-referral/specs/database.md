# Drop #21 Database Specifications: Feedback & Referral Engine

## 1. Testimonial Library (`testimonials_library`)
Stores all client feedback and social proof.
| Field | Type | Description |
| :--- | :--- | :--- |
| `testimonial_id` | ID | Unique identifier. |
| `client_name` | String | Full name of the client. |
| `company_name` | String | Company name. |
| `quote` | Text | The actual text of the testimonial. |
| `sentiment_score` | Number | 1-5 rating. |
| `tags` | Multi-select | e.g., Speed, ROI, Workflow, Design. |
| `permission_granted` | Boolean | Whether we can use this publicly. |
| `media_link` | Link | Path to screenshot or video file. |

## 2. Feedback Requests (`feedback_requests`)
Tracking the status of outbound requests.
| Field | Type | Description |
| :--- | :--- | :--- |
| `request_id` | ID | Unique identifier. |
| `client_id` | Relation | Linked to Client CRM. |
| `status` | Select | Sent, Opened, Completed, Ignored. |
| `trigger_date` | Date | When the request was sent. |
| `follow_up_count` | Number | Tracks number of reminders. |

## 3. Referral Partners (`referral_partners`)
Managing your referral network.
| Field | Type | Description |
| :--- | :--- | :--- |
| `partner_id` | ID | Unique identifier. |
| `client_id` | Relation | Linked to Client CRM. |
| `referral_code` | String | Unique discount/tracking code. |
| `total_referrals` | Number | Rollup of successful referrals. |
| `commission_rate` | Percent | Specific rate for this partner. |

## 4. Referral Payouts (`referral_payouts`)
Tracking incentives and rewards.
| Field | Type | Description |
| :--- | :--- | :--- |
| `payout_id` | ID | Unique identifier. |
| `partner_id` | Relation | Linked to Referral Partners. |
| `amount` | Currency | Reward amount. |
| `status` | Select | Pending, Approved, Paid. |
| `date_paid` | Date | Date of fulfillment. |
