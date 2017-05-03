'use strict'
var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function() {
  gulp.src('./src/stylesheets/scss/**/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./src/stylesheets/css'))
})

gulp.task('sass:watch', function() {
  gulp.watch('./src/stylesheets/scss/**/*.sass', ['sass'])
})
