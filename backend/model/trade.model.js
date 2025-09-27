const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
  block_time: Number,
  transaction_signature: String,
  block_num: Number,
  program_id: String,
  trade_type: String,
  wallet_address: String,
  token_address: String,
  is_buy: Boolean,
  amount_in_sol: Number,
  amount_in_token: Number,
  change_in_sol: Number,
  change_in_tokens: Number,
  price_in_sol: Number,
  virtual_sol_reserves: Number,
  virtual_token_reserves: Number,
  real_sol_reserves: Number,
  real_token_reserves: Number,
  fee_recipient: String,
  fee_basis_points: Number,
  fee_amount: Number,
  creator_address: String,
  creator_fee_basis_points: Number,
  creator_fee_amount: Number,
  ingested_at: Number,
});

const Trade = mongoose.model("Trade", tradeSchema);
module.exports = Trade;
