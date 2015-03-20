
var CoffeeSourceFiles = [
	"src/states/boot.coffee",
	"src/states/load.coffee",
	"src/states/menu.coffee",
	"src/states/game.coffee",
	"src/prefabs/*.coffee",
	"src/game.coffee"
];

module.exports = function(grunt) {
	grunt.initConfig({

		//CoffeeScript Task
		coffee: {
			compileJoined: {
				options: { 
					join: true
				},
				files: {
					"build/build.js" : CoffeeSourceFiles
				}
			}
		},

		//Uglify Task (minification)
		uglify: {
			my_target: {
				files: {
					"build/build.min.js" : ["build/build.js"]
				}
			}
		},

		//Watch Task
		watch: {
			js: {
				files: ["src/*.coffee"],
				tasks: ["coffee","uglify"]
			}
		}


	});

	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default","Compiles Coffeescript files", ["coffee","uglify","watch"]);
	grunt.registerTask("compile-only","",["coffee"]);
};