var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
require('babel-core/register')({
  presets: ['babel-preset-power-assert']
});


gulp.task('build', () => {
  gulp.src('src/**/*.js')
    .pipe($.plumber())
    .pipe($.babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('test', () => {
  gulp.src('tests/**/*-test.js')
    .pipe($.plumber())
    .pipe($.mocha({require: ['./tests/helper.js']}));
});

gulp.task('clean', () => {
  return gulp.src('lib')
    .pipe($.plumber())
    .pipe($.clean());
});

gulp.task('watch', () => {
  gulp.watch(['src/**/*.js', 'tests/**/*-test.js'], ['test']);
});
