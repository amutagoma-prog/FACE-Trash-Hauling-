# FACE Trash Hauling Services - Troubleshooting Guide

Quick reference guide for resolving common issues with the FACE Trash Hauling Services platform.

## 🔧 General Troubleshooting

### Website Won't Load

**Problem:** Website shows blank page or "Connection refused"

**Check:**
1. Is the server running? Check hosting dashboard
2. Is internet connection working? Try another website
3. Clear browser cache: Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
4. Try a different browser (Chrome, Firefox, Safari)
5. Check if domain is pointing to correct server

**Solution:**
```bash
# If running locally:
cd /home/ubuntu/face-hauling-services
pnpm dev

# Check server is running on port 3000
curl http://localhost:3000
```

### Slow Website Performance

**Problem:** Website loads slowly or times out

**Causes:**
- Database query is slow
- Server is under heavy load
- Network connection is slow
- Browser has too many tabs open

**Solutions:**
1. Check server resources (CPU, memory, disk)
2. Restart the server
3. Clear browser cache
4. Close unnecessary browser tabs
5. Check database connection
6. Contact hosting provider if issue persists

---

## 🔐 Authentication Issues

### Can't Log In

**Problem:** Login fails with error message

**Check:**
1. Is email address spelled correctly?
2. Is password correct? (passwords are case-sensitive)
3. Is Caps Lock on?
4. Is account activated?
5. Is OAuth service working?

**Solutions:**
1. Try password reset: Click "Forgot Password" on login page
2. Check email for reset link
3. Create new password and try logging in again
4. If still failing, contact support

### Stuck on Login Page

**Problem:** Redirects to login page repeatedly

**Causes:**
- Session cookie is corrupted
- OAuth service is down
- Browser cookies are disabled

**Solutions:**
1. Clear browser cookies: Ctrl+Shift+Delete
2. Clear browser cache
3. Try a different browser
4. Disable browser extensions (ad blockers, etc.)
5. Check if OAuth service is operational
6. Try incognito/private browsing mode

### "Unauthorized" or "Forbidden" Error

**Problem:** Getting access denied error

**Causes:**
- Not logged in
- Don't have admin permissions
- Session expired

**Solutions:**
1. Log out and log back in
2. Verify you have admin role
3. Contact owner to promote account to admin
4. Clear cookies and try again

---

## 📋 Booking Issues

### Can't Approve/Reject Bookings

**Problem:** Approve/Reject buttons don't work

**Causes:**
- Not logged in as admin
- Booking already processed
- Server error
- Browser issue

**Solutions:**
1. Verify you're logged in as admin
2. Refresh the page
3. Try a different browser
4. Check browser console for errors (F12)
5. Contact support with error message

### Booking Not Appearing in List

**Problem:** Customer's booking doesn't show in admin dashboard

**Causes:**
- Booking was rejected/deleted
- Booking is in different status filter
- Database sync issue
- Page not refreshed

**Solutions:**
1. Refresh the page (F5)
2. Check different status filters (Awaiting Review, Approved, Rejected)
3. Search by customer name or booking ID
4. Check if booking was accidentally deleted
5. Contact support if still missing

### Customer Not Receiving Approval Email

**Problem:** Customer says they didn't get approval email

**Causes:**
- Email address is incorrect
- Email went to spam folder
- Email service is down
- Email not actually sent

**Solutions:**
1. Verify customer email address in booking
2. Ask customer to check spam/junk folder
3. Resend approval email manually
4. Check email logs for delivery status
5. Verify email service is active in settings
6. Contact support if issue persists

### SMS Not Sending to Customer

**Problem:** SMS status shows "Failed" or "Pending"

**Causes:**
- Phone number format is wrong
- Phone number is invalid
- SMS service is down
- Customer's phone is off

**Solutions:**
1. Verify phone number format: +1-XXX-XXX-XXXX
2. Check if number is valid US number
3. Try resending the message
4. Check SMS logs for error details
5. Ask customer to turn phone on
6. Contact support if issue persists

---

## 📦 Inventory Issues

### Can't Update Equipment Quantity

**Problem:** Can't edit inventory or changes don't save

**Causes:**
- Not logged in as admin
- Browser issue
- Server error
- Network connection lost

**Solutions:**
1. Verify you're logged in as admin
2. Refresh the page
3. Try a different browser
4. Check internet connection
5. Try updating a different item
6. Contact support if issue persists

### Equipment Quantity Shows Wrong Number

**Problem:** Inventory count doesn't match physical equipment

**Causes:**
- Quantity wasn't updated when equipment arrived/left
- Data sync issue
- Multiple admins updating simultaneously

**Solutions:**
1. Count physical equipment
2. Go to inventory and click edit
3. Update quantity to match physical count
4. Add note explaining the correction
5. Click save
6. Verify change was saved

### Can't Add New Equipment

**Problem:** "Add Equipment" button doesn't work

**Causes:**
- Not logged in as admin
- Server error
- Browser issue

**Solutions:**
1. Verify you're logged in as admin
2. Refresh the page
3. Try a different browser
4. Check internet connection
5. Contact support if issue persists

---

## 💬 Contact Form Issues

### Contact Submissions Not Appearing

**Problem:** Customer submitted form but it's not in admin dashboard

**Causes:**
- Form submission failed
- Submission went to spam
- Database error
- Page not refreshed

**Solutions:**
1. Refresh the admin dashboard
2. Check if form validation error prevented submission
3. Ask customer to try submitting again
4. Check browser console for errors (F12)
5. Contact support if issue persists

### Can't Respond to Submissions

**Problem:** Can't mark submission as responded or reply

**Causes:**
- Not logged in as admin
- Submission was deleted
- Server error

**Solutions:**
1. Verify you're logged in as admin
2. Refresh the page
3. Try a different browser
4. Contact support if issue persists

---

## 🔔 Notification Issues

### SMS Logs Show "Failed" Status

**Problem:** SMS messages showing as failed

**Causes:**
- Invalid phone number
- SMS service is down
- Carrier rejected message
- Account balance too low

**Solutions:**
1. Check phone number format
2. Verify phone number is valid
3. Check SMS service status
4. Contact SMS provider
5. Verify account has sufficient balance

### Not Receiving Admin Notifications

**Problem:** Not getting email/SMS alerts

**Causes:**
- Notifications disabled in settings
- Email/SMS service is down
- Contact info is incorrect

**Solutions:**
1. Go to Settings → Notifications
2. Verify notifications are enabled
3. Check email address/phone number is correct
4. Verify email/SMS service is active
5. Check spam folder for emails
6. Contact support if issue persists

---

## 🖥️ Server Issues

### Server Crashes or Becomes Unresponsive

**Problem:** Website goes down or becomes very slow

**Symptoms:**
- Website won't load
- Extreme slowness
- 500 error messages
- Timeout errors

**Immediate Actions:**
1. Check if it's a hosting provider issue (check status page)
2. Try restarting the server
3. Check server logs for errors
4. Check database connection
5. Contact hosting provider

**Restart Server:**
```bash
# If you have server access:
cd /home/ubuntu/face-hauling-services
# Stop current server (Ctrl+C)
# Restart:
pnpm dev
# Or in production:
NODE_ENV=production node dist/server/index.js
```

### Database Connection Error

**Problem:** "Database connection failed" or similar error

**Causes:**
- Database server is down
- Connection string is wrong
- Database credentials are wrong
- Network connection to database is blocked

**Solutions:**
1. Verify `DATABASE_URL` environment variable is correct
2. Check if database server is running
3. Verify database credentials
4. Check network connectivity to database
5. Check firewall rules
6. Contact database provider or support

### Out of Disk Space

**Problem:** Server shows "No space left on device" error

**Causes:**
- Log files are too large
- Database has grown too large
- Temporary files not cleaned up

**Solutions:**
1. Check disk usage: `df -h`
2. Clean up old log files
3. Archive old database records
4. Delete temporary files
5. Contact hosting provider for more space

---

## 🐛 Browser Console Errors

### How to Check Browser Console

1. Open browser developer tools: F12 (or Cmd+Option+I on Mac)
2. Click "Console" tab
3. Look for red error messages
4. Note the error message and line number
5. Share with support if needed

### Common Console Errors

**"Uncaught TypeError: Cannot read property..."**
- Usually means a variable is undefined
- Refresh the page
- Clear browser cache
- Try different browser

**"Failed to fetch..."**
- Network request failed
- Check internet connection
- Check if API server is running
- Check CORS settings

**"401 Unauthorized"**
- Not authenticated
- Session expired
- Log out and log back in

**"403 Forbidden"**
- Don't have permission
- Check user role
- Verify admin access

---

## 📞 When to Contact Support

Contact support if you encounter:

1. **Persistent errors** that don't resolve after troubleshooting
2. **Data loss** or corruption
3. **Security concerns** or suspicious activity
4. **Performance issues** that affect all users
5. **Database errors** or connection issues
6. **Payment/billing issues**
7. **Feature requests** or enhancement ideas

### Support Contact Information

- **Email:** [support email]
- **Phone:** [support phone]
- **Response Time:** 24 business hours
- **Emergency:** [emergency contact]

### Information to Provide

When contacting support, include:

1. **Description of issue** - What's happening?
2. **Steps to reproduce** - How can support recreate the issue?
3. **Error message** - What does the error say?
4. **Browser/device** - What browser/device are you using?
5. **Screenshots** - Visual proof of the issue
6. **Booking/User ID** - If applicable
7. **When it started** - When did this issue begin?

---

## 🔍 Advanced Troubleshooting

### Check Server Logs

```bash
cd /home/ubuntu/face-hauling-services

# View recent server output
tail -f .manus-logs/devserver.log

# View browser console errors
tail -f .manus-logs/browserConsole.log

# View network requests
tail -f .manus-logs/networkRequests.log

# View user interactions
tail -f .manus-logs/sessionReplay.log
```

### Run Tests to Verify Functionality

```bash
cd /home/ubuntu/face-hauling-services

# Run all tests
pnpm test

# Run specific test file
pnpm test server/approval.test.ts

# Run with verbose output
pnpm test --reporter=verbose
```

### Check Database Connection

```bash
# Verify DATABASE_URL is set
echo $DATABASE_URL

# Test connection (requires mysql client)
mysql -u username -p -h host database_name -e "SELECT 1;"
```

---

## ✅ Quick Checklist

When troubleshooting, work through this checklist:

- [ ] Refresh the page (F5)
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Try a different browser
- [ ] Log out and log back in
- [ ] Check internet connection
- [ ] Check if server is running
- [ ] Check browser console for errors (F12)
- [ ] Verify you have correct permissions
- [ ] Check environment variables are set
- [ ] Check database is accessible
- [ ] Restart the server
- [ ] Check hosting provider status page
- [ ] Contact support with detailed information

---

**Last Updated:** May 2026
**Version:** 1.0.0
