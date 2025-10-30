# ContextSearch Landing Page

A modern, conversion-optimized landing page for an AI-powered Reddit search tool. Built with React, Tailwind CSS, shadcn/ui components, and Framer Motion animations.

## 📦 What's Included

### Main Files
- **contextsearch-landing.jsx** - Main landing page component
- **privacy-policy.jsx** - Privacy policy page template
- **terms-of-service.jsx** - Terms of service page template
- **SETUP_GUIDE.md** - Complete setup instructions for payments and email collection
- **README.md** - This file

## ✨ Features

### Design & UX
- 🎨 Modern, professional design inspired by Linear, Stripe, and Vercel
- 🌙 Dark mode toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations and micro-interactions with Framer Motion
- 🎯 Conversion-optimized layout with psychological triggers

### Animations
- **Hero Demo**: Cycling search queries with typing animation
- **Results Animation**: Filters out irrelevant results, shows relevant threads with scores
- **Scroll Animations**: Elements fade in as you scroll
- **Interactive Elements**: Hover effects, progress bars, smooth transitions

### Psychological Conversion Triggers
- ⏰ Urgency: "Launch in 1 month" countdown
- 🔥 Scarcity: "Only 37 spots remaining" with progress bar
- 👥 Social Proof: "247+ on waitlist"
- 💎 Value Anchoring: "$171 value for $28"
- 🎁 Risk Reversal: Free trial on waitlist
- 📊 Specificity: Exact numbers and percentages

### Functional Features
- ✅ Email collection with multiple integration options
- 💳 Stripe payment integration
- 📧 Success/error message handling
- 🔄 Form validation
- 📱 Smooth scroll navigation

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install framer-motion lucide-react
# Also install shadcn/ui components if not already done
```

### 2. Setup Payments (5 minutes)

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Create a Product: $28 one-time payment
3. Create Payment Link
4. Replace `YOUR_PAYMENT_LINK_HERE` in the code (appears twice)

### 3. Setup Email Collection (5 minutes)

**Recommended: Web3Forms (FREE)**
1. Sign up at [web3forms.com](https://web3forms.com)
2. Get your access key
3. Replace `58aebf1f-7dc2-44d8-9f01-4144fea6df4b` in the code
4. Done! Emails will be sent to your inbox

See **SETUP_GUIDE.md** for other options (Google Sheets, Mailchimp, custom backend, etc.)

### 4. Customize Content

Update these in the code:
- Domain/email: `support@contextsearch.ai` → your actual email
- Launch date: `November 30, 2025` → your actual date
- Founding member count: `63/100` → your actual progress
- Waitlist count: `247+` → your actual number (or remove if starting fresh)

### 5. Add Legal Pages

Don't forget to:
1. Review and customize privacy-policy.jsx with a lawyer
2. Review and customize terms-of-service.jsx with a lawyer
3. Setup routing (see SETUP_GUIDE.md)

## 📁 Project Structure

```
├── contextsearch-landing.jsx    # Main landing page
├── privacy-policy.jsx            # Privacy policy (template)
├── terms-of-service.jsx          # Terms of service (template)
├── SETUP_GUIDE.md               # Detailed setup instructions
└── README.md                    # This file
```

## 🎨 Customization

### Colors
The design uses a purple/blue gradient theme. To change:
- Search for: `purple-` and `blue-` classes
- Replace with your brand colors

### Copy/Content
All text is easily editable in the JSX. Key sections:
- Hero headline
- Problem statements (3 pain points)
- Feature benefits
- Pricing tiers
- FAQ answers

### Animation Timing
Adjust animation speeds in Framer Motion props:
```javascript
transition={{ duration: 0.6, delay: 0.2 }}
```

## 🛠 Tech Stack

- **React** - UI framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📊 Email Collection Options

1. **Web3Forms** (Recommended) - Free, no backend
2. **Google Sheets** - Via Zapier/Make.com
3. **ConvertKit/Mailchimp** - Email marketing
4. **Custom Backend** - Full control
5. **Supabase** - Modern database

See **SETUP_GUIDE.md** for complete instructions for each option.

## ⚠️ Important Notes

### Legal Templates
The privacy policy and terms of service are **TEMPLATES ONLY** and **NOT LEGAL ADVICE**. 

Before launching:
- ✅ Consult with a lawyer
- ✅ Customize for your business
- ✅ Ensure GDPR/CCPA compliance
- ✅ Update contact information
- ✅ Add your jurisdiction

### Email Domain
Update all instances of `contextsearch.ai` to your actual domain:
- Footer contact email
- Privacy policy contact
- Terms of service contact

### Testing
Test before launch:
- ✅ Email submission (use your own email)
- ✅ Stripe payment flow (use test mode)
- ✅ All links work
- ✅ Mobile responsive
- ✅ Dark mode toggle
- ✅ Forms validate properly

## 🎯 Conversion Optimization Tips

1. **Above the fold matters**: Hero section should immediately communicate value
2. **Use specific numbers**: "247+ users" vs "lots of users"
3. **Create urgency**: Launch dates, limited spots
4. **Show, don't tell**: Animated demo is worth 1000 words
5. **Remove friction**: One-click waitlist, clear CTAs
6. **Social proof**: Testimonials, user counts (when you have them)
7. **Risk reversal**: Free trial, money-back guarantee

## 📈 A/B Testing Ideas

Once launched, test:
- Headline variations
- Pricing ($28 vs $39 vs $59)
- CTA button text
- Demo search queries
- Social proof numbers
- Urgency messaging

## 🐛 Troubleshooting

**Animations not working?**
- Make sure Framer Motion is installed
- Check console for errors

**Email not submitting?**
- Check network tab for API calls
- Verify API key is correct
- Check for CORS issues

**Stripe link not working?**
- Make sure you're using the full URL
- Check Stripe dashboard for link status

**Dark mode not toggling?**
- React state should be working
- Check browser console for errors

## 📞 Support

Questions? Check:
- **SETUP_GUIDE.md** - Detailed setup instructions
- **Stripe Docs** - https://stripe.com/docs
- **Web3Forms Docs** - https://docs.web3forms.com

## 📄 License

This is a custom-built landing page. Modify and use as needed for your project.

---

**Built with ❤️ for conversion-focused SaaS founders**

Good luck with your launch! 🚀