# FACE Trash Hauling Services - Admin Guide

Complete guide for managing the FACE Trash Hauling Services platform as an administrator.

## 📖 Table of Contents

1. [Getting Started](#getting-started)
2. [Dashboard Overview](#dashboard-overview)
3. [Managing Bookings](#managing-bookings)
4. [Managing Contact Submissions](#managing-contact-submissions)
5. [Equipment Inventory](#equipment-inventory)
6. [SMS & Email Notifications](#sms--email-notifications)
7. [Common Tasks](#common-tasks)
8. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Admin Account Setup

Your admin account has been created with the following credentials:

- **Email:** [Your admin email]
- **Temporary Password:** [Temporary password - change immediately]
- **Role:** Admin

### First Login

1. Navigate to the website: `https://your-domain.com`
2. Click **"Portal"** in the navigation menu
3. Click **"Sign In"**
4. Enter your email and password
5. You'll be redirected to the admin dashboard

### Changing Your Password

1. Log in to your account
2. Click your profile icon in the top-right corner
3. Select **"Settings"**
4. Click **"Change Password"**
5. Enter your current password and new password
6. Click **"Save"**

---

## Dashboard Overview

The admin dashboard is your central hub for managing the business. Here's what you'll see:

### Main Navigation (Left Sidebar)

| Section | Purpose |
|---------|---------|
| **Dashboard** | Overview of key metrics and recent activity |
| **Bookings** | View, approve, and reject quote requests |
| **Contact Submissions** | View and respond to contact form submissions |
| **Inventory** | Manage equipment (containers, trucks, tools) |
| **SMS Logs** | Track SMS notification delivery status |
| **Settings** | Manage admin users and system settings |

### Dashboard Widgets

**Recent Bookings**
- Shows the 5 most recent quote requests
- Displays status (Awaiting Review, Approved, Rejected)
- Click to view full details

**Contact Submissions**
- Shows recent contact form submissions
- Displays customer name, email, and submission date
- Click to view full message

**Equipment Status**
- Shows current inventory levels
- Alerts if any equipment is low stock
- Click to manage inventory

---

## Managing Bookings

Bookings are quote requests from customers. Your job is to review them and approve or reject them.

### Viewing Bookings

1. Click **"Bookings"** in the left sidebar
2. You'll see a list of all bookings with their status:
   - **Awaiting Review** - Needs your decision
   - **Approved** - Quote accepted by you
   - **Rejected** - Quote declined by you

### Reviewing a Booking

1. Click on a booking in the list
2. A detail panel will open showing:
   - **Customer Name & Contact Info**
   - **Service Type** (Residential, Commercial, Recycling, etc.)
   - **Pickup Date** (requested date for service)
   - **Location** (service address)
   - **Containers Selected** (sizes and quantities)
   - **Booking Date** (when customer submitted)

### Approving a Quote

1. Open the booking details
2. Review all information carefully
3. Optionally add approval notes (e.g., "Approved - Scheduled for Monday 9am")
4. Click **"Approve Quote"**
5. System automatically sends:
   - **Email** to customer with approval and booking details
   - **SMS** to customer's phone confirming approval
   - **Notification** to you confirming the action

### Rejecting a Quote

1. Open the booking details
2. Click **"Reject Quote"**
3. Enter a rejection reason (e.g., "Outside service area" or "Equipment not available")
4. Click **"Confirm Rejection"**
5. System automatically sends:
   - **Email** to customer with rejection reason
   - **SMS** to customer's phone with rejection message
   - **Notification** to you confirming the action

### Booking Status Timeline

Customers see a visual timeline of their booking status:

```
Requested → Awaiting Review → Approved/Rejected
```

Once approved, the timeline updates to show:
```
Requested → Awaiting Review → Approved → Scheduled → Completed
```

---

## Managing Contact Submissions

Customers can submit contact forms from the website. You'll see these submissions in the admin dashboard.

### Viewing Contact Submissions

1. Click **"Contact Submissions"** in the left sidebar
2. You'll see a list of all submissions with:
   - Customer name
   - Email address
   - Phone number
   - Submission date
   - Message preview

### Responding to Submissions

1. Click on a submission to view the full message
2. Note the customer's contact information
3. Respond via email or phone as appropriate
4. Mark as "Responded" when you've contacted them

### Common Submission Types

**Service Inquiry**
- Customer asking about specific services
- Response: Provide service details and pricing info

**Scheduling Request**
- Customer wants to book a service
- Response: Direct them to the booking page or schedule directly

**Complaint/Issue**
- Customer reporting a problem
- Response: Apologize, investigate, and offer solution

**Partnership Inquiry**
- Business wanting to partner with you
- Response: Forward to owner or handle as appropriate

---

## Equipment Inventory

Track all equipment (containers, trucks, tools) to ensure you have what you need for bookings.

### Viewing Inventory

1. Click **"Inventory"** in the left sidebar
2. You'll see three categories:
   - **Containers** (96 gallon, 2-yard, 3-yard, 4-yard)
   - **Trucks** (waste haulers, recycling trucks, etc.)
   - **Tools** (rakes, shovels, equipment)

### Equipment Information

Each item shows:
- **Name** - Equipment description
- **Type** - Category (container/truck/tool)
- **Quantity** - Number available
- **Status** - Active/Inactive
- **Last Updated** - When quantity was last changed

### Updating Equipment Quantity

1. Click on an equipment item
2. Click **"Edit"**
3. Update the quantity
4. Add a note (e.g., "Purchased 2 new containers")
5. Click **"Save"**

### Low Stock Alerts

If equipment quantity drops below threshold:
- Dashboard shows warning badge
- You'll receive email notification
- Consider ordering more equipment

### Adding New Equipment

1. Click **"Add Equipment"**
2. Enter equipment name (e.g., "4-Yard Container")
3. Select type (Container/Truck/Tool)
4. Enter quantity
5. Click **"Create"**

### Equipment Status Codes

| Status | Meaning |
|--------|---------|
| **Active** | Equipment is in use and available |
| **Inactive** | Equipment is out of service (repair, retired, etc.) |
| **Reserved** | Equipment is reserved for a specific booking |

---

## SMS & Email Notifications

The system automatically sends notifications to customers. You can track delivery status.

### SMS Delivery Logs

1. Click **"SMS Logs"** in the left sidebar
2. You'll see all SMS messages sent with:
   - **Date Sent** - When the message was sent
   - **Customer Phone** - Recipient's phone number
   - **Message** - Content of the SMS
   - **Status** - Delivery status
   - **Booking ID** - Which booking it relates to

### SMS Status Codes

| Status | Meaning |
|--------|---------|
| **Pending** | Message queued, waiting to send |
| **Sent** | Message successfully sent to carrier |
| **Delivered** | Message delivered to customer's phone |
| **Failed** | Message failed to send (check phone number) |
| **Bounced** | Message bounced (invalid number or carrier issue) |

### Email Notifications

Email notifications are sent automatically for:
- Quote approval (with booking details)
- Quote rejection (with reason)
- Status updates (if applicable)

To view email logs:
1. Check your email server logs (if self-hosted)
2. Or contact support for email delivery reports

### Customizing Notifications

To change notification settings:
1. Click **"Settings"** → **"Notifications"**
2. Choose which events trigger notifications
3. Set notification preferences (email, SMS, both)
4. Click **"Save"**

---

## Common Tasks

### Task: Approve a Quote for Monday Service

1. Go to **Bookings**
2. Find the booking from the customer
3. Click to open details
4. Verify the pickup date is Monday
5. In approval notes, type: "Approved - Scheduled for Monday 9:00 AM"
6. Click **"Approve Quote"**
7. Customer receives email and SMS confirmation

### Task: Check Equipment Availability

1. Go to **Inventory**
2. Look at container quantities
3. If 4-yard containers are low (< 3), order more
4. Update quantity when new equipment arrives
5. Mark old/damaged equipment as "Inactive"

### Task: Respond to a Service Inquiry

1. Go to **Contact Submissions**
2. Click on the submission
3. Read the customer's question
4. Reply via email with service details
5. Mark as "Responded"

### Task: Track SMS Delivery

1. Go to **SMS Logs**
2. Filter by date or booking ID
3. Check status of each message
4. If any show "Failed", verify the phone number
5. Resend if needed

### Task: End-of-Day Review

1. Go to **Dashboard**
2. Review recent bookings and submissions
3. Check if any bookings need approval
4. Check inventory levels
5. Respond to any urgent contact submissions

---

## Troubleshooting

### Issue: SMS Not Sending

**Symptoms:** SMS status shows "Failed" or "Pending"

**Solutions:**
1. Check customer phone number format (should be +1-XXX-XXX-XXXX)
2. Verify customer has a valid US phone number
3. Check SMS service is active in Settings
4. Try resending the message
5. Contact support if issue persists

### Issue: Customer Not Receiving Approval Email

**Symptoms:** Customer says they didn't get approval email

**Solutions:**
1. Check customer email address is correct in booking
2. Ask customer to check spam/junk folder
3. Verify email service is active in Settings
4. Resend the approval email manually
5. Contact support if issue persists

### Issue: Can't Approve a Booking

**Symptoms:** "Approve" button is grayed out or not working

**Solutions:**
1. Refresh the page (F5)
2. Log out and log back in
3. Check your admin permissions
4. Try a different browser
5. Contact support if issue persists

### Issue: Inventory Quantity Shows Wrong Number

**Symptoms:** Inventory count doesn't match physical equipment

**Solutions:**
1. Click on the equipment item
2. Click **"Edit"**
3. Update quantity to match physical count
4. Add note explaining the correction
5. Click **"Save"**

### Issue: Dashboard Not Loading

**Symptoms:** Dashboard page is blank or shows error

**Solutions:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Try a different browser
3. Check internet connection
4. Refresh the page
5. Log out and log back in
6. Contact support if issue persists

### Issue: Lost Admin Password

**Solutions:**
1. Click **"Forgot Password"** on login page
2. Enter your email address
3. Check email for password reset link
4. Click link and create new password
5. Log in with new password

---

## Best Practices

### Daily Routine

- **Morning:** Check dashboard for overnight bookings and submissions
- **Throughout Day:** Review and approve/reject bookings promptly
- **Afternoon:** Respond to contact submissions
- **End of Day:** Check inventory levels and plan ordering

### Booking Management

- **Respond Quickly:** Approve/reject bookings within 24 hours
- **Be Professional:** Use clear, friendly language in approval notes
- **Document Everything:** Add notes explaining your decisions
- **Follow Up:** If customer doesn't confirm, reach out proactively

### Inventory Management

- **Track Carefully:** Update quantities immediately when equipment changes
- **Plan Ahead:** Order new equipment before running low
- **Maintain Equipment:** Mark damaged items as inactive promptly
- **Review Regularly:** Check inventory levels weekly

### Customer Communication

- **Be Responsive:** Answer contact submissions quickly
- **Be Clear:** Explain decisions and next steps clearly
- **Be Professional:** Maintain professional tone in all communications
- **Document:** Keep notes of all customer interactions

---

## Support & Help

If you encounter issues or have questions:

1. **Check This Guide** - Most common issues are covered above
2. **Check Troubleshooting** - Look for your specific issue
3. **Contact Support** - Email: [support email] | Phone: [support phone]
4. **Response Time** - Support responds within 24 business hours

---

**Last Updated:** May 2026
**Version:** 1.0.0
