module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
       separator: ';'
     },
     dist: {
      src: ['js/src/*.js'],
      dest: 'js/build/script.min.js'
    }
  },
  uglify: {
    dist: {
      src: ['js/build/script.min.js'],
      dest: 'js/build/script.min.js'
    }
  },
  concat_css: {
    dist: {
      src: ['css/src/*.css'],
      dest: 'css/build/style.min.css'
    }
  },
  cssmin: {
    target: {
      files: {
        'css/build/style.min.css': ['css/build/style.min.css']
      }
    }
  }
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'concat_css', 'uglify', 'cssmin']);
  
};