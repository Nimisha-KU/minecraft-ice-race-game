/** Another speed boost pad */
/** Timer Variable */
//  Function to start timer
//  Function for speed boost
function speed_boost() {
    //  Apply speed effect to the player
    player.say("/effect @p speed 5 2")
}

//  Check for stepping on REDSTONE_BLOCK (Speed Boost)
//  Check every 0.1 seconds
loops.runInBackground(function on_run_in_background() {
    while (true) {
        if (blocks.testForBlock(REDSTONE_BLOCK, player.position())) {
            speed_boost()
        }
        
        loops.pause(100)
    }
})
//  Reset timer
//  Start race when typing "start" in chat
player.onChat("start", function on_on_chat() {
    
    start_time = gameplay.timeQuery(GAME_TIME)
    //  Get game time in ticks
    player.say("Race Started! Reach the end!")
})
//  Function to stop timer and show score
function finish_race() {
    let end_time: number;
    let elapsed_time: number;
    
    if (start_time > 0) {
        end_time = gameplay.timeQuery(GAME_TIME)
        //  Get current time
        elapsed_time = Math.idiv(end_time - start_time, 20)
        //  Convert ticks to seconds
        player.say("You finished in " + ("" + ("" + elapsed_time)) + " seconds!")
        start_time = 0
    }
    
}

let start_time = 0
//  Teleport player to the starting position
player.teleport(pos(5, 4, 0))
//  Create Ice Track
blocks.fill(GLASS, pos(0, 4, 0), pos(10, 4, 50), FillOperation.Replace)
//  Glass for visibility
blocks.fill(PACKED_ICE, pos(0, 4, 0), pos(10, 4, 50), FillOperation.Replace)
//  Ice track
blocks.place(GOLD_BLOCK, pos(5, 4, 0))
//  Start Line
blocks.place(DIAMOND_BLOCK, pos(5, 4, 50))
//  End Line
//  Add Obstacles (Fence Walls)
blocks.fill(OAK_FENCE, pos(3, 4, 20), pos(7, 6, 20), FillOperation.Replace)
//  Fence obstacle
blocks.fill(OAK_FENCE, pos(3, 4, 35), pos(7, 6, 35), FillOperation.Replace)
//  Another fence obstacle
//  Add Slopes (Stairs)
blocks.fill(STONE, pos(3, 4, 30), pos(7, 5, 32), FillOperation.Replace)
//  Slope made of stone
//  Add Booster Pads (Speed Boost)
blocks.place(REDSTONE_BLOCK, pos(5, 4, 10))
//  Speed boost pad
blocks.place(REDSTONE_BLOCK, pos(5, 4, 40))
