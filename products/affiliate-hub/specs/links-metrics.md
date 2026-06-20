# Affiliate Success Hub: Link & Metric Tracker Spec

## 1. Link Manager [DB]
*Focus: Organizing all tracking links in one place.*

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Link Name** | Title | e.g., "The Vault - Primary" |
| **Base URL** | URL | The destination URL |
| **Affiliate Link** | URL | Their unique tracked URL |
| **Notes** | Text | e.g., "Use this for Instagram Bio" |

## 2. Payout & Click Tracker [DB]
*Focus: Manual entry of their results to track ROI (or linked via automation).*

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Month** | Title/Date | e.g., "September 2026" |
| **Clicks** | Number | Total clicks reported by our system |
| **Conversions** | Number | Total sales made |
| **Payout Earned** | Number | Total commission in USD |
| **EPC** | Formula | `Payout / Clicks` (Earnings Per Click) |

## 3. Brand Asset Kit [Section]
*A simple Page Section containing:*
- Logos (Primary, Inverse, Icon)
- Product Mockups (3D renders of the Notion templates)
- Banners (Email headers, X banners, Story templates)
- Color Palette (Hex codes)

## 4. Program Terms [Reference Section]
*Static information for partner reference:*
- **Commission**: 30% Recurring (The Vault) / 30% One-time (Templates)
- **Cookie Duration**: 30 Days
- **Payout Schedule**: Monthly via LemonSqueezy (Net 30)
- **Support Email**: `partners@streamline.com`

