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
    '.text-18px': {
      ...adjustFontSizeTo('18px'),
    },
    '.text-20px': {
      ...adjustFontSizeTo('20px'),
    },
    '.text-22px': {
      ...adjustFontSizeTo('22px'),
    },
    '.text-24px': {
      ...adjustFontSizeTo('24px'),
    },
    '.text-26px': {
      ...adjustFontSizeTo('26px'),
    },
    '.text-28px': {
      ...adjustFontSizeTo('28px'),
    },
    '.text-30px': {
      ...adjustFontSizeTo('30px'),
    },
    '.text-32px': {
      ...adjustFontSizeTo('32px'),
    },
    '.text-36px': {
      ...adjustFontSizeTo('36px'),
    },
    '.text-38px': {
      ...adjustFontSizeTo('38px'),
    },
    '.text-40px': {
      ...adjustFontSizeTo('40px'),
    },
  }),
})

export default typography
