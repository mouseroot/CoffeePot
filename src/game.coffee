# Initialize Phaser
CoffeePot.game = new Phaser.Game 800, 600, Phaser.CANVAS, ""

# Init Debugger plugin
CoffeePot.game.plugin.add Phaser.Plugin.Debug

# Add states
CoffeePot.game.state.add "boot", CoffeePot.Boot
CoffeePot.game.state.add "load", CoffeePot.Load
CoffeePot.game.state.add "menu", CoffeePot.Menu
CoffeePot.game.state.add "game", CoffeePot.Game

# Start boot state
CoffeePot.game.state.start "boot"
