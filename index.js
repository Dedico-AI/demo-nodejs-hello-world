const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Casino affiliate landing page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Premium Casino Bonuses & Rewards | Top Affiliate Site</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1a0033 0%, #2d1b4e 50%, #1a0033 100%);
          color: #fff;
          overflow-x: hidden;
          position: relative;
        }

        /* Animated Background Elements */
        .floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .floating-item {
          position: absolute;
          opacity: 0.15;
          animation: float 20s infinite ease-in-out;
        }

        .coin {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
        }

        .chip {
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, #e74c3c 0%, #c0392b 100%);
          border-radius: 50%;
          border: 3px solid #fff;
          animation: rotate 15s infinite linear;
        }

        .card {
          width: 30px;
          height: 45px;
          background: #fff;
          border-radius: 3px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          animation: flip 10s infinite ease-in-out;
        }

        .dice {
          width: 35px;
          height: 35px;
          background: #fff;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(255,255,255,0.3);
          animation: tumble 12s infinite ease-in-out;
        }

        .star {
          width: 25px;
          height: 25px;
          background: radial-gradient(circle, #ffd700 0%, transparent 70%);
          animation: sparkle 3s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, -100px) scale(1.1); }
          50% { transform: translate(-50px, -200px) scale(0.9); }
          75% { transform: translate(150px, -150px) scale(1.05); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes flip {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
        }

        @keyframes tumble {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          25% { transform: rotate(90deg) translateY(-20px); }
          50% { transform: rotate(180deg) translateY(0); }
          75% { transform: rotate(270deg) translateY(-20px); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }

        /* Main Content Container */
        .main-content {
          position: relative;
          z-index: 2;
        }

        /* Header and Navigation */
        header {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        nav {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s;
          position: relative;
        }

        .nav-links a:hover {
          color: #ffd700;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #ffd700;
          transition: width 0.3s;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          text-align: center;
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow 2s ease-in-out infinite;
          text-shadow: 0 0 50px rgba(255, 215, 0, 0.3);
        }

        @keyframes glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }

        .hero p {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          color: #e0e0e0;
        }

        .cta-button {
          display: inline-block;
          padding: 1.2rem 3rem;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          color: #1a0033;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: bold;
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.6);
        }

        .cta-button:active {
          transform: translateY(-1px) scale(1.02);
        }

        /* Featured Casinos Section */
        .section {
          max-width: 1200px;
          margin: 4rem auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #ffd700, #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .casino-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .casino-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .casino-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        .casino-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(255, 215, 0, 0.3);
          border-color: rgba(255, 215, 0, 0.5);
        }

        .card-content {
          position: relative;
          z-index: 1;
        }

        .casino-logo {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #ffd700;
        }

        .badge {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          background: linear-gradient(135deg, #e74c3c, #c0392b);
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
          margin-bottom: 1rem;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .rating {
          color: #ffd700;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .bonus-highlight {
          background: rgba(255, 215, 0, 0.1);
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          border-left: 4px solid #ffd700;
        }

        .bonus-highlight h3 {
          color: #ffd700;
          margin-bottom: 0.5rem;
        }

        .features-list {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .features-list li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .features-list li::before {
          content: '✓ ';
          color: #2ecc71;
          font-weight: bold;
          margin-right: 0.5rem;
        }

        .play-button {
          display: block;
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #2ecc71, #27ae60);
          color: white;
          text-align: center;
          text-decoration: none;
          border-radius: 10px;
          font-weight: bold;
          transition: all 0.3s;
          box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);
        }

        .play-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(46, 204, 113, 0.5);
        }

        /* Comparison Table */
        .comparison-table {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 4rem;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        thead {
          background: rgba(255, 215, 0, 0.1);
        }

        th {
          padding: 1.5rem;
          text-align: left;
          font-weight: bold;
          color: #ffd700;
          border-bottom: 2px solid rgba(255, 215, 0, 0.3);
        }

        td {
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        tbody tr {
          transition: all 0.3s;
        }

        tbody tr:hover {
          background: rgba(255, 215, 0, 0.05);
        }

        /* Why Choose Us Section */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .benefit-card {
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          transition: all 0.3s;
        }

        .benefit-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: pulse 2s infinite;
        }

        .benefit-card h3 {
          color: #ffd700;
          margin-bottom: 0.5rem;
        }

        /* Winners Section */
        .winners-ticker {
          background: rgba(46, 204, 113, 0.1);
          padding: 2rem;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 4rem;
          border: 1px solid rgba(46, 204, 113, 0.3);
        }

        .winner-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          margin-bottom: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .winner-name {
          font-weight: bold;
        }

        .winner-amount {
          color: #2ecc71;
          font-size: 1.3rem;
          font-weight: bold;
        }

        /* Footer */
        footer {
          background: rgba(0, 0, 0, 0.7);
          padding: 3rem 2rem 1rem;
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h4 {
          color: #ffd700;
          margin-bottom: 1rem;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links a {
          color: #ccc;
          text-decoration: none;
          display: block;
          padding: 0.3rem 0;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #ffd700;
        }

        .payment-methods {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .payment-icon {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
          font-size: 0.9rem;
        }

        .disclaimer {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #999;
          font-size: 0.9rem;
        }

        .age-warning {
          color: #e74c3c;
          font-weight: bold;
          font-size: 1.1rem;
          margin-top: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .nav-links {
            gap: 1rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          table {
            font-size: 0.9rem;
          }

          th, td {
            padding: 1rem 0.5rem;
          }
        }

        /* Jackpot Flash Effect */
        .jackpot-flash {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 5rem;
          font-weight: bold;
          color: #ffd700;
          text-shadow: 0 0 50px rgba(255, 215, 0, 0.8);
          opacity: 0;
          pointer-events: none;
          z-index: 1000;
          animation: jackpotFlash 5s ease-in-out;
        }

        @keyframes jackpotFlash {
          0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          10%, 20% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
          30% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
      </style>
    </head>
    <body>
      <!-- Floating Background Elements -->
      <div class="floating-elements" id="floatingElements"></div>

      <!-- Main Content -->
      <div class="main-content">
        <!-- Header -->
        <header>
          <nav>
            <div class="logo">🎰 PremiumCasino.Deals</div>
            <ul class="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#casinos">Top Casinos</a></li>
              <li><a href="#bonuses">Bonuses</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </header>

        <!-- Hero Section -->
        <section class="hero" id="home">
          <h1>Unlock Premium Casino Bonuses & Rewards</h1>
          <p>Exclusive offers from trusted casino partners worldwide</p>
          <a href="#casinos" class="cta-button">Claim Your Bonus</a>
        </section>

        <!-- Featured Casinos -->
        <section class="section" id="casinos">
          <h2 class="section-title">⭐ Featured Casino Partners</h2>
          <div class="casino-grid">
            <div class="casino-card">
              <div class="card-content">
                <div class="casino-logo">🎲 Royal Fortune Casino</div>
                <span class="badge">HOT 🔥</span>
                <div class="rating">★★★★★ (4.9/5)</div>
                <div class="bonus-highlight">
                  <h3>Welcome Bonus</h3>
                  <p><strong>200% up to $5,000 + 100 Free Spins</strong></p>
                </div>
                <ul class="features-list">
                  <li>2000+ Premium Games</li>
                  <li>Instant Withdrawals</li>
                  <li>24/7 Live Support</li>
                  <li>Licensed & Secure</li>
                </ul>
                <a href="#" class="play-button">Play Now →</a>
              </div>
            </div>

            <div class="casino-card">
              <div class="card-content">
                <div class="casino-logo">♠️ Diamond Elite Casino</div>
                <span class="badge">NEW ⭐</span>
                <div class="rating">★★★★★ (4.8/5)</div>
                <div class="bonus-highlight">
                  <h3>Welcome Bonus</h3>
                  <p><strong>150% up to $3,000 + 50 Free Spins</strong></p>
                </div>
                <ul class="features-list">
                  <li>1500+ Slot Games</li>
                  <li>Crypto Payments</li>
                  <li>VIP Rewards Program</li>
                  <li>Fair Gaming Certified</li>
                </ul>
                <a href="#" class="play-button">Play Now →</a>
              </div>
            </div>

            <div class="casino-card">
              <div class="card-content">
                <div class="casino-logo">🎰 Lucky Spin Palace</div>
                <span class="badge">POPULAR 💎</span>
                <div class="rating">★★★★☆ (4.7/5)</div>
                <div class="bonus-highlight">
                  <h3>Welcome Bonus</h3>
                  <p><strong>100% up to $2,000 + 200 Free Spins</strong></p>
                </div>
                <ul class="features-list">
                  <li>Live Dealer Games</li>
                  <li>Mobile Optimized</li>
                  <li>Fast Payouts</li>
                  <li>Trusted Since 2015</li>
                </ul>
                <a href="#" class="play-button">Play Now →</a>
              </div>
            </div>
          </div>
        </section>

        <!-- Comparison Table -->
        <section class="section" id="bonuses">
          <h2 class="section-title">💰 Bonus Comparison</h2>
          <div class="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Casino Name</th>
                  <th>Welcome Bonus</th>
                  <th>Wagering</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Royal Fortune Casino</strong></td>
                  <td>200% up to $5,000</td>
                  <td>35x</td>
                  <td style="color: #ffd700;">★★★★★</td>
                  <td><a href="#" class="play-button" style="display: inline-block; padding: 0.5rem 1rem;">Claim</a></td>
                </tr>
                <tr>
                  <td><strong>Diamond Elite Casino</strong></td>
                  <td>150% up to $3,000</td>
                  <td>30x</td>
                  <td style="color: #ffd700;">★★★★★</td>
                  <td><a href="#" class="play-button" style="display: inline-block; padding: 0.5rem 1rem;">Claim</a></td>
                </tr>
                <tr>
                  <td><strong>Lucky Spin Palace</strong></td>
                  <td>100% up to $2,000</td>
                  <td>40x</td>
                  <td style="color: #ffd700;">★★★★☆</td>
                  <td><a href="#" class="play-button" style="display: inline-block; padding: 0.5rem 1rem;">Claim</a></td>
                </tr>
                <tr>
                  <td><strong>Gold Rush Casino</strong></td>
                  <td>125% up to $2,500</td>
                  <td>35x</td>
                  <td style="color: #ffd700;">★★★★☆</td>
                  <td><a href="#" class="play-button" style="display: inline-block; padding: 0.5rem 1rem;">Claim</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Why Choose Us -->
        <section class="section">
          <h2 class="section-title">Why Choose Us?</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">✅</div>
              <h3>Verified Casinos</h3>
              <p>All casinos are thoroughly vetted and licensed by reputable authorities</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🎁</div>
              <h3>Exclusive Bonuses</h3>
              <p>Access special offers not available anywhere else</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">📝</div>
              <h3>Expert Reviews</h3>
              <p>In-depth analysis from our team of casino experts</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🛡️</div>
              <h3>24/7 Support</h3>
              <p>Always here to help you with any questions or concerns</p>
            </div>
          </div>
        </section>

        <!-- Latest Winners -->
        <section class="section">
          <h2 class="section-title">🏆 Latest Big Winners</h2>
          <div class="winners-ticker">
            <div class="winner-item">
              <span class="winner-name">Player J*** from UK</span>
              <span class="winner-amount">$25,430</span>
            </div>
            <div class="winner-item">
              <span class="winner-name">Player M*** from Canada</span>
              <span class="winner-amount">$18,250</span>
            </div>
            <div class="winner-item">
              <span class="winner-name">Player S*** from Germany</span>
              <span class="winner-amount">$32,180</span>
            </div>
            <div class="winner-item">
              <span class="winner-name">Player A*** from Australia</span>
              <span class="winner-amount">$41,920</span>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer>
          <div class="footer-content">
            <div class="footer-grid">
              <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms & Conditions</a></li>
                </ul>
              </div>
              <div class="footer-section">
                <h4>Responsible Gaming</h4>
                <ul class="footer-links">
                  <li><a href="#help">Help & Support</a></li>
                  <li><a href="#limits">Set Limits</a></li>
                  <li><a href="#selfexclusion">Self-Exclusion</a></li>
                  <li><a href="#resources">Problem Gambling Resources</a></li>
                </ul>
              </div>
              <div class="footer-section">
                <h4>Payment Methods</h4>
                <div class="payment-methods">
                  <span class="payment-icon">💳 Visa</span>
                  <span class="payment-icon">💳 Mastercard</span>
                  <span class="payment-icon">₿ Bitcoin</span>
                  <span class="payment-icon">📧 PayPal</span>
                  <span class="payment-icon">🏦 Bank</span>
                </div>
              </div>
              <div class="footer-section">
                <h4>Follow Us</h4>
                <ul class="footer-links">
                  <li><a href="#facebook">📘 Facebook</a></li>
                  <li><a href="#twitter">🐦 Twitter</a></li>
                  <li><a href="#instagram">📷 Instagram</a></li>
                  <li><a href="#youtube">🎥 YouTube</a></li>
                </ul>
              </div>
            </div>
            <div class="disclaimer">
              <p>This website contains affiliate links. We may receive compensation when you sign up with our partners.</p>
              <p>Gambling can be addictive. Please play responsibly and within your means.</p>
              <p class="age-warning">⚠️ 18+ Only | Gamble Responsibly | BeGambleAware.org</p>
              <p style="margin-top: 1rem;">&copy; 2024 PremiumCasino.Deals | All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>

      <script>
        // Generate floating background elements
        function createFloatingElements() {
          const container = document.getElementById('floatingElements');
          const elements = [
            { class: 'coin', count: 15 },
            { class: 'chip', count: 12 },
            { class: 'card', count: 10 },
            { class: 'dice', count: 8 },
            { class: 'star', count: 20 }
          ];

          elements.forEach(({ class: className, count }) => {
            for (let i = 0; i < count; i++) {
              const el = document.createElement('div');
              el.className = 'floating-item ' + className;
              el.style.left = Math.random() * 100 + '%';
              el.style.top = Math.random() * 100 + '%';
              el.style.animationDelay = Math.random() * 5 + 's';
              el.style.animationDuration = (15 + Math.random() * 10) + 's';
              container.appendChild(el);
            }
          });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        });

        // Jackpot flash effect (random)
        function showJackpotFlash() {
          const flash = document.createElement('div');
          flash.className = 'jackpot-flash';
          flash.textContent = '🎰 JACKPOT!';
          document.body.appendChild(flash);
          setTimeout(() => flash.remove(), 5000);
        }

        // Trigger jackpot flash randomly
        setInterval(() => {
          if (Math.random() > 0.7) {
            showJackpotFlash();
          }
        }, 30000);

        // Initialize
        createFloatingElements();

        // Animate numbers on scroll
        const observerOptions = {
          threshold: 0.5,
          rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.casino-card, .benefit-card').forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px)';
          el.style.transition = 'all 0.6s ease-out';
          observer.observe(el);
        });
      </script>
    </body>
    </html>
  `);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log('✅ Casino Affiliate Site running on port ' + PORT);
  console.log('🌍 Visit: http://localhost:' + PORT);
});
