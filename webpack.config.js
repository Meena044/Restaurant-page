const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/restaurant.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
    // module : {
    //     rules :[

    //     ],
    // },
};