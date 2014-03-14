module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: [
      'imgs',
      'css/main.sprites.css',
      'css/main.min.css',
      'js/main.min.js'
    ],
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'images/',
            src: ['*'],
            dest: 'imgs/'
          }
        ]
      }
    },
    oversprite: {
      dist: {
        spritelist: [
          {
            src: ['images/button*.png', 'images/get*.png'],
            dest: 'imgs/sprites.png'
          }
        ],
        csslist: [
          {
            src: 'css/main.css',
            dest: 'css/main.sprites.css'
          }
        ]
      }
    },
    'string-replace': {
      dist: {
        options: {
          replacements: [
            {
              pattern: /images\//g,
              replacement: 'imgs/'
            }
          ]
        },
        files: {
          'css/main.sprites.css': 'css/main.sprites.css'
        }
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['*.png', '*.jpg'],
          dest: 'imgs/'
        }]
      }
    },
    csso: {
      dist: {
        files: {
          'css/main.min.css': ['css/normalize.css', 'css/main.sprites.css']
        },
      }
    },
    uglify: {
      dist: {
        files: {
          'js/main.min.js': 'js/main.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-oversprite');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-string-replace');

  // Default task(s).
  grunt.registerTask('default', [
    'clean',
    'copy',
    'oversprite',
    'imagemin',
    'string-replace',
    'csso',
    'uglify'
  ]);

};
