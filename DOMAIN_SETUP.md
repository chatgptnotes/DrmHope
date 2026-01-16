# hopesoftwares.com Domain Setup Guide

## Current Status
- **Domain:** hopesoftwares.com (hosted on GoDaddy)
- **Target:** Redirect to www.drmhope.com
- **Admin Panel:** Keep hopesoftwares.com/admin accessible
- **Vercel Project:** drm-hope

## Overview
This guide will help you connect your GoDaddy domain (hopesoftwares.com) to your Vercel project so that:
- ✅ hopesoftwares.com → redirects to www.drmhope.com
- ✅ hopesoftwares.com/admin → serves your CRM admin panel

---

## Step 1: Add Domain to Vercel Project

### Vercel Dashboard Steps:
1. Login to [vercel.com](https://vercel.com)
2. Go to your project: **drm-hope**
3. Click **Settings** tab
4. Click **Domains** in sidebar
5. Click **Add** button
6. Enter domain: `hopesoftwares.com`
7. Click **Add**
8. Vercel will show DNS configuration instructions

---

## Step 2: Configure DNS Records in GoDaddy

### GoDaddy Dashboard Steps:
1. Login to [godaddy.com](https://godaddy.com)
2. Go to **My Products**
3. Find **hopesoftwares.com** → Click **DNS**
4. You'll see current DNS records

### Option A: CNAME Record (Recommended)
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 1 Hour
```

### Option B: A Record (Alternative)
```
Type: A
Name: @
Value: 76.76.19.61
TTL: 1 Hour
```

### Add WWW Subdomain (Optional but Recommended)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 1 Hour
```

---

## Step 3: Important - DON'T Touch These Records

### Keep These Records Unchanged:
- **MX Records** (for email functionality)
- **TXT Records** (for domain verification/SPF)
- **Other CNAME records** (unless you're sure they're not needed)

### Only Replace/Update:
- A record for @ (root domain)
- Or add CNAME for @ if no A record exists

---

## Step 4: Verification Process

### After DNS Changes:
1. **Wait Time:** 2-24 hours for DNS propagation
2. **Check Status:** Vercel dashboard will show domain status
3. **Test URLs:**
   - hopesoftwares.com → should redirect to www.drmhope.com
   - hopesoftwares.com/admin → should serve admin panel

### Verification Commands:
```bash
# Check DNS propagation
nslookup hopesoftwares.com

# Check if domain points to Vercel
dig hopesoftwares.com
```

---

## Step 5: Current Configuration Files

### vercel.json (Already Configured)
```json
{
  "redirects": [
    {
      "source": "/((?!admin).*)",
      "destination": "https://www.drmhope.com/$1",
      "permanent": true
    }
  ],
  "rewrites": [
    {
      "source": "/admin/:path*",
      "destination": "/admin/:path*"
    }
  ]
}
```

---

## Troubleshooting

### Common Issues:

1. **Domain not redirecting after 24 hours:**
   - Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
   - Verify Vercel domain status

2. **Admin panel not accessible:**
   - Check if /admin route exists in Next.js app
   - Verify rewrite rules in vercel.json

3. **SSL Certificate issues:**
   - Vercel automatically provides SSL
   - May take few hours after domain verification

### Quick Checks:
- ✅ Domain added in Vercel dashboard
- ✅ DNS records updated in GoDaddy
- ✅ vercel.json file deployed
- ✅ Wait for propagation (2-24 hours)

---

## Expected Results

### After Complete Setup:
1. **hopesoftwares.com** → 301 redirect to **www.drmhope.com**
2. **hopesoftwares.com/admin** → Serves your CRM admin panel
3. **hopesoftwares.com/any-other-path** → Redirects to **www.drmhope.com/any-other-path**

### Timeline:
- **DNS Changes:** Immediate in GoDaddy
- **Propagation:** 2-24 hours globally
- **Vercel Verification:** Few minutes after propagation
- **SSL Certificate:** Automatic after verification

---

## Contact Information

### Current Project Details:
- **Vercel Project URL:** drm-hope-3p2jr9bwx-chatgptnotes-6366s-projects.vercel.app
- **Target Website:** www.drmhope.com
- **Configuration:** vercel.json (ready and deployed)

### Need Help?
If you encounter any issues during setup, check the troubleshooting section above or contact support.