module.exports = {
    entry: {
        filename: './lib/flipchart.js'
    },
    output: {
        filename: './dist/flipchart-lib.js'
    },
    module: {
        loaders: [{
            loader: 'babel',
            query: {
                presets: ['es2015'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
};