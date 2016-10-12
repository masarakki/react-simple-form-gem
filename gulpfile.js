var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
require('babel-core/register')();

gulp.task('build', () => {
  gulp.src('src/**/*.js')
    .pipe($.plumber())
    .pipe($.babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('test', () => {
  gulp.src('test/**/*.js')
    .pipe($.plumber())
    .pipe($.mocha());
});

gulp.task('clean', () => {
  return gulp.src('lib')
    .pipe($.plumber())
    .pipe($.clean());
});
