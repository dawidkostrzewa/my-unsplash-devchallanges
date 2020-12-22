const path = require('path');
const webpack = require('webpack');

function srcPath(subdir) {
    return path.join(__dirname, 'src', subdir);
}

module.exports = function override(config, env) {
    config.resolve = {
        ...config.resolve,
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            Components: srcPath('Components'),
            Img: srcPath('img'),
            Styles: srcPath('styles'),
            Core: srcPath('Core')
        }
    };

    return config;
};
