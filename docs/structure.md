# Project Structure Plan

```
app/
  layout.tsx             # Root layout with global providers, nav, footer
  page.tsx               # Marketing homepage shell
  shop/                  # Product listing route group
  product/[slug]/        # Product detail pages
  gallery/               # Gallery grid + lightbox
  contact/               # Contact page + EmailJS form
  cart/                  # Cart review before order flow
  order/                 # Multi-step order experience
    [reference]/         # Client-facing order status page
  admin/                 # Authenticated admin portal (sub-routes for orders, catalog, content)

components/
  layout/                # Navigation, footer, layout primitives
  ui/                    # Reusable atoms (buttons, inputs, badges, modals)
  sections/              # Page-level sections (hero, testimonials, feature grid)
  modules/               # Feature composites (order form stepper, product gallery)

lib/
  config/                # Site constants, theme tokens, navigation data
  db/                    # MongoDB connection + repositories
  email/                 # EmailJS + future Nodemailer helpers
  seo/                   # Metadata builders, structured data helpers
  utils/                 # Formatters, mappers, shared helpers
  types/                 # Shared TypeScript interfaces & Zod schemas
```

This structure keeps marketing, commerce, and admin concerns separated while allowing shared UI and domain utilities to evolve independently.


