const defaults = require('@wordpress/scripts/config/webpack.config');

defaults['entry'] = {
    admin : { import : './admin/src/plugin-name-admin.js', filename: './admin/dist/[name].js' },
    public : { import : './public/src/plugin-name-public.js', filename: './public/dist/[name].js' },
}

module.exports = {
  ...defaults,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}; 