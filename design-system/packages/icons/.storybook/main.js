module.exports = {
  stories: ['../src/**/*.stories.*'],
  logLevel: 'debug',
  addons: ['@storybook/addon-essentials'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
};
