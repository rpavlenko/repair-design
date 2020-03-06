const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('hello', function(done){
  console.log('hello');
  done();
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch("./src/css/*.css").on('change', browserSync.reload);
});

gulp.task('minify', () => {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
      .pipe(rename({
        suffix: '.min'
      }))
    .pipe(gulp.dest('./src/css'));
});