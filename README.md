# Premium Casino Affiliate Landing Page

A sophisticated, modern casino affiliate website built with Node.js and Express, featuring stunning animations and a luxurious design.

## 🚀 Live Demo

**Live URL:** [Will be updated after deployment]

## 📋 Description

A professional casino affiliate landing page with premium design, featuring animated background elements, casino partner cards, bonus comparisons, and comprehensive information. Built to showcase casino partnerships and exclusive bonus offers with a luxurious, trustworthy aesthetic.

## ✨ Features

### Design & Animations
- **Animated Background Elements**: Floating coins, poker chips, playing cards, dice, and sparkles
- **Smooth Scroll Animations**: Elements fade and slide in as you scroll
- **Interactive Hover Effects**: Cards lift, buttons glow, and elements pulse
- **Jackpot Flash Effects**: Random celebratory animations
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Luxurious Color Scheme**: Deep purples, golds, blacks with vibrant accents

### Content Sections
- **Hero Section**: Eye-catching headline with prominent call-to-action
- **Featured Casinos Grid**: 3+ casino partner cards with ratings and bonuses
- **Bonus Comparison Table**: Side-by-side comparison of casino offers
- **Benefits Section**: Why choose this affiliate site
- **Winners Ticker**: Showcase recent big wins
- **Comprehensive Footer**: Links, payment methods, responsible gaming info

### Technical Features
- Express.js server with single-page architecture
- Pure CSS animations (60fps performance)
- Vanilla JavaScript for interactivity
- Health check endpoint for monitoring
- Optimized for Vercel and Railway deployment
- GPU-accelerated animations
- Parallax scrolling effects

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **HTML/CSS** - Frontend styling

## 📦 Installation & Local Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Git

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/helloworld.git
   cd helloworld
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **View in browser**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

You should see the "Hello World" message displayed with a beautiful gradient background!

## 🌐 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Sign up or log in
4. Click "Add New Project"
5. Import your GitHub repository
6. Vercel will automatically detect the Node.js app
7. Click "Deploy"
8. Once deployed, Vercel will provide you with a public URL

#### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy from your project directory:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

### Deploy to Railway

#### Option 1: Deploy via GitHub

1. Push your code to GitHub
2. Go to [Railway](https://railway.app)
3. Sign up or log in
4. Click "New Project"
5. Select "Deploy from GitHub repo"
6. Choose your repository
7. Railway will automatically detect the Node.js app and deploy it
8. Once deployed, Railway will provide you with a public URL

#### Option 2: Deploy via Railway CLI

1. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```

2. Login to Railway:
   ```bash
   railway login
   ```

3. Initialize and deploy:
   ```bash
   railway init
   railway up
   ```

## 📁 Project Structure

```
helloworld/
│
├── index.js          # Main application file
├── package.json      # Project dependencies and scripts
├── vercel.json      # Vercel deployment configuration
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation (this file)
```

## 🔍 API Endpoints

- `GET /` - Main casino affiliate landing page with full content and animations
- `GET /health` - Health check endpoint (returns JSON status)

## 🎨 Customization

The landing page can be easily customized by editing `index.js`:

### Casino Information
- Update casino names, logos, and ratings in the Featured Casinos section
- Modify bonus offers and amounts
- Add or remove casino cards from the grid

### Color Scheme
- Primary gold color: `#ffd700`
- Background gradient: `#1a0033` to `#2d1b4e`
- Accent colors: Greens (`#2ecc71`), Reds (`#e74c3c`)

### Animations
- Adjust floating element counts (coins, chips, cards, dice, stars)
- Modify animation speeds and delays in CSS
- Enable/disable jackpot flash frequency

### Content Sections
- Edit welcome bonus amounts and wagering requirements
- Update winner information and amounts
- Modify footer links and payment methods
- Customize navigation menu items

## 🧪 Testing the Application

To verify the application is working:

1. **Homepage Test:**
   - Visit the root URL - you should see the full casino affiliate landing page
   - Check for animated floating elements (coins, chips, cards, dice)
   - Verify all sections load: Hero, Featured Casinos, Bonus Comparison, Benefits, Winners, Footer

2. **Animation Test:**
   - Scroll down the page to trigger fade-in animations on cards
   - Hover over casino cards to see lift and glow effects
   - Hover over buttons to see interactive feedback
   - Wait ~30 seconds to see random jackpot flash effect

3. **Responsive Test:**
   - Resize browser window to test mobile responsiveness
   - Verify navigation menu adjusts for smaller screens
   - Check that tables and grids reflow properly

4. **Health Check Test:**
   - Visit `/health` endpoint - you should see JSON response:
   ```json
   {
     "status": "healthy",
     "timestamp": "2024-01-01T00:00:00.000Z"
   }
   ```

## 📝 Environment Variables

The application uses the following environment variables:

- `PORT` - Port number for the server (default: 3000)
  - Both Vercel and Railway automatically set this when deployed

## ⚠️ Responsible Gaming Disclaimer

This is a **DEMO/SAMPLE** casino affiliate landing page for educational and demonstration purposes only.

**Important Notes:**
- All casino names, bonuses, and offers shown are **fictional examples**
- No real casino partnerships or affiliate links are included
- This is a **template/demo** to showcase design and functionality
- If you plan to run a real casino affiliate site:
  - Ensure compliance with gambling advertising laws in your jurisdiction
  - Obtain proper licenses and legal guidance
  - Implement real responsible gaming features
  - Partner only with licensed, regulated casino operators
  - Include accurate, truthful bonus information
  - Display required disclaimers and warnings

**Gambling Responsibility:**
- Gambling can be addictive
- 18+ or legal age in your jurisdiction only
- Always include resources for problem gambling help
- Promote responsible gaming practices

## 🤝 Contributing

This is a demo project for educational purposes. Feel free to fork it and customize it for your needs!

## 📄 License

MIT License - feel free to use this code for learning and projects.

**Note:** While the code is free to use, ensure you comply with all applicable gambling advertising laws and regulations in your jurisdiction before deploying any real casino affiliate content.

## 👤 Author

Created as part of a web development learning exercise.

## 🆘 Troubleshooting

### Issue: "Cannot find module 'express'"
**Solution:** Run `npm install` to install dependencies

### Issue: "Port already in use"
**Solution:** Either stop the process using port 3000, or set a different PORT environment variable:
```bash
PORT=3001 npm start
```

### Issue: Application not loading on Vercel/Railway
**Solution:**
- For Vercel: Ensure `vercel.json` is present and properly configured
- For Railway: Ensure your `package.json` has the correct `start` script
- Both platforms should automatically detect it as a Node.js app

### Issue: Animations not working smoothly
**Solution:**
- Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Check that hardware acceleration is enabled in your browser
- Try reducing the number of floating elements if performance is poor
- Close other resource-intensive tabs or applications

### Issue: Mobile layout looks incorrect
**Solution:**
- Clear your browser cache
- Ensure you're viewing at the correct viewport size
- Check that the viewport meta tag is present in the HTML

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app/)
- [Node.js Documentation](https://nodejs.org/docs/)

---

**Happy Coding! 🎉**
