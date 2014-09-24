module.exports = (grunt) ->

  grunt.initConfig
    browserify:
      options:
        extensions: ['.coffee']
        transform: ['coffeeify', 'uglifyify']
        debug: true

      dist:
        files:
          'assets/index.js': ['./src/index.coffee'],


    watch:
      tests:
        files: ['test/**/*.coffee', 'lib/**/*.coffee']
        tasks: ['default']


  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['browserify'])

