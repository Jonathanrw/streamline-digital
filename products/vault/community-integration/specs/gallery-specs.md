# Technical Specs: Community Template Gallery (Custom Layer)

## 1. Database Schema (Supabase/Postgres)

### A. Posts (Table)
- **id** (UUID - Primary Key)
- **user_id** (Relation: Profiles)
- **title** (Text)
- **description** (Markdown)
- **notion_link** (URL)
- **preview_image** (Storage URL)
- **category** (Enum: CRM, Content, Project Manager, Finance)
- **created_at** (Timestamp)

### B. Comments (Table)
- **id** (UUID)
- **post_id** (Relation: Posts)
- **user_id** (Relation: Profiles)
- **content** (Text)
- **created_at** (Timestamp)

### C. Likes/Upvotes (Table)
- **post_id** (Relation: Posts)
- **user_id** (Relation: Profiles)

## 2. Interaction Logic
- **Subscription Lock**: Access to the Gallery is restricted to active Vault members (checked via LemonSqueezy API/webhook).
- **Template Versioning**: Members can post "V2" or "V3" updates to their shared systems.
- **Tagging**: Automatic tagging based on the "Vault Drop" the template was derived from.

## 3. UI Components (React/Tailwind)
- **Feed**: Masonry grid layout for template previews.
- **Upload Modal**: Simple form with drag-and-drop image upload and URL validation.
- **Sidebar**: Filter by Drop # or functional category.
