# Credentials & Access Handoff Document

**FACE Trash Hauling Services Website Platform**

**⚠️ CONFIDENTIAL - KEEP SECURE**

---

## Important Security Notes

This document contains sensitive credentials and access information. Please:

1. **Store securely** - Keep this file in a secure location (password manager, encrypted drive)
2. **Don't share** - Never email or share these credentials via unsecured channels
3. **Change passwords** - Change all temporary passwords immediately after receiving them
4. **Enable 2FA** - Enable two-factor authentication on all accounts
5. **Rotate regularly** - Change passwords every 90 days
6. **Destroy after use** - Delete this document after transferring credentials to secure storage

---

## 1. ADMIN ACCOUNT

### Primary Admin Account

**Email:** [Client Email]  
**Temporary Password:** [Temporary Password]  
**2FA Enabled:** No (set up immediately)  
**Role:** Administrator  

**First Steps:**
1. Log in to https://facetraash-bfhgt67h.manus.space/portal
2. Go to Settings → Change Password
3. Create a strong password (12+ characters, mix of upper/lower/numbers/symbols)
4. Go to Settings → Security
5. Enable two-factor authentication
6. Save backup codes in secure location

---

## 2. DATABASE ACCESS

### MySQL Database Connection

**Host:** [Database Host]  
**Port:** 3306  
**Username:** [Database Username]  
**Password:** [Database Password]  
**Database Name:** face_hauling_production  
**SSL Required:** Yes  

**Connection String:**
```
mysql://[username]:[password]@[host]:3306/face_hauling_production
```

**Tools to Connect:**
- MySQL Workbench (GUI tool)
- Command line: `mysql -u [username] -p -h [host] face_hauling_production`
- Database management tool in hosting dashboard

**Important:**
- Do not modify schema without Developer approval
- Always backup before making changes
- Keep credentials secure
- Use SSL connection

---

## 3. HOSTING PLATFORM ACCESS

### Manus Hosting Account

**Platform:** Manus  
**Account Email:** [Client Email]  
**Account Password:** [Temporary Password]  
**Account URL:** https://dashboard.manus.im  

**Dashboard Access:**
1. Go to https://dashboard.manus.im
2. Log in with email and password
3. Select "face-hauling-services" project
4. View deployment status, logs, and settings

**Key Dashboard Sections:**
- **Preview** - Live website preview
- **Code** - Download all project files
- **Dashboard** - Analytics and status
- **Database** - Database management UI
- **Settings** - Domain, secrets, notifications
- **Publish** - Deploy changes

**Domain Management:**
- Current domain: facetraash-bfhgt67h.manus.space
- Custom domain: [If applicable]
- DNS settings: [If applicable]

---

## 4. GITHUB REPOSITORY

### Code Repository

**Repository URL:** https://github.com/[owner]/face-hauling-services  
**Access Type:** [Private/Public]  
**Branch:** main  

**GitHub Account Setup:**
1. Create GitHub account if you don't have one
2. Developer will add you as collaborator
3. Accept invitation in email
4. Clone repository: `git clone https://github.com/[owner]/face-hauling-services.git`

**Repository Contents:**
- Complete source code
- Database migrations
- Configuration files
- Documentation (README, guides, etc.)
- Test files

**Important:**
- Never commit sensitive credentials
- Use .env.local for local development
- Always pull before making changes
- Create branches for new features
- Use meaningful commit messages

---

## 5. ENVIRONMENT VARIABLES

### Required Secrets

These are configured in your Manus dashboard under Settings → Secrets:

| Variable | Value | Purpose |
|----------|-------|---------|
| DATABASE_URL | [Provided] | MySQL connection string |
| JWT_SECRET | [Provided] | Session signing key |
| VITE_APP_ID | [Provided] | Manus OAuth app ID |
| OAUTH_SERVER_URL | https://api.manus.im | OAuth server |
| VITE_OAUTH_PORTAL_URL | https://portal.manus.im | OAuth login portal |
| BUILT_IN_FORGE_API_URL | https://api.manus.im | Manus APIs |
| BUILT_IN_FORGE_API_KEY | [Provided] | Manus API key (backend) |
| VITE_FRONTEND_FORGE_API_KEY | [Provided] | Manus API key (frontend) |
| VITE_FRONTEND_FORGE_API_URL | https://api.manus.im | Manus APIs (frontend) |
| OWNER_NAME | [Your Name] | Owner name |
| OWNER_OPEN_ID | [Provided] | Owner's Manus ID |
| VITE_STRIPE_PUBLISHABLE_KEY | [Provided] | Stripe public key |
| STRIPE_SECRET_KEY | [Provided] | Stripe secret key |
| STRIPE_WEBHOOK_SECRET | [Provided] | Stripe webhook secret |
| VITE_APP_TITLE | FACE Trash Hauling Services | Site title |
| VITE_APP_LOGO | [URL] | Logo image URL |

**How to Update:**
1. Go to Manus dashboard
2. Click Settings → Secrets
3. Click on variable to edit
4. Update value
5. Click Save
6. Server automatically restarts with new values

---

## 6. EMAIL & SMS SERVICES

### Email Notifications

**Provider:** Manus Built-in APIs  
**Sender Email:** [Sender Email Address]  
**API Key:** Included in BUILT_IN_FORGE_API_KEY  

**Configured Emails:**
- Quote approval notification
- Quote rejection notification
- Owner notifications
- Contact form submissions

**To Test:**
1. Submit a booking request
2. Approve it from admin dashboard
3. Check email inbox for approval notification

### SMS Notifications

**Provider:** Manus Built-in APIs  
**Sender Number:** [Sender Phone Number]  
**API Key:** Included in BUILT_IN_FORGE_API_KEY  

**Configured SMS Messages:**
- Quote approval confirmation
- Quote rejection notification
- Status updates (if applicable)

**To Test:**
1. Submit a booking request with phone number
2. Approve it from admin dashboard
3. Check phone for SMS confirmation

---

## 7. STRIPE PAYMENT INTEGRATION

### Stripe Account

**Account Status:** Sandbox (Test Mode)  
**Stripe Account ID:** [Account ID]  
**Dashboard URL:** https://dashboard.stripe.com  

**Test Keys (for development/testing):**
- Publishable Key: pk_test_[key]
- Secret Key: sk_test_[key]
- Webhook Secret: whsec_[secret]

**Live Keys (after verification):**
- Not yet activated
- Requires KYC verification
- Contact Stripe support to activate

**Claiming Your Sandbox:**

Stripe has created a test sandbox for you. You must claim it before using:

1. Go to: https://dashboard.stripe.com/claim_sandbox/[claim_url]
2. Sign in with your Stripe account
3. Complete verification
4. Sandbox is now active

**Important Dates:**
- Sandbox created: [Date]
- Must claim by: [Expiration Date]
- After expiration: Sandbox will be deleted

**Testing Payments:**

Use these test card numbers:

| Card Type | Number | Expiry | CVC |
|-----------|--------|--------|-----|
| Visa | 4242 4242 4242 4242 | Any future date | Any 3 digits |
| Mastercard | 5555 5555 5555 4444 | Any future date | Any 3 digits |
| Amex | 3782 822463 10005 | Any future date | Any 4 digits |

**Webhook Setup:**

Webhooks are configured to receive payment events:

- **Endpoint:** https://facetraash-bfhgt67h.manus.space/api/stripe/webhook
- **Events:** payment_intent.succeeded, charge.failed, customer.created
- **Status:** Active

---

## 8. MANUS OAUTH CONFIGURATION

### OAuth Application

**App ID:** [Provided]  
**App Name:** FACE Trash Hauling Services  
**Redirect URL:** https://facetraash-bfhgt67h.manus.space/api/oauth/callback  

**How It Works:**

1. Customer clicks "Sign In" on website
2. Redirected to Manus OAuth portal
3. Customer logs in or creates account
4. Redirected back to website
5. Session created automatically

**Managing OAuth Users:**

- Users are automatically created on first login
- User role defaults to "user"
- To make someone admin, contact Developer
- Users can log out from portal

---

## 9. THIRD-PARTY SERVICES

### Manus Platform

**URL:** https://manus.im  
**Support:** https://help.manus.im  
**Status:** https://status.manus.im  

**Services Used:**
- OAuth authentication
- Email/SMS notifications
- File storage (S3)
- LLM integration (if applicable)
- Analytics (if enabled)

### Stripe

**URL:** https://stripe.com  
**Support:** https://support.stripe.com  
**Dashboard:** https://dashboard.stripe.com  

**Services Used:**
- Payment processing
- Webhook notifications
- Customer management

### MySQL Database

**Provider:** [Your Provider]  
**Support:** [Provider Support URL]  

**Services Used:**
- Data persistence
- Query execution
- Backups

---

## 10. BACKUP & DISASTER RECOVERY

### Automated Backups

**Database Backups:**
- Frequency: Daily
- Retention: 30 days
- Location: [Backup Location]
- Managed by: Manus platform

**Code Backups:**
- Git repository: GitHub
- Retention: Unlimited
- Managed by: GitHub

### Manual Backup

To manually backup your data:

```bash
# Backup database
mysqldump -u [username] -p [database_name] > backup.sql

# Backup code
git clone https://github.com/[owner]/face-hauling-services.git backup/
```

### Disaster Recovery

If something goes wrong:

1. **Contact Developer immediately** - Provide details of issue
2. **Don't make changes** - Avoid making changes that might make it worse
3. **Provide access** - Developer may need temporary access to investigate
4. **Follow guidance** - Developer will guide recovery process
5. **Test thoroughly** - Verify everything works after recovery

---

## 11. SUPPORT CONTACTS

### Developer Support

**Name:** [Your Name]  
**Email:** [Your Email]  
**Phone:** [Your Phone]  
**Hours:** Monday-Friday, 9am-5pm EST  
**Response Time:** 24 business hours  

### Emergency Support

**Contact:** [Emergency Contact]  
**Phone:** [Emergency Phone]  
**Available:** 24/7 for critical issues  

### Third-Party Support

**Manus Support:** https://help.manus.im  
**Stripe Support:** https://support.stripe.com  
**MySQL Support:** [Database Provider Support]  

---

## 12. SECURITY CHECKLIST

Complete these security steps immediately:

- [ ] Change admin password from temporary
- [ ] Enable two-factor authentication on admin account
- [ ] Change database password if needed
- [ ] Enable two-factor authentication on GitHub
- [ ] Enable two-factor authentication on Manus dashboard
- [ ] Enable two-factor authentication on Stripe
- [ ] Store credentials in secure password manager
- [ ] Delete this document after transferring credentials
- [ ] Review and update security settings
- [ ] Set up backup procedures
- [ ] Test backup restoration
- [ ] Document your security procedures

---

## 13. NEXT STEPS

### Immediate (Today)

1. Receive this credentials document
2. Change all temporary passwords
3. Enable two-factor authentication
4. Store credentials securely
5. Test access to all systems

### Short-term (This Week)

1. Review Admin Guide (ADMIN_GUIDE.md)
2. Review Troubleshooting Guide (TROUBLESHOOTING.md)
3. Attend training session with Developer
4. Test basic workflows (approve a quote, etc.)
5. Verify email/SMS notifications working

### Ongoing

1. Monitor admin dashboard daily
2. Review bookings and submissions regularly
3. Update inventory as needed
4. Track SMS/email delivery
5. Contact Developer with questions

---

## 14. ACKNOWLEDGMENT

By receiving this document, you acknowledge:

- [ ] You understand the importance of keeping credentials secure
- [ ] You will change all temporary passwords immediately
- [ ] You will enable two-factor authentication
- [ ] You will store credentials in a secure location
- [ ] You will not share credentials via unsecured channels
- [ ] You will delete this document after transferring credentials
- [ ] You understand your responsibilities as administrator
- [ ] You agree to follow security best practices

---

**Handoff Date:** [Date]  
**Prepared By:** [Your Name]  
**Received By:** [Client Name]  
**Signature:** ___________________________  
**Date:** ___________________________  

---

**⚠️ IMPORTANT:** This document contains sensitive information. Destroy it after transferring credentials to a secure password manager. Do not keep it in plain text.

**Last Updated:** May 2026  
**Version:** 1.0.0
