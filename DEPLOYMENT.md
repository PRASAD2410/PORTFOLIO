# Deployment Guide - Vercel

## One-Click Deployment

### Step 1: Prepare Your Repository

Your portfolio is already pushed to GitHub. Now let's deploy to Vercel.

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy from your project directory:**
```bash
cd /home/prasad/PORT
vercel
```

4. **Follow the prompts:**
   - Select "Use current settings"
   - Set environment variables if needed
   - Confirm deployment

#### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your GitHub repository: `https://github.com/PRASAD2410/PORTFOLIO`
3. Select "Portfolio" as project name
4. Configure:
   - **Framework**: Vite/React
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Output Directory**: `frontend/dist`
   - **Install Command**: `npm install`
5. Click Deploy

### Step 3: Configure Backend API

For the backend API, you have two options:

#### Option 1: Deploy Backend Separately
1. Create a new Vercel project for backend
2. Set Root Directory to `backend/`
3. Build Command: `npm run build` (or leave empty for Node.js)
4. Update frontend API URL to point to new backend URL

#### Option 2: Monorepo Setup (Recommended)
The vercel.json is already configured for this.

### Step 4: Environment Variables (if needed)

In Vercel Dashboard:
1. Go to Settings → Environment Variables
2. Add any required variables:
   ```
   NODE_ENV=production
   API_URL=your_backend_url
   ```

### Step 5: Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Post-Deployment Checklist

- [ ] Frontend loads correctly
- [ ] Navigation works
- [ ] Terminal commands execute
- [ ] API calls succeed (contact form, data fetching)
- [ ] All pages render properly
- [ ] Mobile responsive
- [ ] Performance is acceptable

## Troubleshooting

### "Build failed" error
- Check build logs in Vercel dashboard
- Ensure `frontend/dist` directory is generated
- Verify Node.js version compatibility

### API Not Working
- Ensure backend is deployed and accessible
- Check CORS headers in backend
- Verify environment variables

### Port 3000 Already in Use
- Vercel automatically assigns ports - no action needed

### Frontend Can't Reach Backend
- Update API URL in frontend code to point to deployed backend
- Add CORS headers in backend

## Deployment URLs

After deployment, your URLs will be:
- **Frontend**: `https://your-project-name.vercel.app`
- **Backend API**: `https://your-api-name.vercel.app` (if separate)

## Continuous Deployment

Your portfolio will automatically redeploy when you:
1. Push to main branch on GitHub
2. Vercel detects changes
3. Triggers automatic build and deployment

## Rollback

If you need to go back to a previous version:
1. Go to Deployments in Vercel Dashboard
2. Select previous deployment
3. Click "Promote to Production"

---

**For more help:** https://vercel.com/docs
