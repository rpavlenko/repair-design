const {src, dest, watch, parallel} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  watch("./*.html").on('change', browserSync.reload);
  watch("./src/sass/**/*.sass", serveSass);
  watch("./src/js/*.js").on('change', browserSync.reload);
  // gulp.watch("./src/css/*.css").on('change', browserSync.reload);
};

function minify(){
  return src('./src/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('./src/css'));
}

function serveSass() {
  return src("./src/sass/*.sass")
    .pipe(sass())
    .pipe(dest("./src/css"))
    .pipe(browserSync.stream());
};

exports.serve = parallel(bs);
exports.minify = minify;