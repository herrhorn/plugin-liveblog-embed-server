module.exports = {
    options: {
        configFile: '<%= paths.test %>/client/karma.conf.js',
        browsers: ['Chrome']
    },
    dev: {
        reporters: 'dots'
    },
    travis: {
        singleRun: true,
        browsers: ['PhantomJS']
    },
    bamboo: {
        singleRun: true,
        browsers: ['PhantomJS'],
        reporters: ['junit', 'dots']
    },
    once: {
        singleRun: true
    }
};
