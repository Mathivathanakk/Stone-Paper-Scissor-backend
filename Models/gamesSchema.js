const client = require("../Database/connectDb.js");

exports.createGame = async (player1, player2) => {
  const result = await client.query(
    "INSERT INTO games(player1,player2,rounds) VALUES ($1,$2,$3) RETURNING *",
    [player1, player2, 0]
  );

  return result.rows[0];
};

exports.recordRound = async (roundData) => {
  const result = await client.query(
    "INSERT INTO rounds (game_id,player1_choice,player2_choice,winner) VALUES($1,$2,$3,$4) RETURNING *",
    [
      roundData.game_id,
      roundData.player1_choice,
      roundData.player2_choice,
      roundData.winner,
    ]
  );
  return result.rows[0];
};

exports.getAllGames = async (gameId) => {
  const result = await client.query("SELECT * FROM rounds WHERE game_id=$1", [
    gameId,
  ]);
  return result.rows;
};
