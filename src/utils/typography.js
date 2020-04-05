import Typography from "typography"
import usWebDesignStandardsTheme from "typography-theme-us-web-design-standards"

usWebDesignStandardsTheme.scaleRatio = 2
usWebDesignStandardsTheme.overrideThemeStyles = (
  { adjustFontSizeTo },
  options
) => ({
  "@media only screen and (max-width:900px)": {
    "h1,h2,h3,h4,h5,h6": {
      ...adjustFontSizeTo("22px"),
    },
  },
})

const typography = new Typography(usWebDesignStandardsTheme)

export default typography
