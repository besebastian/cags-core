module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: '**/*.sass',
                tasks: ['sass'],
                options: {
                    livereload: 3001
                }
            },
            scripts: {
                files: 'src/js/**/*.js',
                tasks: [
                    'jshint',
                    'requirejs'
                ],
                options: {
                    livereload: 3001
                }
            },
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'src/js/**/*.js'
            ],
            options: {
                ignores: [
                    'src/js/vendor/*.js'
                ],
                jshintrc: '.jshintrc'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public/css/style.css': 'src/sass/style.sass'
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'src/js',
                    name: 'main',
                    mainConfigFile: 'src/js/config.js',
                    out: 'public/js/script.min.js',
                    optimize: 'none'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['sass', 'jshint', 'requirejs']);
};
