const gulp = require('gulp')
const nunjucksRender = require('gulp-nunjucks-render')

gulp.task('nunjucks', () =>
  gulp
    .src('src/pages/**/*.html')
    .pipe(
      nunjucksRender({
        path: ['src/templates'],
      })
    )
    .pipe(gulp.dest('./'))
)

gulp.task('watch', () => gulp.watch('src/pages/**/*.html', gulp.series('nunjucks')))
