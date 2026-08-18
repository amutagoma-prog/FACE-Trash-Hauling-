# Service Provider White-Label Template Setup Guide

This is a professional, production-ready white-label template designed for service providers (plumbing, HVAC, landscaping, cleaning, electrical, construction, waste management, etc.). The template includes all the features needed to run a modern service business online.

## Quick Start

### 1. Clone and Deploy

```bash
# Clone the template repository
git clone <template-repo-url>
cd service-provider-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### 2. Configure Your Business

The template is configured through environment variables and a configuration file. Update these files with your business information:

#### Environment Variables (.env)

```env
# Your business name and branding
VITE_APP_TITLE="Your Service Company"
VITE_APP_LOGO="https://your-cdn.com/logo.png"

# Contact information
COMPANY_PHONE="(555) 123-4567"
COMPANY_EMAIL="info@yourcompany.com"
COMPANY_ADDRESS="123 Main Street, City, State 12345"

# Stripe (for payments)
STRIPE_SECRET_KEY="sk_test_..."
VITE_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# OAuth (for customer accounts)
VITE_APP_ID="your-app-id"
OAUTH_SERVER_URL="https://api.manus.im"
```

#### Configuration File (shared/templateConfig.ts)

Edit the `defaultTemplateConfig` object to customize:

- **Company Information**: Name, tagline, description, contact details
- **Services**: Add/remove/edit your service offerings with icons and pricing
- **Features**: Toggle which features are enabled (booking, payments, portal, etc.)
- **Colors**: Customize the primary, secondary, and accent colors
- **Pages**: Configure which pages are visible and their content
- **Social Media**: Add your social media links

### 3. Customize Content

#### Services

Edit `shared/templateConfig.ts` and update the `services` array:

```typescript
services: [
  {
    id: "plumbing",
    icon: "Wrench",
    title: "Plumbing Services",
    description: "Professional plumbing repairs and installations",
    pricing: "Starting at $150/hour"
  },
  // Add more services...
]
```

#### Pages

Each main page can be customized:

- **Home** (`client/src/pages/PublicPages.tsx`): Hero section, features, CTA
- **About** (`client/src/pages/PublicPages.tsx`): Company story and team
- **Services** (`client/src/pages/PublicPages.tsx`): Detailed service offerings
- **Contact** (`client/src/pages/PublicPages.tsx`): Contact form and information
- **Gallery** (`client/src/pages/PublicPages.tsx`): Portfolio of work
- **Careers** (`client/src/pages/CareersPage.tsx`): Job listings
- **Portal** (`client/src/pages/Portal.tsx`): Customer account access

#### Branding

- **Logo**: Upload your logo to storage and update `logoUrl` in config
- **Colors**: Customize the color palette in `shared/templateConfig.ts`
- **Typography**: Edit `client/src/index.css` for font choices and sizing
- **Footer**: Update contact information and social links in `client/src/components/SiteLayout.tsx`

## Features Included

### Customer-Facing Features

- **Professional Multi-Page Website**: Home, About, Services, Contact, Gallery, Careers
- **Online Booking System**: Customers can request services with date/location
- **Service Portal**: Customers can view booking history and account details
- **Contact Form**: Lead capture with automatic owner notifications
- **Mobile Responsive**: Works perfectly on all devices

### Payment & Billing

- **Stripe Integration**: Accept online payments and deposits
- **Payment History**: Customers can view their payment records
- **Service Pricing**: Display and manage service pricing
- **Flexible Checkout**: One-click payment processing

### Admin Dashboard

- **Owner-Only Access**: Secure admin dashboard for business owners
- **Inquiry Management**: View and manage contact form submissions
- **Booking Management**: Track and manage service requests
- **Payment Tracking**: Monitor all transactions
- **Role-Based Access**: Admin and customer roles

### Technical Features

- **Authentication**: Built-in user authentication with Manus OAuth
- **Database**: MySQL database for storing bookings, payments, and customer data
- **API**: tRPC backend for type-safe client-server communication
- **Real-time Updates**: Automatic notifications for new inquiries
- **Email Confirmations**: Automated emails for bookings and contacts
- **Testing**: Comprehensive Vitest coverage for reliability

## Configuration Options

### Enable/Disable Features

In `shared/templateConfig.ts`, control which features are active:

```typescript
features_enabled: {
  booking: true,           // Allow online booking
  payments: true,          // Accept payments
  adminDashboard: true,    // Owner dashboard
  customerPortal: true,    // Customer accounts
  careers: true,           // Job listings
  gallery: true,           // Portfolio
}
```

### Customize Service Types

Update the service types in `server/routers.ts`:

```typescript
const serviceTypeValues = [
  "Plumbing Repair",
  "Plumbing Installation",
  "HVAC Service",
  "HVAC Installation",
  // Add your service types...
] as const;
```

### Customize Colors

Edit the color scheme in `shared/templateConfig.ts`:

```typescript
colors: {
  primary: "#0284c7",      // Main brand color
  secondary: "#16a34a",    // Secondary accent
  accent: "#64748b",       // Neutral accent
  background: "#ffffff",   // Background color
}
```

## Deployment

### Deploy to Production

1. **Configure Production Environment**:
   - Update environment variables for production
   - Set up production Stripe keys
   - Configure custom domain

2. **Database Migration**:
   - Run database migrations on production database
   - Verify all tables are created

3. **Deploy**:
   - Push to your hosting provider (Manus, Vercel, Railway, etc.)
   - Verify all features work in production
   - Test payment processing with real Stripe keys

### Custom Domain

1. Purchase a domain from your registrar
2. Update DNS records to point to your hosting
3. Configure SSL certificate (usually automatic)
4. Update environment variables with new domain

## Testing

### Run Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run specific test file
pnpm test server/auth.test.ts
```

### Manual Testing Checklist

- [ ] Homepage loads and displays correctly
- [ ] Navigation works on all pages
- [ ] Booking form submits successfully
- [ ] Contact form sends owner notification
- [ ] Stripe test payment works (use card: 4242 4242 4242 4242)
- [ ] Customer portal shows booking history
- [ ] Admin dashboard shows all inquiries
- [ ] Mobile responsive on all pages
- [ ] Email confirmations send correctly

## Troubleshooting

### Common Issues

**Booking form not submitting**
- Check that all required fields are filled
- Verify database connection is working
- Check server logs for errors

**Payments not processing**
- Verify Stripe keys are correct
- Check that Stripe webhook is configured
- Ensure customer email is valid

**Emails not sending**
- Verify email configuration in server
- Check that SMTP credentials are correct
- Review email logs for errors

**Admin dashboard not accessible**
- Verify you're logged in as admin user
- Check that user role is set to "admin" in database
- Clear browser cache and try again

## Advanced Customization

### Add New Service Type

1. Update `serviceTypeValues` in `server/routers.ts`
2. Update service list in `shared/templateConfig.ts`
3. Update booking form validation schema
4. Test booking flow with new service type

### Add New Page

1. Create new component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/SiteLayout.tsx`
4. Add page configuration to `shared/templateConfig.ts`

### Add New Database Field

1. Update schema in `drizzle/schema.ts`
2. Generate migration: `pnpm drizzle-kit generate`
3. Apply migration: `webdev_execute_sql`
4. Update tRPC procedures in `server/routers.ts`
5. Update React components to use new field

### Customize Email Templates

Edit email templates in `server/email.ts`:
- Booking confirmation email
- Contact form confirmation email
- Add new email types as needed

## Support & Resources

- **Documentation**: See README.md for technical details
- **Stripe Setup**: https://stripe.com/docs
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com

## License

This template is provided as-is for use by service providers. Modify and customize as needed for your business.

---

**Version**: 1.0.0  
**Last Updated**: April 2026  
**Maintained by**: Manus AI
