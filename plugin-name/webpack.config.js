const defaults = require('@wordpress/scripts/config/webpack.config');

var admin = Object.assign({}, defaults, {
    name: "admin",
    entry: './admin/src/plugin-name-admin.js',
    output: {
       path: "./admin/dist",
       filename: "plugin-name-admin.js"
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
});

var public = Object.assign({}, defaults, {
    name: "public",
    entry: './public/src/plugin-name-admin.js',
    output: {
       path: "./public/dist",
       filename: "plugin-name-public.js"
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
});


module.exports = {
  admin, public
}; 