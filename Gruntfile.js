var fs = require('fs'),
  path = require('path');

module.exports = function (grunt) {
  grunt.initConfig({
    srcDir: '.',
    src: '<%= srcDir %>/src',
    releaseDir: './release',
    buildDir: './release/lib',
    clean: ['./release/libs/bundle.js'],
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.config('concat.src', {
    src: [
      '<%= src %>/_start.js',
      '<%= src %>/_center.js',
      '<%= src %>/_end.js'
    ],
    dest: '<%= buildDir %>/bundle.js'
  });

  grunt.config('uglify', {
    main: {
      src: '<%= buildDir %>/bundle.js',
      dest: '<%= releaseDir %>/lib/bundle.min.js'
    },
  });
  grunt.registerTask('default', ['clean', 'concat', 'uglify']);
  grunt.registerTask('bundle', ['clean', 'concat']);
};

