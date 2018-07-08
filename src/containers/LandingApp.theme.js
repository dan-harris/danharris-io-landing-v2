import { css } from "styled-components";

// theme settings
const theme = {
  padding: 2.5, //rem
  margin: 2.5, //rem
  color: {
    primary: "#4c5096",
    secondary: "#595959",
    accent1: "#7F7F7F",
    accent2: "#A6A6A6",
    white: "#fff"
  },
  icon: {
    color: "#fff",
    colors: { brand: "#fff" },
    size: {
      large: "100%"
    },
    extend: css`
      ${props => props.color === "inverse" && `stroke: white;`};
    `
  },
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
