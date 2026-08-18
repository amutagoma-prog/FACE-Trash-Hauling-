# FACE Trash Hauling Services & Recycling LLC
## Website Handoff Document & Operations Manual

**Project:** FACE Trash Hauling Services Website  
**Live URL:** https://facetraash-bfhgt67h.manus.space/  
**Last Updated:** July 9, 2026  
**Status:** Production Ready ✅

---

## Table of Contents

1. [Website Overview](#website-overview)
2. [Quick Access Links](#quick-access-links)
3. [Daily Operations](#daily-operations)
4. [Customer Management](#customer-management)
5. [Booking & Quote Management](#booking--quote-management)
6. [Payment Processing](#payment-processing)
7. [Content Updates](#content-updates)
8. [Troubleshooting](#troubleshooting)
9. [Technical Support](#technical-support)
10. [Emergency Procedures](#emergency-procedures)

---

## Website Overview

### What's Included

Your FACE website includes:

- **Public Website** - 8 pages (Home, About, Services, FAQ, Contact, Gallery, Careers, Portal)
- **Customer Portal** - Login system for customers to view booking history
- **Admin Dashboard** - Owner-only access to manage bookings and contact submissions
- **Booking System** - Online quote request form with automatic email notifications
- **Contact Form** - Customer inquiries with owner notifications
- **Payment Integration** - Stripe for online payments (test mode active)
- **Email Notifications** - Automated emails for bookings, approvals, rejections
- **Gallery** - Photo carousel with truck and team images
- **Social Media Links** - Instagram and LinkedIn integration

### Key Features

✅ Veteran-owned branding throughout  
✅ Service area zip code lookup tool  
✅ 5 service categories (Residential, Commercial, Recycling, Construction, Bulk)  
✅ Mobile-responsive design  
✅ Professional green and blue color scheme  
✅ Booking approval workflow  
✅ Customer email confirmations  
✅ Admin email notifications  

---

## Quick Access Links

### Public Website
- **Home:** https://facetraash-bfhgt67h.manus.space/
- **Services:** https://facetraash-bfhgt67h.manus.space/services
- **About:** https://facetraash-bfhgt67h.manus.space/about
- **FAQ:** https://facetraash-bfhgt67h.manus.space/faq
- **Contact:** https://facetraash-bfhgt67h.manus.space/contact
- **Gallery:** https://facetraash-bfhgt67h.manus.space/gallery
- **Careers:** https://facetraash-bfhgt67h.manus.space/careers
- **Book Now:** https://facetraash-bfhgt67h.manus.space/booking

### Admin Access
- **Customer Portal:** https://facetraash-bfhgt67h.manus.space/portal (login required)
- **Admin Dashboard:** https://facetraash-bfhgt67h.manus.space/admin (owner/admin only)

### Contact Information
- **Phone:** (301) 327-0919
- **Email:** Taylorwilson59@facehaulingservices.com
- **Address:** 4500 Forbes Blvd, Suite 200, Lanham, MD 20706
- **Service Area:** Lanham, MD and surrounding DMV communities

### Social Media
- **Instagram:** https://www.instagram.com/facehaulingservices/
- **LinkedIn:** https://www.linkedin.com/company/face-trash-hauling-and-recycling-llc

---

## Daily Operations

### Morning Checklist

1. **Check Admin Dashboard** (https://facetraash-bfhgt67h.manus.space/admin)
   - Review new booking requests (status: "pending")
   - Review new contact form submissions
   - Check for any customer messages

2. **Email Inbox**
   - Look for booking confirmation emails from customers
   - Look for contact form submissions (forwarded by system)
   - Check for any system alerts or errors

3. **Respond to Inquiries**
   - Approve or reject pending bookings within 24 hours
   - Reply to contact form submissions within 1 business day
   - Update customers on booking status

### Throughout the Day

- Monitor the website for any errors or issues
- Respond to customer calls at (301) 327-0919
- Process approved bookings in your scheduling system
- Update social media with service announcements (optional)

### End of Day

- Archive completed bookings
- Note any recurring issues for technical team
- Prepare next day's schedule based on approved bookings

---

## Customer Management

### Customer Portal

**What Customers Can Do:**
- Create an account with email and password
- View their booking history
- See booking status (Pending, Approved, Rejected)
- View approved booking details
- Access their account information

**How to Access:**
1. Go to https://facetraash-bfhgt67h.manus.space/portal
2. Click "Sign In" or "Create Account"
3. Enter email and create password
4. Verify email (if required)
5. View bookings and account details

### Customer Booking Flow

1. **Customer Submits Request**
   - Fills out "Request a Quote" form on website
   - Provides: name, email, phone, service type, date, location, notes
   - Selects container sizes needed
   - Receives confirmation email

2. **You Review Request**
   - Check Admin Dashboard for new bookings
   - Review service details and location
   - Verify service area with zip code tool if needed

3. **You Approve or Reject**
   - Click "Approve" to confirm the booking
   - Click "Reject" to decline (optional: add reason)
   - Customer receives email notification automatically

4. **Customer Receives Confirmation**
   - Approved: "Your booking is confirmed for [date]"
   - Rejected: "Unfortunately, we cannot serve your area"

---

## Booking & Quote Management

### Admin Dashboard Features

**Access:** https://facetraash-bfhgt67h.manus.space/admin (owner/admin login only)

**Sections:**

1. **Booking Requests**
   - View all bookings (Pending, Approved, Rejected)
   - Filter by status or date
   - Click booking to see full details
   - Approve/Reject with optional notes

2. **Contact Submissions**
   - View all contact form submissions
   - See customer name, email, phone, message
   - Click to respond or archive

3. **User Management** (if available)
   - View registered customers
   - Manage user roles and permissions

### Approving a Booking

1. Go to Admin Dashboard
2. Find booking in "Pending" section
3. Click booking to view details
4. Review: service type, date, location, customer info
5. Click "Approve" button
6. (Optional) Add approval notes
7. Customer receives approval email automatically

### Rejecting a Booking

1. Go to Admin Dashboard
2. Find booking in "Pending" section
3. Click booking to view details
4. Click "Reject" button
5. (Optional) Add rejection reason (customer will see this)
6. Customer receives rejection email automatically

### Booking Status Meanings

- **Pending:** Awaiting your approval/rejection
- **Approved:** Confirmed with customer, ready to schedule
- **Rejected:** Declined (customer notified)

---

## Payment Processing

### Stripe Integration Status

**Current Status:** Test Mode (Sandbox)  
**Test Card:** 4242 4242 4242 4242  
**Test Expiry:** Any future date (e.g., 12/25)  
**Test CVC:** Any 3 digits (e.g., 123)

### Activating Live Payments

To accept real payments:

1. **Claim Your Stripe Sandbox**
   - URL: https://dashboard.stripe.com/claim_sandbox/[your-sandbox-id]
   - Deadline: Check email for expiration date
   - Complete KYC verification

2. **Switch to Live Mode**
   - Contact Manus support or check Settings → Payment
   - Enter live API keys (provided by Stripe after KYC)
   - Test with live card before going fully live

3. **Payment Options**
   - Credit cards (Visa, Mastercard, Amex)
   - Debit cards
   - Digital wallets (Apple Pay, Google Pay)

### Payment Workflow

1. Customer submits booking request
2. You approve the booking
3. Customer receives email with payment link (if configured)
4. Customer pays via Stripe checkout
5. Payment confirmed in Admin Dashboard
6. Booking marked as "Paid"

### Viewing Payments

- Admin Dashboard → Payments section
- See payment status, amount, date, customer
- Download receipts for records

---

## Content Updates

### Updating Website Content

**Important:** Content changes should be made through the Manus platform, not directly on the server.

### How to Update Different Sections

#### 1. Contact Information
- **Where:** Footer, Contact page, Header
- **How:** Contact Manus support to update phone/email
- **Current:** (301) 327-0919 | Taylorwilson59@facehaulingservices.com

#### 2. Service Descriptions
- **Where:** Services page
- **How:** Contact Manus support with new descriptions
- **Current:** 5 services listed with descriptions

#### 3. FAQ Answers
- **Where:** FAQ page
- **How:** Contact Manus support with updated answers
- **Current:** 5 questions with answers

#### 4. Team Bios
- **Where:** About page
- **How:** Contact Manus support with new bios
- **Current:** 4 team members listed

#### 5. Gallery Images
- **Where:** Gallery page
- **How:** Contact Manus support to upload new images
- **Current:** 4 truck photos + 1 team photo

#### 6. Job Listings
- **Where:** Careers page
- **How:** Contact Manus support with job descriptions
- **Current:** 5 open positions

#### 7. Social Media Links
- **Where:** Footer
- **How:** Contact Manus support with URLs
- **Current:** Instagram & LinkedIn active

### Adding Facebook Page

When you create a Facebook business page:

1. Get your Facebook page URL
2. Contact Manus support
3. Provide: Facebook page URL
4. Support will add icon and link to footer

### Adding New Pages

To add new pages (e.g., Blog, Resources):

1. Contact Manus support
2. Describe page content and purpose
3. Provide content/copy
4. Support will add page and update navigation

---

## Troubleshooting

### Common Issues & Solutions

#### Issue: Website is down or not loading

**Solution:**
1. Check your internet connection
2. Try clearing browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
3. Try a different browser
4. Wait 5-10 minutes (may be temporary server issue)
5. Contact Manus support if issue persists

#### Issue: Booking form not submitting

**Solution:**
1. Ensure all required fields are filled (marked with *)
2. Check that date is in the future
3. Check that zip code is in service area (use zip code tool)
4. Try a different browser
5. Clear browser cache and try again
6. Contact Manus support if issue persists

#### Issue: Customer not receiving confirmation email

**Solution:**
1. Check spam/junk folder
2. Verify email address was entered correctly
3. Wait 5-10 minutes (emails may be delayed)
4. Check Admin Dashboard to see if booking was received
5. Manually send customer a confirmation email
6. Contact Manus support if issue persists

#### Issue: Admin Dashboard not loading

**Solution:**
1. Verify you're logged in (should see your name in top right)
2. Try logging out and logging back in
3. Clear browser cache
4. Try a different browser
5. Contact Manus support if issue persists

#### Issue: Payment not processing

**Solution:**
1. Verify Stripe is in live mode (not test mode)
2. Check that payment details are correct
3. Verify card is not expired or declined
4. Try a different payment method
5. Contact Manus support if issue persists

#### Issue: Email notifications not sending

**Solution:**
1. Check that email address is correct in booking/contact form
2. Verify email is not in spam/junk
3. Check Admin Dashboard to confirm submission was received
4. Manually send customer an email
5. Contact Manus support if issue persists

---

## Technical Support

### Getting Help

**For Website Issues:**
- Contact: Manus Support (support@manus.im or https://help.manus.im)
- Include: Error message, page URL, browser type, steps to reproduce

**For Business Questions:**
- Contact: Your Manus account manager
- Include: Question details, relevant screenshots

**For Urgent Issues:**
- Contact: Manus emergency support (check email for contact info)
- Include: Issue severity, impact on business, steps taken

### Information to Provide

When contacting support, provide:
- **What happened:** Describe the issue clearly
- **When it happened:** Date and time
- **Where it happened:** URL or page name
- **What you did:** Steps you took before the issue
- **What you expected:** What should have happened
- **Browser & Device:** Chrome, Safari, Firefox, etc. + device type
- **Screenshots:** If possible, include screenshots

---

## Emergency Procedures

### Website Down

**If website is completely down:**

1. **Immediate Actions**
   - Check if it's just you or everyone (ask a friend to visit)
   - Try a different browser and device
   - Clear browser cache
   - Wait 5-10 minutes

2. **If Still Down**
   - Contact Manus emergency support immediately
   - Provide: URL, error message, browser type
   - Ask for ETA on fix

3. **Temporary Measures**
   - Post on social media that you're experiencing technical difficulties
   - Direct customers to call (301) 327-0919
   - Manually collect booking requests via phone/email
   - Update voicemail with status

### Payment Processing Down

**If customers can't pay:**

1. **Immediate Actions**
   - Verify Stripe is working (check Stripe dashboard)
   - Try a test payment with test card
   - Check internet connection

2. **If Still Down**
   - Contact Stripe support (https://support.stripe.com)
   - Contact Manus support
   - Provide: Error message, time issue started

3. **Temporary Measures**
   - Collect payment information via phone
   - Process payment manually through Stripe dashboard
   - Send invoice to customer
   - Note: "Payment collected offline" in booking

### Email Notifications Not Sending

**If customers aren't receiving emails:**

1. **Immediate Actions**
   - Check customer email address in booking form
   - Verify email is not in spam/junk
   - Wait 10-15 minutes (emails may be delayed)

2. **If Still Not Received**
   - Manually send customer an email
   - Contact Manus support
   - Provide: Customer email, booking ID, time submitted

3. **Temporary Measures**
   - Call customer to confirm booking
   - Send email manually from your email address
   - Note: "Email sent manually" in booking notes

### Data Loss or Corruption

**If bookings or customer data is lost:**

1. **DO NOT**
   - Do not make any changes to the system
   - Do not attempt to "fix" the database
   - Do not restart the server

2. **DO**
   - Contact Manus support IMMEDIATELY
   - Provide: What data is missing, when you last saw it
   - Ask about backup/recovery options

3. **Temporary Measures**
   - Use phone/email to collect booking information
   - Manually record bookings in spreadsheet
   - Sync data once system is restored

---

## Maintenance & Updates

### Regular Maintenance

**Weekly:**
- Review Admin Dashboard for pending bookings
- Check for any error messages or alerts
- Verify all pages are loading correctly

**Monthly:**
- Review website analytics (if available)
- Check for any broken links
- Update gallery with new photos if available
- Review social media engagement

**Quarterly:**
- Review customer feedback and testimonials
- Update FAQ with new common questions
- Review and update job listings
- Check for any outdated information

### System Updates

The website is automatically updated by Manus. You don't need to do anything. Updates include:

- Security patches
- Bug fixes
- Performance improvements
- Feature enhancements

If you notice any issues after an update, contact Manus support.

---

## Key Contacts & Resources

### Manus Support
- **Website:** https://help.manus.im
- **Email:** support@manus.im
- **Hours:** 24/7 (emergency support available)

### Stripe Support
- **Website:** https://support.stripe.com
- **Dashboard:** https://dashboard.stripe.com

### Your Business Contacts
- **Phone:** (301) 327-0919
- **Email:** Taylorwilson59@facehaulingservices.com
- **Address:** 4500 Forbes Blvd, Suite 200, Lanham, MD 20706

### Social Media
- **Instagram:** https://www.instagram.com/facehaulingservices/
- **LinkedIn:** https://www.linkedin.com/company/face-trash-hauling-and-recycling-llc

---

## Appendix: Frequently Asked Questions

### Q: How do I add a new team member to the About page?
**A:** Contact Manus support with the team member's name, title, and bio. They will add it to the website.

### Q: Can I change the website colors or design?
**A:** Contact Manus support with your design preferences. They can make custom changes for you.

### Q: How do I view website traffic and analytics?
**A:** Contact Manus support to enable analytics. They will provide a dashboard showing visitor data.

### Q: Can I add a blog to the website?
**A:** Yes, contact Manus support to add a blog section. They will set it up and show you how to post articles.

### Q: How do I backup my data?
**A:** Your data is automatically backed up by Manus. Contact support if you need to restore a backup.

### Q: Can I integrate other tools (CRM, accounting software, etc.)?
**A:** Contact Manus support to discuss integration options. Many popular tools can be connected.

### Q: How much does the website cost?
**A:** Contact your Manus account manager for pricing details and billing information.

### Q: Can I move the website to a different platform?
**A:** Yes, contact Manus support to export your data and discuss migration options.

---

## Sign-Off

This website is now ready for production use. All systems are tested and operational.

**Prepared by:** Manus Development Team  
**Date:** July 9, 2026  
**Status:** ✅ Production Ready  

**Next Steps:**
1. Review this document thoroughly
2. Test all features with your team
3. Add your Facebook page URL when ready
4. Claim your Stripe sandbox to activate payments
5. Contact Manus support with any questions

---

**Document Version:** 1.0  
**Last Updated:** July 9, 2026  
**Questions?** Contact Manus Support at https://help.manus.im
