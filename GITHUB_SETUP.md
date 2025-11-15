# How to Upload This Project to GitHub

Follow these steps to upload your ToDo app to GitHub:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `TODO-list`
5. Add a description (optional): "A simple ToDo list application built with React"
6. Choose "Public" (so others can see it)
7. **DO NOT** check "Initialize this repository with a README" (we already have one)
8. Click "Create repository"

## Step 2: Initialize Git in Your Project

Open your terminal/command prompt and navigate to your project folder:

```bash
cd path/to/todo-app
```

Then run these commands:

```bash
# Initialize git repository
git init

# Add all files to git
git add .

# Commit the files
git commit -m "Initial commit: ToDo app with React"
```

## Step 3: Connect to GitHub and Push

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/TODO-list.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Verify Upload

1. Go to your GitHub repository page: `https://github.com/YOUR_USERNAME/TODO-list`
2. You should see all your files there!

## Step 5: Share on Slack

Once uploaded, share the repository link in the #random channel:

```
Hey everyone! I've completed the ToDo assignment. 
Check it out: https://github.com/YOUR_USERNAME/TODO-list
```

## Troubleshooting

### If you get an authentication error:

You may need to use a Personal Access Token instead of your password:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "todo-app"
4. Select scopes: check "repo"
5. Click "Generate token"
6. Copy the token
7. Use this token as your password when pushing

### Alternative: Using GitHub Desktop

If you prefer a GUI:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in
3. Click "Add" → "Add existing repository"
4. Select your todo-app folder
5. Click "Publish repository"
6. Choose "TODO-list" as the name
7. Click "Publish Repository"

## After Uploading

Don't forget to submit before 22:00 on Wednesday!

### Optional: Deploy to GitHub Pages

Want to make your app live? You can deploy it:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"homepage": "https://YOUR_USERNAME.github.io/TODO-list",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

Then visit: `https://YOUR_USERNAME.github.io/TODO-list`

Good luck with your assignment! 🚀
