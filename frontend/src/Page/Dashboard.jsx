import  { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Loading } from "../Component/Loading";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function calculateRSI(prices, period = 14) {
  let gains = [], losses = [], avgGain = [], avgLoss = [], rsi = [];
  for (let i = 1; i < prices.length; i++) {
    let delta = prices[i] - prices[i - 1];
    gains.push(delta > 0 ? delta : 0);
    losses.push(delta < 0 ? -delta : 0);
  }
  for (let i = 0; i < prices.length; i++) {
    if (i < period) {
      avgGain[i] = null; avgLoss[i] = null; rsi[i] = null;
    } else if (i === period) {
      avgGain[i] = gains.slice(0, period).reduce((a, b) => a + b, 0) / period;
      avgLoss[i] = losses.slice(0, period).reduce((a, b) => a + b, 0) / period;
      rsi[i] = 100 - (100 / (1 + (avgGain[i] / avgLoss[i])));
    } else {
      avgGain[i] = ((avgGain[i - 1] * (period - 1)) + gains[i - 1]) / period;
      avgLoss[i] = ((avgLoss[i - 1] * (period - 1)) + losses[i - 1]) / period;
      rsi[i] = 100 - (100 / (1 + (avgGain[i] / avgLoss[i])));
    }
  }
  return rsi;
}


const fetchTradesData = async () => {
  try {
    const response = await fetch("https://realtime-crypto-backend.onrender.com/trade");
    if (!response.ok) throw new Error("Failed to fetch trades");
    return await response.json();
  } catch (error) {
    console.error("Failed to load trade data:", error);
    return [];
  }
};

export const Dashboard = () => {
  const [trades, setTrades] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [selectedToken, setSelectedToken] = useState("");
  const [priceData, setPriceData] = useState([]);
  const [rsiData, setRsiData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTradesData().then(data => {
      setTrades(data);
      const uniqueTokens = [...new Set(data.map(d => d.token_address))];
      setTokens(uniqueTokens);
      setSelectedToken(uniqueTokens[0] || "");
      setLoading(false);
    });

  }, []);

  useEffect(() => {
    if (!selectedToken || trades.length === 0) return;
    const filtered = trades.filter(d => d.token_address === selectedToken);
    const prices = filtered.map(d => d.price_in_sol);
    const rsiArr = calculateRSI(prices);
    setLabels(filtered.map(d => new Date(d.block_time * 1000).toLocaleTimeString()));
    setPriceData(prices);
    setRsiData(rsiArr);
  }, [selectedToken, trades]);

  if (loading) return <Loading />;


  const currentPrice = priceData.length ? priceData[priceData.length - 1] : null;
  const currentRSI = rsiData.length ? rsiData[rsiData.length - 1] : null;

  const priceChart = {
    labels,
    datasets: [
      {
        label: "Price (SOL)",
        data: priceData,
        fill: false,
        borderColor: "#2563eb",
        backgroundColor: "#2563eb",
        tension: 0.2,
      },
    ],
  };

  const rsiChart = {
    labels,
    datasets: [
      {
        label: "RSI",
        data: rsiData,
        fill: false,
        borderColor: "#f59e42",
        backgroundColor: "#f59e42",
        tension: 0.2,
      },
      {
        label: "RSI 70 (Overbought)",
        data: Array(labels.length).fill(70),
        borderColor: "rgba(255,0,0,0.5)",
        borderDash: [4, 4],
        pointRadius: 0,
        borderWidth: 1,
        fill: false,
      },
      {
        label: "RSI 30 (Oversold)",
        data: Array(labels.length).fill(30),
        borderColor: "rgba(0,200,0,0.5)",
        borderDash: [4, 4],
        pointRadius: 0,
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-4">

      <h1 className="text-3xl font-bold mb-6 text-center">Crypto Analytics Dashboard</h1>
      <div className="flex items-center mb-4">
        <span className="mr-2">Select Token:</span>
        <select
          className="border rounded p-2"
          value={selectedToken}
          onChange={e => setSelectedToken(e.target.value)}
        >
          {tokens.map(token => (
            <option key={token} value={token}>{token}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="font-bold mb-1">Current Price</div>
          <div className="text-2xl">{currentPrice ? currentPrice.toFixed(6) : "N/A"}</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="font-bold mb-1">Current RSI</div>
          <div className="text-2xl">{currentRSI ? currentRSI.toFixed(2) : "N/A"}</div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="font-semibold mb-2">Price Chart</div>
        <Line data={priceChart} options={{ responsive: true, plugins: { legend: { display: true } } }} height={220} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="font-semibold mb-2">RSI Chart</div>
        <Line data={rsiChart} options={{
          responsive: true,
          plugins: { legend: { display: true } },
          scales: { y: { min: 0, max: 100 } }
        }} height={220} />
      </div>
    </div>
  );
};


