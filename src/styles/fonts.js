import { css } from 'styled-components';

import GoogleSansRegularWoff from '@fonts/GoogleSans/GoogleSans-Regular.woff';
import GoogleSansRegularWoff2 from '@fonts/GoogleSans/GoogleSans-Regular.woff2';
import GoogleSansMediumWoff from '@fonts/GoogleSans/GoogleSans-Medium.woff';
import GoogleSansMediumWoff2 from '@fonts/GoogleSans/GoogleSans-Medium.woff2';
import GoogleSansBoldWoff from '@fonts/GoogleSans/GoogleSans-Bold.woff';
import GoogleSansBoldWoff2 from '@fonts/GoogleSans/GoogleSans-Bold.woff2';

import GoogleSansItalicWoff from '@fonts/GoogleSans/GoogleSans-Italic.woff';
import GoogleSansItalicWoff2 from '@fonts/GoogleSans/GoogleSans-Italic.woff2';
import GoogleSansMediumItalicWoff from '@fonts/GoogleSans/GoogleSans-MediumItalic.woff';
import GoogleSansMediumItalicWoff2 from '@fonts/GoogleSans/GoogleSans-MediumItalic.woff2';
import GoogleSansBoldItalicWoff from '@fonts/GoogleSans/GoogleSans-BoldItalic.woff';
import GoogleSansBoldItalicWoff2 from '@fonts/GoogleSans/GoogleSans-BoldItalic.woff2';

import SFMonoRegularWoff from '@fonts/SFMono/SFMono-Regular.woff';
import SFMonoRegularWoff2 from '@fonts/SFMono/SFMono-Regular.woff2';
import SFMonoSemiboldWoff from '@fonts/SFMono/SFMono-Semibold.woff';
import SFMonoSemiboldWoff2 from '@fonts/SFMono/SFMono-Semibold.woff2';

import SFMonoRegularItalicWoff from '@fonts/SFMono/SFMono-RegularItalic.woff';
import SFMonoRegularItalicWoff2 from '@fonts/SFMono/SFMono-RegularItalic.woff2';
import SFMonoSemiboldItalicWoff from '@fonts/SFMono/SFMono-SemiboldItalic.woff';
import SFMonoSemiboldItalicWoff2 from '@fonts/SFMono/SFMono-SemiboldItalic.woff2';

const googlesansNormalWeights = {
  400: [GoogleSansRegularWoff, GoogleSansRegularWoff2],
  500: [GoogleSansMediumWoff, GoogleSansMediumWoff2],
  600: [GoogleSansBoldWoff, GoogleSansBoldWoff2],
};

const googlesansItalicWeights = {
  400: [GoogleSansItalicWoff, GoogleSansItalicWoff2],
  500: [GoogleSansMediumItalicWoff, GoogleSansMediumItalicWoff2],
  600: [GoogleSansBoldItalicWoff, GoogleSansBoldItalicWoff2],
};

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
};

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
};

const googlesans = {
  name: 'GoogleSans',
  normal: googlesansNormalWeights,
  italic: googlesansItalicWeights,
};

const sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};
const googlesansNormal = createFontFaces(googlesans);
const googlesansItalic = createFontFaces(googlesans, 'italic');

const sfMonoNormal = createFontFaces(sfMono);
const sfMonoItalic = createFontFaces(sfMono, 'italic');

const Fonts = css`
  ${googlesansNormal + googlesansItalic + sfMonoNormal + sfMonoItalic}
`;

export default Fonts;
