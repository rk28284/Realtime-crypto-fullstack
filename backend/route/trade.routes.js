const express = require("express");
const tradeRouter = express.Router();
const {
  getAllTrades,
  getTradeById,
  posttrade,
  deleteTrade,
  updateTrade,
} = require("../controllers/trade.controller");
const authentication = require("../middleware/auth.middleware");

// Get all trades
tradeRouter.get("/trade", authentication, getAllTrades);

// Get a single trade by ID
tradeRouter.get("/trade/:id", authentication, getTradeById);

//post
tradeRouter.post("/trade/add", authentication, posttrade);

//delete
tradeRouter.delete("/trade/delete/:id", authentication, deleteTrade);

//update
tradeRouter.patch("/trade/update/:id", authentication, updateTrade);

module.exports = tradeRouter;
