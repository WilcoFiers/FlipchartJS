module.exports = {
    entry: {
        filename: './app/index.jsx'
    },
    output: {
        filename: './dist/flipchart-app.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: ['es2015'],
                plugins: [
                    'transform-object-rest-spread',
                    'transform-react-jsx'
                ]
            }
        }]
    }
};