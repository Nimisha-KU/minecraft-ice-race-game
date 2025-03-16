"""

Another speed boost pad

"""
"""

Timer Variable

"""
# Function to start timer
# Function for speed boost
def speed_boost():
    # Apply speed effect to the player
    player.say("/effect @p speed 5 2")
# Check for stepping on REDSTONE_BLOCK (Speed Boost)
# Check every 0.1 seconds

def on_run_in_background():
    while True:
        if blocks.test_for_block(REDSTONE_BLOCK, player.position()):
            speed_boost()
        loops.pause(100)
loops.run_in_background(on_run_in_background)

# Reset timer
# Start race when typing "start" in chat

def on_on_chat():
    global start_time
    start_time = gameplay.time_query(GAME_TIME)
    # Get game time in ticks
    player.say("Race Started! Reach the end!")
player.on_chat("start", on_on_chat)

# Function to stop timer and show score
def finish_race():
    global start_time
    if start_time > 0:
        end_time = gameplay.time_query(GAME_TIME)
        # Get current time
        elapsed_time = Math.idiv(end_time - start_time, 20)
        # Convert ticks to seconds
        player.say("You finished in " + ("" + str(elapsed_time)) + " seconds!")
        start_time = 0
start_time = 0
# Teleport player to the starting position
player.teleport(pos(5, 4, 0))
# Create Ice Track
blocks.fill(GLASS, pos(0, 4, 0), pos(10, 4, 50), FillOperation.REPLACE)
# Glass for visibility
blocks.fill(PACKED_ICE,
    pos(0, 4, 0),
    pos(10, 4, 50),
    FillOperation.REPLACE)
# Ice track
blocks.place(GOLD_BLOCK, pos(5, 4, 0))
# Start Line
blocks.place(DIAMOND_BLOCK, pos(5, 4, 50))
# End Line
# Add Obstacles (Fence Walls)
blocks.fill(OAK_FENCE,
    pos(3, 4, 20),
    pos(7, 6, 20),
    FillOperation.REPLACE)
# Fence obstacle
blocks.fill(OAK_FENCE,
    pos(3, 4, 35),
    pos(7, 6, 35),
    FillOperation.REPLACE)
# Another fence obstacle
# Add Slopes (Stairs)
blocks.fill(STONE, pos(3, 4, 30), pos(7, 5, 32), FillOperation.REPLACE)
# Slope made of stone
# Add Booster Pads (Speed Boost)
blocks.place(REDSTONE_BLOCK, pos(5, 4, 10))
# Speed boost pad
blocks.place(REDSTONE_BLOCK, pos(5, 4, 40))