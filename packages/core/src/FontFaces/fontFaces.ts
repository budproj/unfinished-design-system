import { css, SerializedStyles } from '@emotion/core'
import { assets, constants } from '@bud/tokens'

import { isHostnameProduction, Environment } from 'specifications'

const environment: Environment = isHostnameProduction()
  ? constants.environments.production
  : constants.environments.develop

const fontFaces: SerializedStyles = css`
  @font-face {
    font-family: 'CircularStd';
    src: url('${assets.fonts.circularstd.variants.n900.woff2[environment]}') format('woff2'),
      url('${assets.fonts.circularstd.variants.n900.woff[environment]}') format('woff'),
      url('${assets.fonts.circularstd.variants.n900.ttf[environment]}') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url('${assets.fonts.circularstd.variants.i900.woff2[environment]}') format('woff2'),
      url('${assets.fonts.circularstd.variants.i900.woff[environment]}') format('woff'),
      url('${assets.fonts.circularstd.variants.i900.ttf[environment]}') format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url('${assets.fonts.circularstd.variants.n700.woff2[environment]}') format('woff2'),
      url('${assets.fonts.circularstd.variants.n700.woff[environment]}') format('woff'),
      url('${assets.fonts.circularstd.variants.n700.ttf[environment]}') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url('${assets.fonts.circularstd.variants.i700.woff2[environment]}') format('woff2'),
      url('${assets.fonts.circularstd.variants.i700.woff[environment]}') format('woff'),
      url('${assets.fonts.circularstd.variants.i700.ttf[environment]}') format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url('${assets.fonts.circularstd.variants.n500.woff2[environment]}') format('woff2'),
      url('${assets.fonts.circularstd.variants.n500.woff[environment]}') format('woff'),
      url('${assets.fonts.circularstd.variants.n500.ttf[environment]}') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url('${assets.fonts.circularstd.variants.i500.woff2[environment]}') format('woff2'),
      url('${assets.fonts.circularstd.variants.i500.woff[environment]}') format('woff'),
      url('${assets.fonts.circularstd.variants.i500.ttf[environment]}') format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url('${assets.fonts.circularstd.variants.n300.woff2[environment]}') format('woff2'),
      url('${assets.fonts.circularstd.variants.n300.woff[environment]}') format('woff'),
      url('${assets.fonts.circularstd.variants.n300.ttf[environment]}') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url('${assets.fonts.circularstd.variants.i300.woff2[environment]}') format('woff2'),
      url('${assets.fonts.circularstd.variants.i300.woff[environment]}') format('woff'),
      url('${assets.fonts.circularstd.variants.i300.ttf[environment]}') format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  } ;
`

export default fontFaces
