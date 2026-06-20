# Technical Specs: Email Marketing Engine

## 1. Sequence Logic & Triggers

### A. Welcome Sequence (Indoctrination)
- **Trigger**: Tag added: `Status: Lead - [Magnet Name]`
- **Delay 0**: Send Email 1 (Delivery)
- **Delay 1 Day**: Send Email 2 (Origin)
- **Delay 1 Day**: Send Email 3 (Value)
- **Delay 2 Days**: Send Email 4 (Bridge)
- **Delay 1 Day**: Send Email 5 (Offer)
- **Exit Action**: Remove `Status: New` tag; Add `Status: Nurture` tag.

### B. Abandoned Cart Recovery
- **Trigger**: Event: `Checkout Started` (e.g., via LemonSqueezy/Stripe)
- **Wait 1 Hour**: If `Order Completed` is FALSE, Send Email 1.
- **Wait 12 Hours**: If `Order Completed` is FALSE, Send Email 2.
- **Wait 24 Hours**: If `Order Completed` is FALSE, Send Email 3.
- **Goal Met**: User purchases. (Automation stops immediately).

## 2. Notion Content Library Schema
A workspace for managing all email assets.

### Properties:
- **Email Title** (Title)
- **Status** (Select: Draft, Review, Scheduled, Sent)
- **Sequence** (Select: Welcome, Abandoned Cart, Newsletter, Broadcast)
- **Sent Date** (Date)
- **Open Rate** (Number/Percentage)
- **CTR** (Number/Percentage)
- **Subject Line Options** (Multi-select/Text)
- **Primary CTA** (URL)

## 3. Tagging & Segmentation Protocol
To maintain a clean list as members scale.

### Tag Categories:
- `SRC: [Source]` (e.g., SRC: LinkedIn, SRC: Podcast)
- `INT: [Interest]` (e.g., INT: Notion, INT: Automation)
- `BEH: [Behavior]` (e.g., BEH: Clicked Pricing, BEH: Opened Drop 11)
- `CUS: [Product]` (e.g., CUS: Vault Member, CUS: Bundle)

## 4. Automation Dashboard (Mockup Req)
- **KPIs to track**: List Growth (Weekly), Average Open Rate, Revenue per Subscriber.
- **Deliverable**: HTML dashboard template for visualizing these stats.
