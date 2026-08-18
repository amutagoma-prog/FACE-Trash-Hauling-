# FACE Trash Hauling Services - Website Platform

Professional waste management and recycling services website with quote booking system, customer portal, and admin dashboard.

## 🚀 Quick Start

### Prerequisites
- Node.js 22.13.0+
- pnpm (package manager)
- MySQL database

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables (see .env.example)
cp .env.example .env.local

# Run database migrations
pnpm drizzle-kit generate
pnpm drizzle-kit migrate

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

## 📋 Project Overview

FACE Trash Hauling Services is a full-stack web application for a veteran-owned waste management company serving the DMV area (DC, MD, VA). The platform enables customers to request quotes, track booking status, and access their service history through a secure customer portal.

### Key Features

**Public Website:**
- Home page with service overview
- Services page with detailed offerings
- About page with company mission
- FAQ page with 30+ common questions
- Gallery showcasing work
- Careers page with job listings
- Contact form for inquiries
- Live chat support widget

**Quote & Booking System:**
- Online quote request form
- Container size selection (96 gallon, 2-yard, 3-yard, 4-yard)
- Service type selection (Residential, Commercial, Recycling, Construction, Bulk)
- Automatic quote status tracking
- Email and SMS notifications for status changes
- PDF booking summary downloads

**Customer Portal:**
- Secure login via Manus OAuth
- View all past and pending bookings
- Track quote approval status with visual timeline
- Download booking details as PDF
- View service history

**Admin Dashboard:**
- Contact submission management
- Booking request review and approval/rejection
- Equipment inventory tracking (containers, trucks, tools)
- SMS delivery status logging
- Automated notification system

**Professional Features:**
- SBA Veteran-Owned Certification display
- County licenses and certifications
- Mobile-responsive design
- Professional branding and colors
- Accessibility compliance

## 🏗️ Technology Stack

- **Frontend:** React 19, Tailwind CSS 4, TypeScript
- **Backend:** Express 4, tRPC 11, Node.js
- **Database:** MySQL with Drizzle ORM
- **Authentication:** Manus OAuth
- **Storage:** Manus S3 integration
- **Notifications:** Manus SMS/Email APIs
- **Testing:** Vitest
- **Build:** Vite

## 📁 Project Structure

```
face-hauling-services/
├── client/                    # React frontend
│   ├── src/
│   │   ├── pages/            # Page components (Home, Portal, AdminDashboard, etc.)
│   │   ├── components/       # Reusable UI components
│   │   ├── contexts/         # React contexts
│   │   ├── lib/              # Utilities (tRPC client, etc.)
│   │   ├── App.tsx           # Main app with routing
│   │   └── main.tsx          # Entry point
│   ├── public/               # Static files (favicon, robots.txt)
│   └── index.html            # HTML template
├── server/                    # Express backend
│   ├── routers.ts            # tRPC procedure definitions
│   ├── db.ts                 # Database query helpers
│   ├── sms.ts                # SMS notification helpers
│   ├── *.test.ts             # Test files
│   └── _core/                # Framework internals
├── drizzle/                   # Database schema and migrations
│   └── schema.ts             # Table definitions
├── shared/                    # Shared constants and types
├── storage/                   # S3 storage helpers
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
└── vitest.config.ts          # Test config
```

## 🗄️ Database Schema

### Core Tables

**users**
- id, email, name, role (admin/user), createdAt

**bookings**
- id, userId, serviceType, status, pickupDate, location, approvalNotes, createdAt

**bookingContainers**
- id, bookingId, containerSize, quantity

**contactSubmissions**
- id, name, email, phone, message, createdAt

**equipment** (inventory)
- id, type (container/truck/tool), name, quantity, status

**smsDeliveryLogs**
- id, bookingId, phoneNumber, message, status, sentAt

## 🔌 API Endpoints

All API calls go through `/api/trpc`. Key procedures:

### Public Procedures
- `site.submitContact` - Submit contact form
- `site.submitBooking` - Submit quote request
- `site.downloadCertifications` - Get certifications PDF

### Protected Procedures (Authenticated Users)
- `auth.me` - Get current user
- `auth.logout` - Logout user
- `bookings.getForUser` - Get user's bookings
- `bookings.getDetails` - Get booking details

### Admin Procedures (Admin Only)
- `admin.getContactSubmissions` - View contact submissions
- `admin.getBookingRequests` - View booking requests
- `admin.approveQuote` - Approve a quote
- `admin.rejectQuote` - Reject a quote
- `admin.getEquipment` - View inventory
- `admin.updateEquipment` - Update inventory
- `admin.getSmsLogs` - View SMS delivery logs

## 🔐 Environment Variables

See `.env.example` for all required variables. Key ones:

```
DATABASE_URL=mysql://user:password@host/database
JWT_SECRET=your-secret-key
VITE_APP_ID=manus-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your-api-key
VITE_FRONTEND_FORGE_API_KEY=your-frontend-key
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

## 🧪 Testing

Run all tests:
```bash
pnpm test
```

Run specific test file:
```bash
pnpm test server/approval.test.ts
```

Watch mode:
```bash
pnpm test --watch
```

Test files include:
- `server/auth.logout.test.ts` - Authentication
- `server/approval.test.ts` - Quote approval workflow
- `server/sms.test.ts` - SMS notifications
- `server/admin.test.ts` - Admin procedures
- `server/website.workflows.test.ts` - Booking workflows
- `server/stripe.test.ts` - Stripe webhook handling

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Environment Setup
1. Set all required environment variables (see `.env.example`)
2. Ensure database is accessible
3. Set up Manus OAuth credentials
4. Configure Stripe keys (if using payments)

### Running in Production
```bash
NODE_ENV=production node dist/server/index.js
```

## 📝 Common Tasks

### Adding a New Page
1. Create component in `client/src/pages/NewPage.tsx`
2. Add route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/SiteLayout.tsx`

### Adding a New API Procedure
1. Define in `server/routers.ts`
2. Add database helper in `server/db.ts` if needed
3. Call from frontend using `trpc.feature.useQuery()` or `useMutation()`
4. Write tests in `server/feature.test.ts`

### Updating Database Schema
1. Edit `drizzle/schema.ts`
2. Run `pnpm drizzle-kit generate` to create migration
3. Review generated SQL file
4. Apply migration via hosting platform or `pnpm drizzle-kit migrate`

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Database Connection Error
- Check `DATABASE_URL` in environment variables
- Verify database is running and accessible
- Ensure credentials are correct

### Tests Failing
```bash
# Run tests with verbose output
pnpm test --reporter=verbose

# Check for console errors in logs
tail -f .manus-logs/browserConsole.log
```

### OAuth Login Not Working
- Verify `VITE_APP_ID` and `OAUTH_SERVER_URL` are correct
- Check redirect URL matches Manus OAuth settings
- Clear browser cookies and try again

## 📞 Support

For issues or questions:
- Check the Admin Guide (admin-guide.md)
- Review Troubleshooting Guide (troubleshooting.md)
- Contact support team

## 📄 License

Proprietary - FACE Trash Hauling Services

## 🤝 Contributing

This is a client project. Changes should be coordinated with the project owner.

---

**Last Updated:** May 2026
**Version:** 1.0.0
**Status:** Production Ready
