import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
  async webpackFinal(config) {
    const paths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
      locales: '',
      buildLocales: '',
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    // config!.resolve!.alias = {
    //   ...config!.resolve!.alias,
    //   '@': paths.src,
    // };

    config!.module!.rules = config!.module!.rules!.map(
      // @ts-ignore
      (rule: RuleSetRule) => {
        if (/svg/.test(rule.test)) {
          return {
            ...rule,
            exclude: /\.svg$/i,
          };
        }
        return rule;
      },
    );

    config!.module!.rules.push(buildCssLoader(true));
    config!.module!.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    console.log(config.module?.rules);

    return config;
  },
};
export default config;
