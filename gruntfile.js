'use strict';

module.exports = function(grunt){
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
    },
    jasmine: {
      pivotal: {
        src: ['./app/js/*.js'],
        options: {
          specs: ['./tests/unit/jasmine.spec.js']
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
        },
        src: ['./tests/unit/mocha.spec.js']
      }
    },
    jest: {
      options: {
        coverage: true,
        testPathPattern: /.*jest.spec.js/
      }
    },
    qunit: {
      all: ['./app/index.html']
    },

    phantomas: {
      gruntSite : {
        options : {
          indexPath : './phantomas/',
          options   : {},
          url       : 'http://localhost:8000/',
          buildUi   : true
        }
      }
    },
    pagespeed: {
      options: {
        nokey: true,
        url: "https://developers.google.com"
      },
      prod: {
        options: {
          url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
          locale: "en_GB",
          strategy: "desktop",
          threshold: 80
        }
      },
      paths: {
        options: {
          paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
          locale: "en_GB",
          strategy: "desktop",
          threshold: 80
        }
      }
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
  grunt.registerTask('unit-test',[
    'jasmine-test',
    'mocha',
    'jest'
  ]);
  // grunt.registerTask('interface-test',[
  //   'dalekjs'
  // ]);
  // grunt.task('browser-test', []);
  grunt.registerTask('performance-test',[
    'pagespeed-test',
    'phantomas-test'
  ]);
  // grunt.task('stress-test', []);
  // grunt.task('reversion-test', []);

  //tasks: linter tests
  grunt.registerTask('jslint-test','jslint');
  grunt.registerTask('jshint-test','jshint');
  grunt.registerTask('jscs-test','jscs');
  grunt.registerTask('eslint-test','eslint');

  // //tasks: unit tests
  grunt.registerTask('jasmine-test','jasmine');
  grunt.registerTask('mocha-test','mochaTest');
  grunt.registerTask('jest-test', 'jest');
  grunt.registerTask('qunit-test', 'qunit');
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

  //tasks: interface tests
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

  //tasks: performance tests
  grunt.registerTask('pagespeed-test','pagespeed');
  grunt.registerTask('phantomas-test','phantomas');

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
