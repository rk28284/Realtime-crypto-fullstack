<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

</head>
<body>
  <h1>Crypto Trading Analytics Dashboard</h1>
  <p>
    A real-time analytics dashboard for <strong>pump.fun</strong> tokens that streams, analyzes, and visualizes cryptocurrency trading data.
  </p>
  <p>
    Built with Node.js, Express, MongoDB, React, Tailwind CSS, and Chart.js.
  </p>

  <hr>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#backend-setup">Backend Setup</a></li>
      <li><a href="#frontend-setup">Frontend Setup</a></li>
    </ul>
    <li><a href="#csv-upload-guide">CSV Upload Guide</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ul>

  <hr>

  <h2 id="features">Features</h2>
  <ul>
    <li>Real-time ingestion and streaming of pump.fun trade data</li>
    <li>Token selector dropdown for analyzing different tokens</li>
    <li>Price and RSI (Relative Strength Index) technical indicator charts</li>
    <li>Interactive, responsive dashboard UI</li>
    <li>Current price and RSI value display</li>
    <li>Modern, maintainable full-stack architecture</li>
  </ul>

  <h2 id="tech-stack">Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React, Tailwind CSS, Chart.js</li>
    <li><strong>Backend:</strong> Node.js, Express</li>
    <li><strong>Database:</strong> MongoDB</li>
    <li><strong>Data:</strong> pump.fun trades CSV</li>
  </ul>

  <h2 id="getting-started">Getting Started</h2>

  <h3 id="prerequisites">Prerequisites</h3>
  <ul>
    <li>Node.js (v18 or above recommended)</li>
    <li>MongoDB instance (local or cloud)</li>
    <li>npm or yarn</li>
  </ul>

  <h3 id="backend-setup">Backend Setup</h3>
  <pre><code>git clone https://github.com/yourusername/crypto-trading-analytics.git
cd crypto-trading-analytics
cd backend
npm install</code></pre>

  <p>Create a <code>.env</code> in <code>backend/</code>:</p>
  <pre><code>MONGODB_URI=mongodb://localhost:27017/pumpfun
PORT=5000</code></pre>

  <p>Import trades CSV data into MongoDB (option 1 — mongoimport):</p>
  <pre><code>mongoimport --uri="mongodb://localhost:27017/pumpfun" --collection=trades --type=csv --file=trades_data.csv --headerline</code></pre>
  <p>Or use the Node.js script provided in <code>scripts/importCsvToMongo.js</code>.</p>

  <p>Start backend server:</p>
  <pre><code>npm start</code></pre>

  <h3 id="frontend-setup">Frontend Setup</h3>
  <pre><code>cd ../frontend
npm install</code></pre>

  <p>Configure API URL in <code>frontend/.env</code> if needed:</p>
  <pre><code>REACT_APP_API_URL=http://localhost:8080</code></pre>

  <p>Start the frontend:</p>
  <pre><code>npm start</code></pre>

  <p>Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser to view the dashboard.</p>

  <h2 id="csv-upload-guide">CSV Upload Guide</h2>
  <ol>
    <li>Get/update the <code>trades_data.csv</code> file.</li>
    <li>Use the <code>mongoimport</code> command, or the admin UI (if present).</li>
    <li>The dashboard will reflect latest data on reload.</li>
  </ol>

  <h2 id="usage">Usage</h2>
  <ul>
    <li>Select a token to view its price and RSI charts.</li>
    <li>Hover charts for detailed indicator values.</li>
    <li>Current price and RSI are shown at the top.</li>
  </ul>



  <h2 id="acknowledgements">Acknowledgements</h2>
  <ul>
    <li>pump.fun</li>
    <li>Chart.js team</li>
    <li>Open-source crypto dashboard inspirations</li>
  </ul>
</body>
</html>
