import styled, { css } from "styled-components"
import {
  BASE_FONT_SIZE,
  BASE_LINE_HEIGHT,
  fontFamily,
  modularScale,
} from "../../design/typography"

function modularScaleCSS(power: number) {
  const { fontSize, lineHeight } = modularScale(power)

  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
  `
}

export const MarkdownWrapper = styled.div`
  font-size: ${BASE_FONT_SIZE}px;
  line-height: ${BASE_LINE_HEIGHT}px;

  & > :first-child {
    margin-top: 0;
  }

  & > :first-child {
    margin-bottom: 0;
  }

  p {
    margin: ${BASE_LINE_HEIGHT}px 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontFamily.header};
    letter-spacing: -1.75px;
    margin-top: ${BASE_LINE_HEIGHT * 2}px;
    margin-bottom: ${BASE_LINE_HEIGHT}px;
  }

  h1 {
    ${modularScaleCSS(6)};
  }

  h2 {
    ${modularScaleCSS(5)};
  }

  h3 {
    ${modularScaleCSS(4)};
  }

  h4 {
    ${modularScaleCSS(3)};
  }

  h5 {
    ${modularScaleCSS(2)};
  }

  h6 {
    ${modularScaleCSS(1)};
  }
`
