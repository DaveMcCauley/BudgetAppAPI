

// our wrapper function
module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // configure grunt
  grunt.initConfig({

   //pull config info from package.json
    pkg: grunt.file.readJSON('package.json'),
    // all configuration goes here


// AUTOPREFIXER =====================================================
// TODO: Replace with postcss. This is depricated by the maintainers
// TODO: Use better browser query.
// TODO: Enable source maps!!!
    autoprefixer: {

      options: {
        /*browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ],*/
        browsers: ['last 5 versions', 'ie 8', 'ie 9', '> 1%'],
        map: true

      },

      dev: {
        expand : true,
        cwd    : 'src/assets/',
        src    : ['css/**/*.css'],
        dest   : 'src/assets/'
      },

      prod: {
        expand : true,
        cwd    : 'public/assets/',
        src    : ['css/**/*.css'],
        dest   : 'public/assets/'
      }
    },


// CLEAN ============================================================
    clean: {
      src: 'public/**/*.*'
    },


// CONCAT ===========================================================
    concat: {
      devcss: {
        // if some scripts depend upon eachother,
        // make sure to list them here in order
        // rather than just using the '*' wildcard.
        // src: [BUILD_DIR_JS + '*.js'],
        // dest: BUILD_FILE_JS

        //for multiples...
        //files: {
        //  'dist/basic.js': ['src/main.js'],
        //  'dist/with_extras.js': ['src/main.js', 'src/extras.js'],
        //},
        options: {
          sourceMap   : true,
        },
        files: {
          'src/assets/css/core.css' : ['src/assets/css/scss/test.css',
                                       'src/assets/css/scss/test2.css'
                                      ]
        }
      }
    },


// COPY =============================================================
    copy: {
      build: {
        // For usage :: https://www.npmjs.com/package/grunt-contrib-copy
        files: {
          // 'desitination': 'source'
        }
      }
    },


// CSSLINT ==========================================================
    csslint: {

      dev_strict: {
        options: {
          import: false
        },
        src: ['src/assets/css/*.css']
      },

      dev_lax : {
        options: {
          csslintrc: '.csslintrc'
        },
        src: ['src/assets/css/*.css']
      },

      prod_strict: {
        options : {
          import : false
        },
        src : ['public/assets/css/*.css']
      },

      prod_lax: {
        options: {
          csslintrc : '.csslintrc'
        },
        src: ['public/assets/css/*.css']
      }
    },


// CSSMIN ===========================================================
// TOOD: Replace with POSTCSS?
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },

      prod: { //minimze the conatenated file.
        //files: {
          //'public/assets/css/budgetapp.css' : 'public/assets/css/budgetapp.css' //< works!
        //}
        files: [{
            expand: true,
            cwd: 'public/'
            src: ['**/*.css'],
            dest: 'public/'
        }]
      }
    },


// HTMLLINT =========================================================
      // TODO: https://github.com/htmllint/grunt-htmllint //////////////



//HTMLMIN ===========================================================
    htmlmin: {

      prod: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.html'],
            dest: 'public/'
        }]
      },

      dev: {
        files: {
          // 'destination': 'source'
        }
      }
    },


// IMAGEMIN =========================================================
    imagemin: {
      dynamic: {
        options:  {
          optimizationLevel: 7,
          svgoPlugins: [{ removeViewBox: false}],
          style: 'expanded'

        },

        files: [{
            expand: true,
            cwd: 'src/assets/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'public/assets/img/'
        }]
      }
    },


// JSHINT ===========================================================
// TODO: Consider eslint in future?
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      // lint everything in src except external libraries
      prod: ['Gruntfile.js','src/**/*.js','!src/assets/lib/**/*.js'],
      dev: ['Gruntfile.js','src/**/*.js','!src/assets/lib/**/*.js']
    },


// NEWER ============================================================
  // TODO: https://www.npmjs.com/package/grunt-newer ////////////////


// NOTIFY ===========================================================
    notify : {

      notify_hooks: {
        options: {
          enabled: true,
          max_jshint_notifications: 5, // maximum number of notifications from jshint output
          title: "UngaBunga its BudgetApp!", // defaults to the name in package.json, or will use project directory's name
          success: true, // whether successful grunt executions should be notified automatically
          duration: 3 // the duration of notification in seconds, for `notify-send only
        }
      },

      fini: {
        options: {
          title: 'GRUNT*SNORT*',  // optional
          message: 'Grunt has finished.', //required
        }
      },
    },


// OPEN =============================================================
    open: {
      dev: {
        server: {
          path: 'http://localhost/budgetappdevelopers/dev',
          //app: 'Google Chrome'
        }
      },
      prod: {
        server: {
          path: 'http://localhost/budgetappdevelopers/public'
        }
      }
    },


// SASS =============================================================
    sass: {
      dev: {
        options: {
          sourcemap: "auto",
          lineNumbers: true,
        },
        //files: {
        //  'src/assets/css/test.css' : 'src/assets/css/test.scss',
        //  'src/assets/css/test2.css' : 'src/assets/css/test2.scss'
        //}
        files: [{
          expand: true,
          cwd: 'src/assets/css/scss',
          src: ['*.scss'],
          dest: 'src/assets/css',
          ext: '.css'
        }]

      }
    },


// SASSLINT =========================================================
   sasslint: {
        options: {
            configFile: 'config/.sass-lint.yml',
        },
        target: ['src/assets/css/scss/*.scss']
    },


// TARGETHTML =======================================================
    targethtml : {
      prod: {
        files: {
          // desitination : source
          'public/index.html' : 'src/index.html'
          // add as necessary...
        }
      }
    },


// UGLIFY ===========================================================
// TODO: Enable source mapping!
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
        mangle: true
      },

      prod: { // in-house files
        files: {
          //TODO: assign wildcards?
          //'dist/js/magic.min.js':'src/js/magic.js',
          //'dist/js/test.js':'src/js/test.js'
          //'dist/js/budgetapp.min.js': ['src/js/magic.js','src/js/test.js']
          'public/app/core.js' : ['src/**/*.js','!src/assets/lib/**/*.js']
        }
      },

      libraries: { // libraries
        files: [{
          expand  : true,                // allow dynamic build
          cwd     : 'src/assets/lib',    // curernt working dir
          src     : '**/*.js',           // source files
          dest    : 'public/assets/lib', // destination
          ext     : '.min.js',           // replace .js to .min.js
          extDot  : 'last'               // use the last dot to append to.
        }],
      }
    },


// WATCH ============================================================
    watch: {
      scripts: {
        files: 'src/**/*.js',
        tasks: ['jshint']
      },
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass']
      }
    } //<---<

  });

  // https://24ways.org/2013/grunt-is-not-weird-and-hard/

  // create the tasks
  grunt.registerTask('dev',['sasslint','sass','csslint:dev_lax', 'autoprefixer:dev','jshint:dev','watch','open:dev']);
  grunt.registerTask('prod',['clean','sasslint','sass','csslint:prod_lax','autoprefixer:prod','cssmin','jshint:prod','uglify','imagemin','open:prod'])
  grunt.registerTask('buildapi',['sass','watch'])
  grunt.registerTask('default',['jshint','uglify','less','cssmin']);
  grunt.registerTask('uglyonly',['uglify']);
  grunt.registerTask('production',['jshint','uglify','less','cssmin:production']);

  //load grunt plugins
  /* depricated: now using load-grunt-tasks plugin
  /*grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');*/


};