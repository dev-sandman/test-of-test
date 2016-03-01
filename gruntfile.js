'use strict';

module.exports = grunt => {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    jslint: {
      client: {
        src: ['./app/js/*.js','gruntfile.js','./tests/**/*.js'],
        directives: {browser:true}
      }
    },
    jshint: {
      all: {
        src: ['./app/js/*.js','gruntfile.js','./tests/**/*.js']
      }
    },
    jscs: {
      src: ['./app/js/*.js','gruntfile.js','./tests/**/*.js'],
      options: {
        verbose: true
      }
    },
    eslint: {
      target: ['./app/js/*.js','gruntfile.js','./tests/**/*.js']
    }
  });



  //tasks: basic
  // grunt.registerask('distjs', function(){
  //   return grunt
  //     .src('./app/js/*.js')
  //     .pipe(concat('dist/js'))
  //     .pipe(rename('main.min.js'))
  //     .pipe(uglify())
  //     .pipe(grunt.dest('dist/js'));
  // });
  // grunt.task('distcss', function(){
  //   return grunt
  //     .src('app/css/*.css')
  //     .pipe(concat('dist/css'))
  //     .pipe(rename('main.min.css'))
  //     .pipe(uglify())
  //     .pipe(grunt.dest('dist/css'));
  // });
  //IMPLEMENT this task!!!
  // grunt.task('libs-dist', function(){
  //   return grunt
  //     .src('app/libraries/???')
  //     .pipe(grunt.dest('dist/libraries/???'));
  // });

  //task: all tests
  // grunt.registerTask('test',[
  //   'linter-test',
  //   'unit-test',
  //   'interface-test',
  //   'browser-test',
  //   'performance-test',
  //   'stress-test',
  //   'reversion-test'
  // ]);

  //tasks: test for type
  grunt.registerTask('linter',[
    'jslint-test',
    'jshint-test',
    'jscs-test',
    'eslint-test'
  ]);
  // grunt.registerTask('unit-test',[
  //   'jasmine',
  //   'mocha',
  //   'jest'
  // ]);
  // grunt.registerTask('interface-test',[
  //   'dalekjs'
  // ]);
  // grunt.task('browser-test', []);
  // grunt.task('performance-test', []);
  // grunt.task('stress-test', []);
  // grunt.task('reversion-test', []);

  //tasks: linter tests
  grunt.registerTask('jslint-test','jslint');
  grunt.registerTask('jshint-test','jshint');
  grunt.registerTask('jscs-test','jscs');
  grunt.registerTask('eslint-test','eslint');
  //
  // //tasks: unit tests
  // grunt.task('jasmine', function(){
  //   return grunt
  //     .src('tests/unit/jasmine.spec.js')
  //     .pipe(jasmine());
  // });
  // grunt.task('mocha', function(){
  //   return grunt
  //     .src('tests/unit/mocha.spec.js')
  //     .pipe(mocha({reporter : 'nyan'}));
  // });
  // // grunt.task('qunit', function(){
  // //   return grunt
  // //     .src('tests/unit/qunit.spec.js')
  // //     .pipe(qunit());
  // // });
  // grunt.task('jest', function(){
  //   return grunt
  //     .src('tests/unit/jest.spec.js')
  //     .pipe(jest({scriptPreprocessor: "app/js/*.js"}));
  // });
  // // grunt.task('sinonjs', function(){
  // //   return grunt
  // //     .src('tests/unit/sinon.spec.js')
  // //     .pipe(jasmine());
  // // });
  // // grunt.task('yuitest', function(){
  // //   return grunt
  // //     .src('tests/unit/yui.spec.js')
  // //     .pipe(jasmine());
  // // });
  //
  // //tasks: interface tests
  // // grunt.task('casperjs', function(){
  // //   return grunt
  // //     .src('tests/interface/casperjs.spec.js')
  // //     .pipe(casper());
  // // });
  // // grunt.task('selenium', function(){
  // //   return grunt
  // //     .src('tests/interface/selenium.spec.js')
  // //     .pipe(webdriver({reporter: 'spec'}));
  // // });
  // grunt.task('dalekjs', function(){
  //   return grunt
  //     .src('tests/interface/dalekjs.spec.js')
  //     .pipe(dalek({
  //       browser: ['phantomjs', 'chrome'],
  //       reporter: ['html', 'junit']
  //     }));
  // });
  // // grunt.task('nightwatchjs', function(){
  // //   return grunt
  // //     .src('tests/interface/nightwatchjs.spec.js')
  // //     .pipe(nightwatch());
  // // });
  // // grunt.task('protractor', function(){
  // //   return grunt
  // //     .src('tests/interface/protractor.spec.js')
  // //     .pipe(protractor)
  // //     .on('error', function(e){ throw e;});
  // // });
  // // grunt.task('pyccuracy', function(){
  // //   return grunt;
  // // });
  //
  // //tasks: browser tests
  // grunt.task('browserling', function(){});
  // grunt.task('testling-ci', function(){});
  //
  // //tasks: performance tests
  // grunt.task('pagespeed', function(){});
  // grunt.task('yslow', function(){});
  // grunt.task('browsershots', function(){});
  // grunt.task('audits', function(){});
  // grunt.task('phantomas', function(){});
  // grunt.task('perfbudget', function(){});
  // grunt.task('benchmarkjs', function(){});
  // grunt.task('dommonster', function(){});
  //
  // //tasks: stress tests
  // grunt.task('jmeter', function(){});
  // grunt.task('tsung', function(){});
  // grunt.task('grinder', function(){});
  //
  // //tasks: reversion test
  // grunt.task('wraith', function(){});
  //
  // //tasks: listenner and default
  // grunt.task('watch', function(){
  //   grunt.watch('./app/js/*.js',['distjs','distcss','test']);
  // });
  // grunt.task('default', ['distjs','distcss','test','watch']);

};
