# Reborn Babies Website - Project Structure

## Directory Structure

```
webapp/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles & Tailwind imports
│   ├── shop/              # Shop listing page
│   ├── product/[slug]/    # Product detail pages
│   ├── gallery/           # Gallery page
│   ├── cart/              # Shopping cart
│   ├── order/              # Order form (multi-step)
│   ├── order/[reference]/ # Order status page
│   ├── contact/           # Contact page
│   └── admin/             # Admin portal (protected)
│
├── components/
│   ├── layout/            # Layout components
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── modal.tsx
│   │   └── form-inputs.tsx
│   └── sections/          # Page sections
│       ├── hero.tsx
│       ├── product-grid.tsx
│       ├── testimonials.tsx
│       └── features.tsx
│
├── lib/
│   ├── db/                # Database utilities
│   │   └── mongodb.ts
│   ├── email/             # Email services
│   │   ├── emailjs.ts
│   │   └── nodemailer.ts (future)
│   └── utils/             # Helper functions
│       ├── seo.ts
│       └── validation.ts
│
├── public/                # Static assets
│   └── images/
│
└── wireframe/             # Design wireframes (reference)
```

## Theme Configuration

### Colors
- **Primary Pink**: `pink-500` (#f08ba8)
- **Soft Lavender**: `lavender-500` (#9d82c0)
- **Baby Blue**: `babyblue-500` (#0ea5e9)
- **Neutrals**: Gray scale matching wireframe

### Typography
- **Body Font**: Inter (sans-serif)
- **Display Font**: Playfair Display (serif)
- **Sizes**: Matching wireframe system (16px base)

### Spacing
- 8px, 16px, 24px, 32px, 48px system

## Next Steps

1. ✅ Configure Tailwind theme
2. ✅ Create layout components
3. ⏳ Build home page sections
4. ⏳ Implement shop/product pages
5. ⏳ Create order flow
6. ⏳ Set up MongoDB connection
7. ⏳ Integrate EmailJS
8. ⏳ Build admin portal

