const express=require('express');
const {creatingGames,gettingAllGames, recordRounds}=require('../Controllers/gameControllers.js'); 




const router=express.Router()

router.post('/createGame',creatingGames)
router.get('/history/:gameId',gettingAllGames)
router.post('/record',recordRounds)


module.exports=router