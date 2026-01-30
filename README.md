# Alvin Uchenna Ugwu - Academic Portfolio

A professional academic portfolio website for PhD candidate Alvin Uchenna Ugwu, showcasing research in Education for Sustainability, Curriculum Studies, and Instructional Design.

## 🌟 Features

- **Multi-page Structure**: Home, About, Education, Research, and Contact pages
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Dark Professional Theme**: Custom color scheme with smooth animations
- **Image Placeholders**: Ready for profile and about images
- **CV Download**: Button to download curriculum vitae
- **Social Integration**: LinkedIn profile link
- **Smooth Navigation**: Fixed navbar with smooth scrolling

## 📁 File Structure

```
├── index.html          # Home page
├── about.html          # About page with bio
├── education.html      # Education timeline
├── research.html       # Research interests and work
├── contact.html        # Contact information
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio` or `your-username.github.io`)
4. Make it Public
5. Do NOT initialize with README (we already have files)
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**
1. On your new repository page, click "uploading an existing file"
2. Drag and drop all your files:
   - index.html
   - about.html
   - education.html
   - research.html
   - contact.html
   - styles.css
   - script.js
3. Add a commit message like "Initial commit"
4. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
# Navigate to your project folder
cd /path/to/your/portfolio

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add remote repository (replace with your URL)
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. GitHub will show you the URL where your site is published (e.g., `https://your-username.github.io/repository-name/`)
7. Wait 2-3 minutes for the site to deploy

## 🌐 Connecting Your Canva Domain

### Step 1: Get DNS Information from GitHub

Your GitHub Pages site will be at: `https://your-username.github.io/repository-name/`

### Step 2: Configure Canva Domain

1. Log into your Canva account
2. Go to domain settings/management
3. Look for DNS settings or "Connect to external site"

### Step 3: Add DNS Records

You need to add these DNS records in Canva:

**A Records** (point to GitHub's IP addresses):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record**:
- Host/Name: `www`
- Value: `your-username.github.io`

**Specific steps for Canva**:
1. In Canva domain settings, find "DNS Records" or "Advanced DNS"
2. Add A records:
   - Type: A
   - Host: @ (or leave blank)
   - Points to: Add each of the 4 IP addresses above as separate A records
3. Add CNAME record:
   - Type: CNAME
   - Host: www
   - Points to: your-username.github.io

### Step 4: Configure Custom Domain in GitHub

1. Go back to your repository on GitHub
2. Go to Settings > Pages
3. Under "Custom domain", enter your Canva domain (e.g., `yourdomain.com`)
4. Click "Save"
5. Check "Enforce HTTPS" once it's available (may take a few minutes)

### Step 5: Wait for Propagation

- DNS changes can take 24-48 hours to propagate globally
- Usually takes 1-2 hours
- You can check status at https://www.whatsmydns.net/

## 🎨 Using Custom Fonts

The website currently uses Google Fonts (Montserrat and Inter). These fonts are already integrated and will work automatically.

If you want to use different fonts:

1. **Google Fonts**:
   - Go to [Google Fonts](https://fonts.google.com)
   - Select your fonts
   - Copy the `<link>` tag
   - Replace the existing font link in the `<head>` of all HTML files
   - Update the font family names in `styles.css`

2. **Custom Font Files**:
   - Create a `fonts` folder in your repository
   - Upload your font files (.woff, .woff2, .ttf)
   - Add to `styles.css`:
   ```css
   @font-face {
       font-family: 'YourFontName';
       src: url('fonts/yourfont.woff2') format('woff2'),
            url('fonts/yourfont.woff') format('woff');
       font-weight: normal;
       font-style: normal;
   }
   ```
   - Use in CSS: `font-family: 'YourFontName', sans-serif;`

## 📸 Adding Your Images

### Profile Images

Replace the image placeholders with your actual photos:

1. **Prepare your images**:
   - Profile photo: Square format, at least 800x800px
   - About photo: Rectangular, at least 1200x800px
   - Save as JPG or PNG

2. **Upload to GitHub**:
   - Create an `images` folder in your repository
   - Upload your images (e.g., `profile.jpg`, `about.jpg`)

3. **Update HTML**:

In `index.html`, find:
```html
<div class="image-placeholder">
    <!-- SVG code -->
</div>
```

Replace with:
```html
<img src="images/profile.jpg" alt="Alvin Uchenna Ugwu" style="width: 100%; border-radius: 20px;">
```

Do the same for `about.html` and any other pages with image placeholders.

## 📄 Adding Your CV

1. **Upload CV**:
   - Add your CV PDF to the repository (e.g., `Alvin_Ugwu_CV.pdf`)

2. **Update JavaScript**:

In `script.js`, find the CV download section and update:
```javascript
button.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'Alvin_Ugwu_CV.pdf';  // Your CV filename
    link.download = 'Alvin_Ugwu_CV.pdf';
    link.click();
});
```

## 🔧 Customization Tips

### Change Colors

Edit the color variables in `styles.css`:
```css
:root {
    --primary: #0B3C5D;
    --accent: #4A90E2;
    /* ... etc */
}
```

### Update Content

Simply edit the HTML files to change:
- Text content
- Links
- Email addresses
- Social media profiles

### Add More Pages

1. Create a new HTML file (e.g., `publications.html`)
2. Copy the structure from an existing page
3. Add the page link to the navigation in ALL HTML files
4. Update content as needed

## 🐛 Troubleshooting

### Site not showing on GitHub Pages
- Check that files are in the root of the repository
- Ensure `index.html` is named exactly that (lowercase)
- Wait 5-10 minutes after pushing changes

### Custom domain not working
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Check GitHub Pages settings show your custom domain
- Ensure CNAME file is created by GitHub

### Images not loading
- Check file paths are correct
- Ensure image files are uploaded to GitHub
- Use lowercase filenames without spaces

### Fonts not loading
- Check internet connection (Google Fonts require internet)
- Verify font links in HTML `<head>` section
- Clear browser cache

## 📞 Support

For questions about your portfolio website:
- Email: augwu@uwo.ca
- LinkedIn: [Alvin Ugwu](https://www.linkedin.com/in/alvin-ugwu-422b7b171/)

For GitHub Pages issues:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

For Canva domain issues:
- Canva Support Center

## 📝 License

This is a personal portfolio website. Feel free to use the code structure as inspiration for your own portfolio.

---

**Built with ❤️ for academic excellence and sustainability education**
