import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: SZSansDigital;
    font-stretch: normal;
    font-style: normal;
    font-weight: 800;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Black.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Black.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Black.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Black.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Black.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZSansDigital;
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Bold.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Bold.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Bold.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Bold.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Bold.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZSansDigital;
    font-stretch: normal;
    font-style: normal;
    font-weight: 200;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Light.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Light.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Light.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Light.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Light.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZSansDigital;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Regular.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Regular.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Regular.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Regular.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSansDigital/SZSansDigital-Regular.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZ Sans;
    font-stretch: normal;
    font-style: italic;
    font-weight: 700;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSans/SZSans-BoldItalic.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSans/SZSans-BoldItalic.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSans/SZSans-BoldItalic.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSans/SZSans-BoldItalic.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSans/SZSans-BoldItalic.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZ Sans;
    font-stretch: normal;
    font-style: normal;
    font-weight: 200;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSans/SZSans-Light.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSans/SZSans-Light.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSans/SZSans-Light.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSans/SZSans-Light.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSans/SZSans-Light.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZ Text;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-Regular.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-Regular.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-Regular.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-Regular.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-Regular.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZ Text;
    font-stretch: normal;
    font-style: italic;
    font-weight: 400;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-RegularItalic.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-RegularItalic.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-RegularItalic.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-RegularItalic.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-RegularItalic.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZ Text;
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-Bold.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-Bold.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-Bold.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-Bold.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-Bold.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZ Text;
    font-stretch: normal;
    font-style: italic;
    font-weight: 700;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-BoldItalic.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-BoldItalic.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-BoldItalic.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-BoldItalic.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZText/SZText-BoldItalic.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZ Serif;
    font-stretch: normal;
    font-style: normal;
    font-weight: 200;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-Light.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-Light.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-Light.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-Light.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-Light.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZ Serif;
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-Bold.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-Bold.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-Bold.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-Bold.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-Bold.otf')
        format('opentype');
  }
  @font-face {
    font-family: SZ Serif;
    font-stretch: normal;
    font-style: italic;
    font-weight: 500;
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-MediumItalic.eot');
    src: url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-MediumItalic.eot?#iefix')
        format('embedded-opentype'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-MediumItalic.woff2')
        format('woff2'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-MediumItalic.woff')
        format('woff'),
      url('https://www.sueddeutsche.de/pagelayout/assets/fonts/SZSerif/SZSerif-MediumItalic.otf')
        format('opentype');
  }
`
