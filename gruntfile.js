

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
        map: {
          prev: 'src/assets/css'
        },
        diff: true,
      },

      dev: {
        expand : true,
        cwd    : 'src/assets/',
        src    : ['css/**/*.css'],
        dest   : 'src/assets/'
      },

      prod: {
        options: {
          diff: false
        },
        expand : true,
        cwd    : 'prod/assets/',
        src    : ['css/**/*.css'],
        dest   : 'prod/assets/'
      }
    },
    // CLEAN ============================================================
    clean: {
      src: 'prod/**/*.*'
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
        src : ['prod/assets/css/*.css']
      },

      prod_lax: {
        options: {
          csslintrc : '.csslintrc'
        },
        src: ['prod/assets/css/*.css']
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
            cwd: 'prod/',
            src: ['**/*.css'],
            dest: 'prod/'
        }]
      },

      dev: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.css'],
          dest: 'src/'
        }]
      }
    },


// EXPRESS SERVER ===================================================
    express: {
      dev: {
        options: {
          port: 3000,
          hostname: 'localhost',
          bases:['./src'],
          livereload: true

        }
      },
      prod: {
        options: {
          port: 3000,
          hostname: 'localhost',
          bases:['./prod'],
          livereload:true
        }
      }
    },


// HTMLLINT =========================================================
//          TODO: Consider https://www.npmjs.com/package/grunt-html-validation
//                at later time to ensure W3C compliance. For now, KISS.
//          NOTE: Ruleset is https://github.com/yaniswang/HTMLHint/wiki/Rules
    htmlhint: {
      options: {
          htmlhintrc: '../buildcfg/.htmlhintrc',
          force: false
      },
      all: {
        src: ['src/**/*.html']
      }
    },



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
            dest: 'prod/'
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
            cwd: 'src/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'prod/'
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
        path: 'http://localhost:3000/index.html',
        app: 'C:/Program Files (x86)/Firefox Developer Edition/firefox.exe'
    },
    prod: {
        path: 'http://localhost:3000/index.html',
        app: 'C:/Program Files (x86)/Firefox Developer Edition/firefox.exe'
    },
    mac: {
        path: 'http://localhost:3000/index.html',
        app: 'FirefoxDeveloperEdition'
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
      },
      prod: {
        options: {
            sourcemap: "none"
        },
        files: [{
          expand: true,
          cwd: 'src/assets/css/scss',
          src: ['*.scss'],
          dest: 'prod/assets/css',
          ext: '.css'
        }]
      }
    },


// SCSSLINT =========================================================
   scsslint : {
        all: [
          'src/**/*.scss'
        ],
        options: {
          colorizeOutput: true,
          force: true
        }
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
        mangle: true,
        mangleProperties: true,
        preserveComments: false,
      },

      prod: { // in-house files
        files: {
          //TODO: assign wildcards?
          //'dist/js/magic.min.js':'src/js/magic.js',
          //'dist/js/test.js':'src/js/test.js'
          //'dist/js/budgetapp.min.js': ['src/js/magic.js','src/js/test.js']
          'prod/assets/core.js' : ['src/**/*.js','!src/assets/lib/**/*.js']
        }
      },

      prod: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js','!assets/js/lib/**/*.js'],
          dest: 'prod/'
        }]
      },

      libraries: { // libraries
        files: [{
          expand  : true,                // allow dynamic build
          cwd     : 'src/assets/lib',    // curernt working dir
          src     : '**/*.js',           // source files
          dest    : 'prod/assets/lib', // destination
          ext     : '.min.js',           // replace .js to .min.js
          extDot  : 'last'               // use the last dot to append to.
        }],
      }
    },


// WATCH ============================================================
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: 'src/**/*.js',
        tasks: ['jshint']
      },
      sass: {
        options: {
          livereload: true
        },
        files: ['src/**/*.scss'],
        tasks: ['scsslint','sass']
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['htmlhint']
      }

    } //<---<

  });

  // https://24ways.org/2013/grunt-is-not-weird-and-hard/

  // create the tasks
  grunt.registerTask('dev-start-server',['express:dev','open:dev','watch']);
  grunt.registerTask('dev-start-mac',['express:dev','open:mac','watch']);
  grunt.registerTask('dev-build',['scsslint','sass','csslint:dev_lax','autoprefixer:dev','jshint:dev','htmlhint']);
  grunt.registerTask('prod-start-server',['express:prod','open:prod','watch']);
  grunt.registerTask('prod-build',['clean','scsslint','sass:prod','csslint:prod_lax','autoprefixer:prod','cssmin:prod','jshint:prod','uglify:prod','htmlhint','htmlmin:prod','imagemin']);
  //unt.registerTask('dev',['scsslint','sass','csslint:dev_lax', 'autoprefixer:dev','jshint:dev','htmllint','watch','open:dev']);

  //grunt.registerTask('buildapi',['sass','watch']);
  //grunt.registerTask('default',['jshint','uglify','less','cssmin']);
  //grunt.registerTask('uglyonly',['uglify']);
  //grunt.registerTask('production',['jshint','uglify','less','cssmin:production']);

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