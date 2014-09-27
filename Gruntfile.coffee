module.exports = (grunt) ->

  grunt.initConfig
    browserify:
      options:
        extensions: ['.coffee']
        transform: ['coffeeify', 'uglifyify']
        debug: true
        alias: ['./lib/ld-request-browser/index.coffee:ld-request']

      dist:
        files:
          'assets/index.js': ['./client/index.coffee'],

    copy:
      dist:
        files:
          'assets/livingdocs_stream.css': 'client/livingdocs_stream.css'

    watch:
      changes:
        files: ['client/**/*']
        tasks: ['default']


  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['assets', 'watch'])
  grunt.registerTask('assets', ['browserify', 'copy'])

