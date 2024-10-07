const gameControl = require("../Models/gamesSchema.js");

const creatingGames = async (req, res) => {
  const { player1, player2 } = req.body;
  try {
    const game = await gameControl.createGame(player1, player2);
   // console.log(game)
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: "Internal error in creating the game" });
  }
};

const recordRounds = async (req, res) => {
  const {roundData } = req.body;
  try {
    const round = await gameControl.recordRound(roundData);
//console.log(round)
    res.status(201).json(round);

  } catch (error) {
    res.status(500).json({ message: "Internal error in round record" });
  }
};

const gettingAllGames = async (req, res) => {
  const { gameId } = req.params;
  try {
    const games = await gameControl.getAllGames(gameId);
    res.status(200).json(games);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal error in getting the game details" });
  }
};

module.exports = { creatingGames, gettingAllGames ,recordRounds};
