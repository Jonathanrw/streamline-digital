# Drop #22 Database Specifications: Digital Product Lab

## 1. Product Idea Lab (`product_ideas_lab`)
Central repository for all potential digital assets.
| Field | Type | Description |
| :--- | :--- | :--- |
| `idea_id` | ID | Unique identifier. |
| `name` | String | Working title of the product. |
| `problem_solved` | Text | The core pain point this addresses. |
| `target_audience` | Multi-select | e.g., Freelancers, Agencies, Creators. |
| `validation_score` | Number | Calculation based on Market Fit and Build Ease. |
| `status` | Select | Backlog, Validating, Building, Launched. |

## 2. Market Research Hub (`market_research_hub`)
Storing proof of demand.
| Field | Type | Description |
| :--- | :--- | :--- |
| `research_id` | ID | Unique identifier. |
| `idea_id` | Relation | Linked to Product Idea Lab. |
| `competitor_links` | Multi-select | Links to similar products in the market. |
| `price_benchmarks` | Currency | What are others charging? |
| `key_keywords` | Text | High-intent search terms related to the idea. |

## 3. Build Sprint Tracker (`build_sprint_tracker`)
Managing the 14-day creation cycle.
| Field | Type | Description |
| :--- | :--- | :--- |
| `task_id` | ID | Unique identifier. |
| `idea_id` | Relation | Linked to Product Idea Lab. |
| `phase` | Select | Planning, Assets, Tech Setup, Marketing. |
| `deadline` | Date | Hard sprint deadline. |
| `assigned_to` | Relation | Linked to Team Directory (if applicable). |

## 4. Product Asset Library (`product_asset_library`)
Final delivery and sales assets.
| Field | Type | Description |
| :--- | :--- | :--- |
| `asset_id` | ID | Unique identifier. |
| `idea_id` | Relation | Linked to Product Idea Lab. |
| `checkout_link` | Link | LemonSqueezy/Gumroad URL. |
| `hero_graphic` | Link | Path to main product image. |
| `delivery_email` | Link | Path to the automated welcome email draft. |
| `v1_launch_date` | Date | When it first went live. |
