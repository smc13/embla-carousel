import { gradientBackgroundStyles } from './gradientBackgroundStyles'
import { COLORS, supportsStyles } from 'consts'
import { css } from 'styled-components'

export const gradientTextStyles = css`
  color: ${COLORS.BRAND_PRIMARY};
  ${supportsStyles.gradientText} {
    ${gradientBackgroundStyles};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
