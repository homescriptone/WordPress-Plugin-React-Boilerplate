const defaults = require('@wordpress/scripts/config/webpack.config');

defaults['entry'] = ['admin/src/plugin-name-admin.js', 'public/src/plugin-name-public.js'];
module.exports = {
  ...defaults,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}; 