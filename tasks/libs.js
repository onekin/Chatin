import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './lib/args'

gulp.task('libs', () => {
  return gulp.src('app/libs/**/*')
    .pipe(gulp.dest(`dist/${args.vendor}/libs`))
    .pipe(gulpif(args.watch, livereload()))
})
