import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Space Mono',
      styles: ['400', '700', '700i'],
    },
    {
      name: 'Barlow',
      styles: ['400', '500', '700'],
    },
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Space Mono', 'monospace'],
  bodyFontFamily: ['Space Mono', 'monospace'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    '.barlow': {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
    },
  }),
})

export default typography
