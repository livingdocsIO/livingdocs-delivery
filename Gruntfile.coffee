module.exports = (grunt) ->

  grunt.initConfig
    browserify:
      options:
        extensions: ['.coffee']
        transform: ['coffeeify', 'uglifyify']
        debug: true

      dist:
        files:
          'assets/index.js': ['./client/index.coffee'],

    copy:
      dist:
        files:
          'assets/livingdocs_stream.css': 'client/livingdocs_stream.css'

    watch:
      tests:
        files: ['test/**/*.coffee', 'lib/**/*.coffee']
        tasks: ['default']


  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['browserify', 'copy'])

