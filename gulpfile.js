'use strict';

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    watch = require('gulp-watch'),
    compass = require('gulp-compass'),
    browserSync = require('browser-sync').create();

gulp.task('default', ['watch']);

gulp.task('compass', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'stylesheets',
      sass: 'sass'
    }))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browserSync', 'compass'], function() {
  gulp.watch('./sass/**/*.scss', ['compass']);
});
