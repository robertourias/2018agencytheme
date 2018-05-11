module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
          scripts: {
            files: ['**/*.js'],
            tasks: ['uglify'],
            options: {
              spawn: false,
            },
          },
          css: {
            files: ['**/*.scss', 'sass/components/*.scss', 'sass/itcss/*.scss'],
            tasks: ['compass'],
            options: {
              livereload: true,
            },
          }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dest/main.min.js': ['js/main.js']
                }
            }
        },
        compass: {
            dist: {
              options: {
                config: 'config.rb',
                sassDir: 'sass',
                cssDir: 'stylesheets',
                environment: 'production'
              }
            },
            dev: {
              options: {
                config: 'config.rb',
                sassDir: 'sass',
                cssDir: 'stylesheets'
              }
            }
          }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['uglify', 'compass']);
    grunt.registerTask('w', ['watch']);

};
