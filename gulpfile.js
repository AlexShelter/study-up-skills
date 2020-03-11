const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('hello', (done) => {
  console.log('Hello gulp!');
  done();
});

// Static server
gulp.task('browser-sync', () => {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
   gulp.watch("*.html").on('change', browserSync.reload);
   gulp.watch("*/*.html").on('change', browserSync.reload);
});

gulp.task('create-min-css', function (done) {
  gulp.src('*/*.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./'));
      done();
});



