'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');

gulp.task('sass', function () {
  return gulp.src('resources/css/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('resources/css'));
});

gulp.task('ts', function () {
    return gulp.src('resources/js/ts/**/*.ts')
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest('resources/js/'));
});

gulp.task('sass:ts:watch', function () {
  gulp.watch('resources/css/sass/**/*.scss', ['sass']);
  gulp.watch('resources/js/ts/**/*.ts', ['ts']);
});
