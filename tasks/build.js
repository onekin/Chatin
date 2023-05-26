import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'

gulp.task('build', gulpSequence(
  'clean', [
    'manifest',
    'scripts',
    'styles',
    'pages',
    'libs',
    'resources',
    'locales',
    'images',
    'fonts',
    'chromereload'
  ]
));
