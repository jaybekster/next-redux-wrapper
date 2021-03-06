const config = require('next-redux-wrapper-configs/jest.config');
module.exports = Object.assign({}, config, {
    roots: ['<rootDir>/tests'],
    preset: 'jest-puppeteer',
    testPathIgnorePatterns: config.testPathIgnorePatterns.concat('./.next'),
    testRegex: '/tests/.*\\.test\\.tsx?$',
    coveragePathIgnorePatterns: config.coveragePathIgnorePatterns.concat('./jest-puppeteer.config.js'),
});
