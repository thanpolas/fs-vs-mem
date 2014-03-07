const gulp = require('gulp');
const header = require('gulp-header');
const footer = require('gulp-footer');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

require('rimraf').sync('tmp');

gulp.add('mem', function () {
  return gulp.src('node/test/**/*.js').
              pipe(header('(')).
              pipe(footer(')')).
              pipe(concat('mem.js')).
              pipe(gulp.dest('./'));
});

gulp.add('fs', function (cb) {
  var headerize = function () {
    return gulp.src('node/test/**/*.js')
               .pipe(header('('))
               .pipe(gulp.dest('tmp/1'));
  };
  var footerize = function () {
    return gulp.src('tmp/1/**/*.js')
               .pipe(footer(')'))
               .pipe(gulp.dest('tmp/2'))
  };
  var concatize = function () {
    return gulp.src('tmp/2/**/*.js')
               .pipe(concat('fs.js'))
               .pipe(gulp.dest('./'))
  };
  headerize().on('end', function () {
    footerize().on('end', function () {
      concatize().on('end', function () {
        cb();
      });
    });
  });
});

gulp.add('default', ['memory', 'fs']);
