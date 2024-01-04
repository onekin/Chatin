import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './lib/args'

gulp.task('resources', () => {
  return gulp.src('app/resources/**/**/*')
    .pipe(gulp.dest(`dist/${args.vendor}/resources`))
    .pipe(gulpif(args.watch, livereload()))
})
