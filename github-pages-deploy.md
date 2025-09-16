# GitHub Pages Deployment Guide for $ISLE 🏝️

## Step-by-Step Deployment Instructions

### Step 1: Navigate to Your ISLE Directory
```bash
cd ISLE
```

### Step 2: Check Git Status
```bash
git status
```

### Step 3: Add All Files to Git
```bash
git add .
```

### Step 4: Commit Your Changes
```bash
git commit -m "Launch ISLE landing page - Buy Your Own Island 🏝️"
```

### Step 5: Push to GitHub
```bash
git push origin main
```
(If your default branch is 'master' instead of 'main', use `git push origin master`)

### Step 6: Enable GitHub Pages
1. Go to your GitHub repository: `https://github.com/[your-username]/ISLE`
2. Click on **Settings** (in the repo navigation)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Deploy from a branch**
   - **Branch**: main (or master)
   - **Folder**: / (root)
5. Click **Save**

### Step 7: Wait for Deployment
- GitHub will take 2-10 minutes to build and deploy your site
- You'll see a green checkmark ✅ when it's ready
- Your site will be live at: `https://[your-username].github.io/ISLE`

### Step 8: Update Pump.fun Links (When Ready)
When your token is live on pump.fun, update the links:

1. Open `index.html`
2. Find and replace `https://pump.fun` with your actual pump.fun token URL
3. Commit and push the changes:
```bash
git add index.html
git commit -m "Update pump.fun links with live token"
git push origin main
```

## Quick Commands Copy-Paste
```bash
# All in one (from ISLE directory)
git add .
git commit -m "Launch ISLE landing page 🏝️"
git push origin main
```

## Custom Domain (Optional)
If you have a custom domain:
1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Create a CNAME file in your repo with your domain name

## Troubleshooting

**If push is rejected:**
```bash
git pull origin main --rebase
git push origin main
```

**If you need to force push (careful!):**
```bash
git push -f origin main
```

**Check deployment status:**
Go to: `https://github.com/[your-username]/ISLE/actions`

## Files Included
- `index.html` - Main landing page
- `styles.css` - All styling
- `script.js` - Animations and interactions
- `Scene-17.json` - Lottie animation
- `Isle_Logo.png` - Logo image
- `Palm Tree.png` - Palm tree graphics

## Important Notes
- The site is static HTML/CSS/JS - no build process needed
- GitHub Pages is free for public repos
- Changes usually deploy within 2-5 minutes
- Make sure your repo is PUBLIC for GitHub Pages to work

Your island paradise awaits! 🏝️🚀