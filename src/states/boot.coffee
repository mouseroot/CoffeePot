# Create the CoffeePot Namespace
CoffeePot =
	score: 0
	Boot: () ->
	Load: () ->
	Menu: () ->
	Game: () ->
	game: null

CoffeePot.Boot::init = () ->
CoffeePot.Boot::create = () ->
	@state.start "load"
CoffeePot.Boot::update = () ->
CoffeePot.Boot::preload = () ->