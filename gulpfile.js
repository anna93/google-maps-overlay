'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('resources/css/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('resources/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('resources/css/sass/**/*.scss', ['sass']);
});
