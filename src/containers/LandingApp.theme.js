import { css } from "styled-components";

// theme settings
const theme = {
  layout: {
    breakpoints: {
      xs: 0, // rem
      sm: 30, // rem
      md: 48, // rem
      lg: 60 // rem
    },
    media: {
      xs: (...args) => mediaQuery("xs", ...args),
      sm: (...args) => mediaQuery("sm", ...args),
      md: (...args) => mediaQuery("md", ...args),
      lg: (...args) => mediaQuery("lg", ...args)
    }
  },
  flexa: {
    columns: 12,
    gutter: {
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2
    },
    breakpoints: {
      xs: () => theme.layout.breakpoints.xs,
      sm: () => theme.layout.breakpoints.sm,
      md: () => theme.layout.breakpoints.md,
      lg: () => theme.layout.breakpoints.lg
    }
  }
};

// helper function for creating media queries within styled-components
const mediaQuery = (size, ...args) =>
  css`
    @media (min-width: ${theme.layout.breakpoints[size]}rem) {
      ${css(...args)};
    }
  `;

export const media = theme.layout.media;
export default theme;
