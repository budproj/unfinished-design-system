import logotype from '@bud/tokens/assets/logotypes/primary.svg';

interface StorybookTheme {
  base: string,
  colorPrimary: string,
  colorSecondary: string,
  appBg: string,
  appContentBg: string,
  appBorderColor: string,
  appBorderRadius: number,
  fontBase: string,
  fontCode: string,
  textColor: string,
  textInverseColor: string,
  barTextColor: string,
  barSelectedColor: string,
  barBg: string,
  inputBg: string,
  inputBorder: string,
  inputTextColor: string,
  inputBorderRadius: string,
  brandTitle: string,
  brandUrl: string,
  brandImage: string,
};

export default <StorybookTheme> {
  base: 'light',
  brandTitle: 'Bud',
  brandUrl: 'https://getbud.co',
  brandImage: logotype,
};
