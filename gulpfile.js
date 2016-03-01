//init modules
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglifycss');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var jslint = require('gulp-jshint');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jshint');
var eslint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');
var mocha = require('gulp-mocha');
var qunit = require('gulp-qunit');
var jest = require('gulp-jest');
var casper = require('gulp-casperjs');
var webdriver = require('gulp-webdriver');
var dalek = require('gulp-dalek');
var nightwatch = require('gulp-nightwatch');
var protractor = require('gulp-protractor');

//tasks: basic
gulp.task('distjs', function(){
  return gulp
    .src('./app/js/*.js')
    .pipe(concat('dist/js'))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
gulp.task('distcss', function(){
  return gulp
    .src('app/css/*.css')
    .pipe(concat('dist/css'))
    .pipe(rename('main.min.css'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/css'));
});
//IMPLEMENT this task!!!
// gulp.task('libs-dist', function(){
//   return gulp
//     .src('app/libraries/???')
//     .pipe(gulp.dest('dist/libraries/???'));
// });

//task: all tests
gulp.task('test', function(){
  return gulp
    .run('linter-test','unit-test');
});

//tasks: test for type
gulp.task('linter-test', function(){
  return gulp
    .run('jslint','jshint','jscs','eslint');
});
gulp.task('unit-test', function(){
  return gulp
    .run('jasmine','mocha','jest');
});
gulp.task('interface-test', function(){
  return gulp
    .run('dalekjs');
});
gulp.task('browser', function(){});
gulp.task('performance', function(){});
gulp.task('stress', function(){});
gulp.task('reversion', function(){});

//tasks: linter tests
gulp.task('jslint', function(){
  return gulp
    .src('app/js/*.js')
    .pipe(jslint())
    .pipe(jshint.reporter('default'));
});
gulp.task('jshint', function(){
  return gulp
    .src('app/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
gulp.task('jscs', function(){
  return gulp
    .src('app/js/*.js')
    .pipe(jscs())
    .pipe(jshint.reporter('default'));
});
gulp.task('eslint', function(){
  return gulp
    .src('app/js/*.js')
    .pipe(eslint())
    .pipe(jshint.reporter('default'));
});

//tasks: unit tests
gulp.task('jasmine', function(){
  return gulp
    .src('tests/unit/jasmine.spec.js')
    .pipe(jasmine());
});
gulp.task('mocha', function(){
  return gulp
    .src('tests/unit/mocha.spec.js')
    .pipe(mocha({reporter : 'nyan'}));
});
// gulp.task('qunit', function(){
//   return gulp
//     .src('tests/unit/qunit.spec.js')
//     .pipe(qunit());
// });
gulp.task('jest', function(){
  return gulp
    .src('tests/unit/jest.spec.js')
    .pipe(jest({scriptPreprocessor: "app/js/*.js"}));
});
// gulp.task('sinonjs', function(){
//   return gulp
//     .src('tests/unit/sinon.spec.js')
//     .pipe(jasmine());
// });
// gulp.task('yuitest', function(){
//   return gulp
//     .src('tests/unit/yui.spec.js')
//     .pipe(jasmine());
// });

//tasks: interface tests
// gulp.task('casperjs', function(){
//   return gulp
//     .src('tests/interface/casperjs.spec.js')
//     .pipe(casper());
// });
// gulp.task('selenium', function(){
//   return gulp
//     .src('tests/interface/selenium.spec.js')
//     .pipe(webdriver({reporter: 'spec'}));
// });
gulp.task('dalekjs', function(){
  return gulp
    .src('tests/interface/dalekjs.spec.js')
    .pipe(dalek({
      browser: ['phantomjs', 'chrome'],
      reporter: ['html', 'junit']
    }));
});
// gulp.task('nightwatchjs', function(){
//   return gulp
//     .src('tests/interface/nightwatchjs.spec.js')
//     .pipe(nightwatch());
// });
// gulp.task('protractor', function(){
//   return gulp
//     .src('tests/interface/protractor.spec.js')
//     .pipe(protractor)
//     .on('error', function(e){ throw e;});
// });
// gulp.task('pyccuracy', function(){
//   return gulp;
// });

//tasks: browser tests
gulp.task('browserling', function(){});
gulp.task('testling-ci', function(){});

//tasks: performance tests
gulp.task('pagespeed', function(){});
gulp.task('yslow', function(){});
gulp.task('browsershots', function(){});
gulp.task('audits', function(){});
gulp.task('phantomas', function(){});
gulp.task('perfbudget', function(){});
gulp.task('benchmarkjs', function(){});
gulp.task('dommonster', function(){});

//tasks: stress tests
gulp.task('jmeter', function(){});
gulp.task('tsung', function(){});
gulp.task('grinder', function(){});

//tasks: reversion test
gulp.task('wraith', function(){});

//tasks: listenner and default
gulp.task('watch', function(){
  gulp.watch('./app/js/*.js',['distjs','distcss','test']);
});
gulp.task('default', ['distjs','distcss','test','watch']);
