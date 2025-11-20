# Hello World Web Application

A simple, beautifully styled "Hello World" web application built with Node.js and Express.

## 🚀 Live Demo

**Live URL:** [Will be updated after Railway deployment]

## 📋 Description

This is a minimalist web application that displays "Hello World" with a modern, gradient-styled interface. Built as a demonstration of deploying a Node.js application to Railway.

## ✨ Features

- Simple Express.js server
- Responsive design with CSS animations
- Health check endpoint for monitoring
- Optimized for Railway deployment
- Beautiful gradient UI

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

## 🌐 Deployment to Railway

### Option 1: Deploy via GitHub (Recommended)

1. Push your code to GitHub
2. Go to [Railway](https://railway.app)
3. Sign up or log in
4. Click "New Project"
5. Select "Deploy from GitHub repo"
6. Choose your repository
7. Railway will automatically detect the Node.js app and deploy it
8. Once deployed, Railway will provide you with a public URL

### Option 2: Deploy via Railway CLI

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
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation (this file)
```

## 🔍 API Endpoints

- `GET /` - Main route, displays "Hello World" page
- `GET /health` - Health check endpoint (returns JSON status)

## 🧪 Testing the Application

To verify the application is working:

1. **Homepage Test:**
   Visit the root URL - you should see "Hello World" displayed

2. **Health Check Test:**
   Visit `/health` endpoint - you should see JSON response:
   ```json
   {
     "status": "healthy",
     "timestamp": "2024-01-01T00:00:00.000Z"
   }
   ```

## 📝 Environment Variables

The application uses the following environment variables:

- `PORT` - Port number for the server (default: 3000)
  - Railway automatically sets this when deployed

## 🤝 Contributing

This is a simple demo project, but feel free to fork it and make it your own!

## 📄 License

MIT License - feel free to use this code for learning and projects.

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

### Issue: Application not loading on Railway
**Solution:** Ensure your `package.json` has the correct `start` script and that Railway detected it as a Node.js app

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Railway Documentation](https://docs.railway.app/)
- [Node.js Documentation](https://nodejs.org/docs/)

---

**Happy Coding! 🎉**
