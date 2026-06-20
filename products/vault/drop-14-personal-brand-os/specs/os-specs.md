# Personal Brand OS - Technical Specifications

## 1. PKM (Personal Knowledge Management)
**Database: The Second Brain**
- **Properties:**
  - `Title`: Name of the note/idea.
  - `Source`: URL or origin.
  - `Topic`: Multiselect (e.g., Marketing, Psychology, Productivity).
  - `Status`: Select (Inbox, Processed, Archived).
  - `Last Reviewed`: Date.
- **Views:**
  - `Inbox`: Filtered for `Status = Inbox`.
  - `Topic Map`: Grouped by Topic.
  - `Weekly Review`: Filtered for notes created in the last 7 days.

## 2. Bio-Link Hub
**Template Structure:**
- **Header:** High-quality avatar, 1-sentence value prop, social links.
- **Featured:** Card section for the primary lead magnet (e.g., "The Success Checklist").
- **Products:** Gallery of digital products with pricing and "Buy Now" links.
- **Social Proof:** Scrolling marquee or grid of testimonials/logos.
- **Footer:** Email signup form.

## 3. Sponsorship Tracker
**Database: Sponsorship CRM**
- **Properties:**
  - `Brand Name`: Title.
  - `Contact Person`: Text.
  - `Email`: Email.
  - `Deal Status`: Select (Lead, Pitching, Negotiating, Signed, Completed).
  - `Deal Value`: Number (Currency).
  - `Publication Date`: Date.
  - `Asset URL`: URL (Link to the sponsored content).
- **Views:**
  - `Pipeline`: Board view grouped by `Deal Status`.
  - `Monthly Revenue`: Summary calculation of `Deal Value` for signed deals.
  - `Calendar`: Calendar view by `Publication Date`.

## 4. Authority Content Engine
**Database: Content Calendar**
- **Properties:**
  - `Headline`: Title.
  - `Platform`: Multiselect (X, LinkedIn, Newsletter, Instagram).
  - `Format`: Select (Thread, Long-form, Video, Carousel).
  - `Draft`: Page content.
  - `Scheduled Date`: Date.
  - `Status`: Select (Idea, Draft, Review, Scheduled, Published).
- **Automation Points:**
  - Auto-set `Published` date when status changes to `Published`.
  - Relation to `PKM` database to link research to specific posts.
