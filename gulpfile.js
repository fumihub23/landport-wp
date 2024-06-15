var gulp = require('gulp')

// css sass compile
var sass = require('gulp-sass')
var plumber = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')

// img min
var changed = require('gulp-changed')
var imagemin = require( 'gulp-imagemin')
var pngquant = require('imagemin-pngquant')

// js min
var babel = require("gulp-babel");
var rename = require('gulp-rename')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')




// browser auto reload
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var onError = function(err) {
  console.log('An error occurred:', gutil.colors.magenta(err.message));
  gutil.beep();
  this.emit('end');
};


gulp.task('imagemin', function() {
  return gulp.src('./img/**/*.{png,jpg,gif,svg}')
    .pipe(changed('./src/'))
    .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
    .pipe(gulp.dest('./img/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('js', function() {
  return gulp.src([
    './js/lib/TweenMax.min.js',
    './js/lib/ScrollMagic.min.js',
    './js/lib/velocity.min.js',
    './js/lib/animation.velocity.min.js',
    './js/lib/animation.gsap.min.js',
    './js/lib/barba.min.js',
    './js/lib/swiper.min.js',
    './js/lib/pjax.js',
    //'./js/lib/jquery.bxslider.min.js',
    './js/lib/parallax.js',
    //'./js/lib/jquery-inertiaScroll.js',
    './js/lib/ofi.min.js',
    './js/lib/main.js'

    ])
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('sass', function() {
  gulp.src('./scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
        outputStyle: 'compressed', // nested, compact, compressed, expanded
        sourcemap: true
      })
    .on('error', sass.logError))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write({
      includeContent: true
    }))
    //.pipe(autoprefixer(['last 3 versions', 'ie >= 11', 'Android >= 4', 'iOS >= 12']))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch', function() {
  browserSync.init({
    files: ['./**/*.php'],
  proxy: 'landport.local/',
  });
  gulp.watch('./js/lib/*.js',['js', reload]);
  gulp.watch('./scss/**/*.scss',['sass', reload]);
  gulp.watch(['./img/**/*.*'],['imagemin', reload]);
})


gulp.task('default', ['watch', 'sass', 'imagemin','js'])
