
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
				files: ["src/*.coffee",
						"src/states/*.coffee",
						"src/prefabs/*.coffee"
				],
				tasks: ["coffee","uglify"],
				options: {
					livereload: 1337
				}
			}
		},

		//Connect Server Task
		connect: {
			server: {
				options: {
					port: 8000,
					base: __dirname,
					open: true
				}
			}
		}


	});

	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-connect");

	grunt.registerTask("default","Compiles Coffeescript files", ["coffee","uglify","connect","watch"]);
	grunt.registerTask("compile-only","",["coffee"]);
};