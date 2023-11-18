const defaults = require('@wordpress/scripts/config/webpack.config');

defaults['entry'] = {
  admin : { import : './admin/src/plugin-name-admin.js', filename: '../admin/dist/plugin-name-admin.js' },
  public : { import : './public/src/plugin-name-public.js', filename: '../public/dist/plugin-name-public.js' },
}

module.exports = {
  ...defaults,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}; 