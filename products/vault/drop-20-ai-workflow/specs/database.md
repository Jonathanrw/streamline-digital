# Drop #20 Database Specifications: AI Workflow Hub

## 1. Prompt Library (`prompt_library`)
The "Brain" of your AI operations.
| Field | Type | Description |
| :--- | :--- | :--- |
| `prompt_id` | ID | Unique identifier. |
| `name` | String | e.g., "Customer Avatar Deep Dive". |
| `category` | Select | Research, Writing, Analysis, Admin. |
| `system_prompt` | Text | The "Who are you?" part of the prompt. |
| `input_template` | Text | Placeholders for user data. |
| `example_output` | Link | Reference for what a good result looks like. |
| `version` | Number | Tracks iterations of the prompt. |

## 2. Research Repository (`research_repo`)
Centralized storage for all context.
| Field | Type | Description |
| :--- | :--- | :--- |
| `research_id` | ID | Unique identifier. |
| `topic` | String | Main subject of research. |
| `raw_data` | Text | Unprocessed links, notes, quotes. |
| `ai_synthesis` | Text | The synthesized takeaway from the AI. |
| `tags` | Multi-select | Strategy, Competitor, Audience, Tech. |
| `status` | Select | Gathering, Synthesizing, Complete. |

## 3. Content Transformation Log (`transformation_log`)
Tracking the iterative refinement process.
| Field | Type | Description |
| :--- | :--- | :--- |
| `transform_id` | ID | Unique identifier. |
| `source_content` | Link | Linked to Research Repo or Draft DB. |
| `applied_prompt` | Relation | Linked to Prompt Library. |
| `ai_draft` | Text | The output from the AI. |
| `human_refinement` | Text | Notes on what was changed by the human. |
| `final_output` | Link | Final polished asset link. |

## 4. AI Automation Matrix (`automation_matrix`)
Mapping AI intervention points.
| Field | Type | Description |
| :--- | :--- | :--- |
| `automation_id` | ID | Unique identifier. |
| `task_name` | String | e.g., "Email Subject Lines". |
| `trigger` | String | What starts the flow (e.g., "New Blog Draft"). |
| `ai_action` | String | e.g., "Generate 5 hooks". |
| `estimated_time_saved` | Number | Hours per month saved by this automation. |
