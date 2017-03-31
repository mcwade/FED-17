var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

gulp.task('sass', function () {
  return gulp.src('./sass/**/main.scss')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['sass/**/*.scss'], ['sass']);
});