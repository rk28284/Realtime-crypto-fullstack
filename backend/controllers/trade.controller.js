const tradeModel = require("../model/trade.model");
//post
const posttrade = async (req, res) => {
  let payload = req.body;
  try {
    const reqData = new tradeModel(payload);
    await reqData.save();
    res.status(200).send({ msg: "Trade data added Successfully" });
  } catch (error) {
    res.status(400).send({ msg: "Something Went Wrong", error: error });
  }
};

// Get all trades
const getAllTrades = async (req, res) => {
  try {
    const trades = await tradeModel.find();
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get a single trade by ID
const getTradeById = async (req, res) => {
  try {
    const trade = await tradeModel.findById(req.params.id);
    if (!trade) return res.status(404).json({ message: "Trade not found" });
    res.status(200).json(trade);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const deleteTrade = async (req, res) => {
  try {
    const result = await tradeModel.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Trade not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting trade:", error);
    res
      .status(500)
      .json({ message: "Error deleting trade", error: error.message });
  }
};

const updateTrade = async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const trade = await tradeModel.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true, runValidators: true }
    );

    if (!trade) {
      return res.status(404).json({ message: "Trade not found" });
    }
    res.status(200).json(trade);
  } catch (error) {
    console.error("Error updating task:", error);
    res
      .status(500)
      .json({ message: "Error updating trade", error: error.message });
  }
};

module.exports = {
  posttrade,
  getAllTrades,
  getTradeById,
  deleteTrade,
  updateTrade,
};
