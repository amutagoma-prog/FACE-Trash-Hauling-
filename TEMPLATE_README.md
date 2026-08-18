# Service Provider White-Label Template

A production-ready, fully-featured website template designed for service-based businesses. Perfect for plumbing, HVAC, landscaping, cleaning, electrical, construction, waste management, and other service providers.

## 🚀 Features

### Customer-Facing
- **Professional Multi-Page Website**: Home, About, Services, Contact, Gallery, Careers
- **Online Booking System**: Customers request services with date, location, and notes
- **Service Portal**: Customers view booking history and account details
- **Contact Form**: Lead capture with automatic owner notifications
- **Mobile Responsive**: Fully responsive design for all devices
- **Modern Design**: Professional blue, green, and grey color scheme

### Payment & Billing
- **Stripe Integration**: Accept online payments and service deposits
- **Payment History**: Customers track their payment records
- **Flexible Pricing**: Display and manage service pricing
- **Secure Checkout**: PCI-compliant payment processing

### Admin Dashboard
- **Owner-Only Access**: Secure admin dashboard for business owners
- **Inquiry Management**: View and manage contact form submissions
- **Booking Management**: Track and manage service requests
- **Payment Tracking**: Monitor all transactions
- **Role-Based Access**: Admin and customer roles

### Technical
- **Type-Safe API**: tRPC for end-to-end type safety
- **Database**: MySQL with Drizzle ORM
- **Authentication**: Built-in user auth with Manus OAuth
- **Email Notifications**: Automated booking and contact confirmations
- **Comprehensive Tests**: Vitest coverage for reliability
- **Production Ready**: Deployed and tested architecture

## 📋 Tech Stack

- **Frontend**: React 19, Tailwind CSS 4, shadcn/ui components
- **Backend**: Express.js, tRPC 11, Node.js
- **Database**: MySQL with Drizzle ORM
- **Authentication**: Manus OAuth
- **Payments**: Stripe
- **Testing**: Vitest
- **Deployment**: Manus hosting (or any Node.js host)

## 🎯 Quick Start

### 1. Clone the Template

```bash
git clone <template-repo-url>
cd service-provider-template
pnpm install
```

### 2. Configure Your Business

Edit `shared/templateConfig.ts` with your business information:

```typescript
export const defaultTemplateConfig: TemplateConfig = {
  company: {
    name: "Your Service Company",
    tagline: "Professional Service Provider",
    phone: "(555) 123-4567",
    email: "info@yourcompany.com",
    // ... more fields
  },
  services: [
    {
      id: "service-1",
      icon: "Wrench",
      title: "Your Service Name",
      description: "Service description",
      pricing: "Pricing information"
    },
    // Add more services
  ],
  // ... more configuration
};
```

### 3. Set Environment Variables

Create a `.env` file:

```env
VITE_APP_TITLE="Your Service Company"
VITE_APP_LOGO="https://your-cdn.com/logo.png"
COMPANY_PHONE="(555) 123-4567"
COMPANY_EMAIL="info@yourcompany.com"
STRIPE_SECRET_KEY="sk_test_..."
VITE_STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

### 4. Start Development

```bash
pnpm dev
```

Visit `http://localhost:3000` to see your site.

### 5. Deploy

```bash
pnpm build
# Deploy to your hosting provider
```

## 🎨 Customization

### Change Colors

Edit `shared/templateConfig.ts`:

```typescript
colors: {
  primary: "#0284c7",      // Main brand color
  secondary: "#16a34a",    // Secondary accent
  accent: "#64748b",       // Neutral accent
  background: "#ffffff",   // Background color
}
```

### Add Services

Update the `services` array in `shared/templateConfig.ts`:

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

### Customize Pages

Each page is a React component in `client/src/pages/`:

- **Home** (`PublicPages.tsx`): Hero section, features, CTA
- **About** (`PublicPages.tsx`): Company story and team
- **Services** (`PublicPages.tsx`): Detailed service offerings
- **Contact** (`PublicPages.tsx`): Contact form and information
- **Gallery** (`PublicPages.tsx`): Portfolio of work
- **Careers** (`CareersPage.tsx`): Job listings
- **Portal** (`Portal.tsx`): Customer account access

### Update Logo

1. Upload your logo to storage
2. Update `logoUrl` in `shared/templateConfig.ts`
3. Logo appears in header and footer automatically

### Customize Email Templates

Edit email templates in `server/email.ts`:

```typescript
export function generateBookingConfirmationEmail(booking: Booking) {
  // Customize booking confirmation email
}

export function generateContactConfirmationEmail(contact: ContactSubmission) {
  // Customize contact confirmation email
}
```

## 📊 Database Schema

The template includes tables for:

- **users**: Customer accounts and authentication
- **bookings**: Service requests and scheduling
- **contactSubmissions**: Contact form inquiries
- **paymentRecords**: Payment tracking and history

For multi-tenant support, additional tables are available:

- **tenants**: Service provider organizations
- **templateConfigs**: Per-tenant customization
- **tenantServices**: Per-tenant service offerings
- **tenantFeatures**: Per-tenant feature toggles
- **tenantSocial**: Per-tenant social media links

## 🧪 Testing

Run tests:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

Test coverage includes:

- Authentication flows
- Booking creation and management
- Payment processing
- Contact form submissions
- Admin dashboard access control
- Email notifications

## 🔐 Security

- **Role-Based Access Control**: Admin-only dashboard
- **Secure Authentication**: OAuth with session management
- **PCI Compliance**: Stripe handles payment security
- **Input Validation**: All forms validated server-side
- **CSRF Protection**: Built-in CSRF token handling

## 📱 Responsive Design

The template is fully responsive and tested on:

- Desktop (1920px and above)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🚀 Deployment

### Deploy to Manus

```bash
# Create a checkpoint
pnpm build

# Push to Manus
# (Follow Manus deployment instructions)
```

### Deploy to Other Platforms

The template can be deployed to:

- **Vercel**: `vercel deploy`
- **Railway**: Connect GitHub repository
- **Render**: Connect GitHub repository
- **AWS**: Use Node.js runtime
- **Any Node.js Host**: `npm start`

### Production Checklist

- [ ] Update all environment variables for production
- [ ] Configure production Stripe keys
- [ ] Set up custom domain
- [ ] Enable SSL certificate
- [ ] Configure email service
- [ ] Test all forms and payments
- [ ] Set up monitoring and logging
- [ ] Configure backups

## 📚 Documentation

- **TEMPLATE_SETUP_GUIDE.md**: Detailed setup and customization guide
- **README.md**: Technical documentation
- **Inline Comments**: Code comments throughout the project

## 🆘 Troubleshooting

### Booking form not submitting

1. Check browser console for errors
2. Verify database connection
3. Check server logs: `pnpm dev`
4. Verify all required fields are filled

### Payments not processing

1. Verify Stripe keys are correct
2. Check Stripe webhook configuration
3. Test with card: `4242 4242 4242 4242`
4. Check Stripe dashboard for errors

### Emails not sending

1. Verify email configuration
2. Check SMTP credentials
3. Review email logs
4. Test with a simple email first

### Admin dashboard not accessible

1. Verify you're logged in as admin
2. Check user role in database
3. Clear browser cache
4. Try incognito mode

## 📞 Support

For issues or questions:

1. Check TEMPLATE_SETUP_GUIDE.md
2. Review code comments
3. Check Stripe documentation
4. Review React/Tailwind documentation

## 📄 License

This template is provided as-is for use by service providers. Modify and customize as needed for your business.

## 🎯 Use Cases

This template works great for:

- **Plumbing Services**: Schedule appointments, track jobs
- **HVAC Services**: Maintenance plans, emergency calls
- **Landscaping**: Project quotes, seasonal services
- **Cleaning Services**: Recurring bookings, pricing tiers
- **Electrical Services**: Service requests, emergency dispatch
- **Construction**: Project management, quotes
- **Waste Management**: Pickup scheduling, billing
- **Any Service Business**: Booking, payments, customer portal

## 🔄 Multi-Tenant Setup

For hosting multiple service providers on one platform:

1. Use tenant tables in the database schema
2. Identify tenant from subdomain or custom domain
3. Load tenant configuration from database
4. Filter all queries by tenant ID
5. Customize branding per tenant

See `drizzle/schema-template.sql` for multi-tenant schema.

---

**Version**: 1.0.0  
**Last Updated**: April 2026  
**Created by**: Manus AI

Ready to launch your service provider website? Get started now! 🚀
