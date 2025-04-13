module.exports = {
  default: {
    require: [
      'src/steps/**/*.ts',
      'src/support/world.ts', // 👈 register your world here
      'src/support/hooks.ts'
    ],
    requireModule: ['ts-node/register'],
    paths: ['src/features/**/*.feature'],
    format: ['progress'],
    timeout: 10000
  }
};
