const gulp = require('gulp');
const browserSync = require('browser-sync').create();

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
   gulp.watch("./*.html").on('change', browserSync.reload);
});

