const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
  return gulp.src('src/pages/**/*.html')
  .pipe(nunjucksRender({
      path: ['src/templates']
    }))
  .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  /** Watch any changes */
  return gulp.watch( 'src/pages/**/*.html', ['nunjucks'] );
});