# 🚀 MindCare Platform - Deployment & Setup Guide

## Quick Start (5 minutes)

### Prerequisites
- Node.js 16 or higher
- npm or yarn
- Modern web browser

### Installation & Running

```bash
# Navigate to project
cd "/Users/izazahmed/HCI Project/Project"

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5175
```

The development server supports hot module replacement (HMR) for instant updates.

---

## Testing the Application

### 1. Test Public Pages (No Login Required)
```
✓ Home Page: http://localhost:5175/
✓ Crisis Support: http://localhost:5175/crisis
✓ Therapist Directory: http://localhost:5175/therapists
✓ Resources: http://localhost:5175/resources
✓ Contact: http://localhost:5175/contact
✓ Login: http://localhost:5175/login
✓ Register: http://localhost:5175/register
```

### 2. Test Authenticated Pages

**Login with demo account:**
- Email: `demo@mindcare.com`
- Password: `password123`

**After login, access:**
```
✓ Dashboard: http://localhost:5175/dashboard
✓ Journal: http://localhost:5175/journal
✓ Settings: http://localhost:5175/settings
```

### 3. Test Features

**Mood Tracking:**
1. Go to Dashboard
2. Move mood slider (1-10)
3. Click "Save Mood Check-in"
4. View in chart below

**Journal Writing:**
1. Click "Journal" in navigation
2. Click "New Entry"
3. Fill title, mood level, content
4. Click "Save Entry"
5. View all entries below

**Therapist Search:**
1. Go to Therapists page
2. Filter by specialization
3. Sort by rating or price
4. View therapist details

**Crisis Support:**
1. Go to Crisis page
2. Click on emergency buttons
3. View available resources

---

## Build for Production

### Create Production Bundle

```bash
# Navigate to project
cd "/Users/izazahmed/HCI Project/Project"

# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

### Build Output
```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── index-*.css     # Minified styles (~35KB)
│   └── index-*.js      # Minified bundle (~615KB)
```

---

## Deployment Options

### Option 1: Vercel (Recommended - Free Tier Available)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set production domain
# Follow prompts to complete deployment
```

### Option 2: Netlify (Free)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

```bash
# Update vite.config.ts with your repo name
# Build the project
npm run build

# Deploy the dist folder to GitHub Pages
```

### Option 4: Self-Hosted (Docker)

```dockerfile
# Create Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN npm install -g serve
CMD ["serve", "-s", "dist"]
```

```bash
# Build and run Docker container
docker build -t mindcare .
docker run -p 3000:3000 mindcare
```

---

## Environment Configuration

### Development Environment
- Uses mock data from `src/utils/mockData.ts`
- LocalStorage for persistence
- Hot reload enabled

### Production Environment
- Optimized bundle
- Gzip compression
- CSS minification
- JavaScript tree-shaking

### Environment Variables (for future backend integration)

Create `.env.local`:
```env
VITE_API_URL=https://api.mindcare.com
VITE_AUTH_TOKEN_KEY=mindcare_token
VITE_ENABLE_ANALYTICS=true
```

---

## Performance Optimization

### Current Metrics
- **CSS**: 35.30 KB (6.52 KB gzipped)
- **JavaScript**: 614.89 KB (188.75 KB gzipped)
- **HTML**: 0.45 KB (0.29 KB gzipped)

### Optimization Tips for Scale
1. **Code Splitting**: Use `React.lazy()` and `Suspense`
2. **Image Optimization**: Use WebP format
3. **Caching**: Set proper cache headers
4. **CDN**: Serve assets from CDN
5. **Compression**: Enable gzip/brotli on server

### Example Code Splitting Setup
```typescript
const Dashboard = React.lazy(() => import('./pages/DashboardPage'));
const Journal = React.lazy(() => import('./pages/JournalPage'));

<Suspense fallback={<LoadingSpinner />}>
  <Route path="/dashboard" element={<Dashboard />} />
</Suspense>
```

---

## Database & Backend Integration

### Replace Mock Data with Backend

**Step 1: Install axios**
```bash
npm install axios
```

**Step 2: Create API service**
```typescript
// src/services/api.ts
import axios from 'axios';

const API_BASE = process.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const therapistsAPI = {
  getAll: () => api.get('/therapists'),
  getById: (id: string) => api.get(`/therapists/${id}`),
  book: (data: any) => api.post('/appointments', data),
};
```

**Step 3: Update components**
```typescript
import { useEffect, useState } from 'react';
import { therapistsAPI } from '../services/api';

export const TherapistsPage = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    therapistsAPI.getAll().then(res => setTherapists(res.data));
  }, []);

  // Rest of component...
};
```

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5175
lsof -ti:5175 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache
rm -rf node_modules dist

# Reinstall
npm install

# Try building again
npm run build
```

### Types Not Found
```bash
# Regenerate types
npx tsc --noEmit

# Check tsconfig
cat tsconfig.json
```

### Hot Reload Not Working
```bash
# Restart dev server
npm run dev

# Or check if running on correct port
# Default: http://localhost:5175
```

---

## Security Checklist

- [ ] Enable HTTPS in production
- [ ] Add security headers (CSP, X-Frame-Options)
- [ ] Implement real authentication (OAuth, JWT)
- [ ] Validate all user inputs
- [ ] Use environment variables for secrets
- [ ] Enable CORS properly
- [ ] Rate limiting on APIs
- [ ] Regular security updates
- [ ] SSL certificate for HTTPS
- [ ] HIPAA compliance verification

---

## Monitoring & Analytics

### Add Google Analytics
```typescript
// src/utils/analytics.ts
export const trackEvent = (category: string, action: string) => {
  if (window.gtag) {
    window.gtag('event', action, {
      'event_category': category,
    });
  }
};
```

### Add Error Tracking (Sentry)
```bash
npm install @sentry/react

# In main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: process.env.NODE_ENV,
});
```

---

## Maintenance

### Regular Updates
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update major versions (be careful)
npm install package@latest
```

### Backup & Recovery
```bash
# Create backup
git tag v1.0.0-production
git push origin v1.0.0-production

# Restore from backup
git checkout v1.0.0-production
```

---

## CI/CD Pipeline Example (GitHub Actions)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy MindCare

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - run: npm install
      - run: npm run build
      
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: npx vercel --prod --token=$VERCEL_TOKEN
```

---

## Support & Help

### Documentation
- **README.md**: Project overview and setup
- **FEATURES.md**: Complete feature list
- **This guide**: Deployment instructions

### Resources
- React Docs: https://react.dev
- Vite Docs: https://vite.dev
- TypeScript: https://www.typescriptlang.org

### Community Help
- Stack Overflow: tag with `react`, `vite`
- GitHub Discussions
- React Discord Server

---

## Success Checklist

- [ ] Project builds without errors
- [ ] Dev server runs on http://localhost:5175
- [ ] Can login with demo account
- [ ] Dashboard displays mood tracker
- [ ] Journal entries save locally
- [ ] All pages load without console errors
- [ ] Mobile responsive on 375px width
- [ ] Meets accessibility standards
- [ ] Production build is optimized
- [ ] Ready for user testing

---

**Happy Deploying! 🚀**

For questions or issues, refer to the FEATURES.md or README.md files.
