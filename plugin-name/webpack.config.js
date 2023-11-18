const defaults = require('@wordpress/scripts/config/webpack.config');

defaults['entry'] = ['./src/admin/plugin-name-admin.js', './src/public/plugin-name-public.js'];
module.exports = {
  ...defaults,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}; 