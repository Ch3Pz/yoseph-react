var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function (done) {
  gulp.src('./src/styles/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css/'));

  done();
});

gulp.task('watch', gulp.parallel(function () {
  gulp.watch(['./src/styles/**/**.scss'], gulp.series(['sass']));
}));

gulp.task("default", gulp.series('sass'));
