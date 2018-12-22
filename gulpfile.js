var gulp = require('gulp')
var pug = require('gulp-pug')
var sass = require('gulp-sass')
var babel = require('gulp-babel')
var uglify = require('gulp-uglify')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var log = require('gulplog')
var buffer = require('vinyl-buffer')
var sourcemaps = require('gulp-sourcemaps')

/**
 * Directories
 */

var dir = {
  root: './build/',
  styles: './build/styles/',
  images: './build/images/',
  scripts: './build/scripts/' 
}

/**
 * HTML
 */

gulp.task('html', function () {
  return gulp.src('./src/index.pug')
    .pipe(pug())
    .pipe(gulp.dest(dir.root))
})

/**
 * Styles
 */

gulp.task('css', function () {
  return gulp.src('./src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(dir.styles))
})
gulp.task('css:normalize', function () {
  return gulp.src('./node_modules/normalize.css/normalize.css')
    .pipe(gulp.dest(dir.styles))
})

/**
 * Scripts
 */
gulp.task('js', function () {
  var b = browserify({
    entries: './src/scripts/main.js',
    debug: true,
    transform: [
      babelify.configure({
        presets: [
          '@babel/preset-env'
        ]
      })
    ]
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify()).on('error', log.error)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir.scripts));
})

/**
 * Images
 */
gulp.task('images', function () {
  // TODO...
})

/**
 * Watch
 */
gulp.task('watch', function () {
  gulp.watch('./src/**/*.{pug,scss,js,txt}', null, gulp.parallel('css', 'html', 'js'))
})
gulp.task('watch:html', function () {
  gulp.watch('./src/**/*.{pug,txt}', null, gulp.parallel('html'))
})
gulp.task('watch:css', function () {
  gulp.watch('./src/**/*.scss', null, gulp.parallel('css'))
})
gulp.task('watch:js', function () {
  gulp.watch('./src/**/*.js', null, gulp.parallel('js'))
})