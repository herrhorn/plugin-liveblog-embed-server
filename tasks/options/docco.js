module.exports = {
    test: {
        src: ['test/**/*.js'],
        options: {
            output: 'docs/test'
        }
    },
    all: {
        src: [
            '<%= paths.scripts %>/**/*.js',
            '!<%= paths.scripts %>/bower_components/**'
        ],
        options: {
            output: 'docs/scripts'
        }
    }
};
