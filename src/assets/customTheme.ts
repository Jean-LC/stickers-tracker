import { colorsTuple, createTheme } from "@mantine/core";

export const customTheme = createTheme({
  defaultRadius: 30,
  colors: {
    primaryBlue: colorsTuple("#85A9CD"),
    secondaryBlue: colorsTuple("#B9E1E3"),
    primaryOrange: colorsTuple("#FBC376"),
    secondaryOrange: colorsTuple("#FBE39D"),
    textWhite: colorsTuple("#F1F8F9"),
  },
  components: {
    Title: {
      defaultProps: {
        c: "primaryBlue",
        ff: "Jua",
        m: 0,
        p: 0,
      },
    },
    Text: {
      defaultProps: {
        c: "textWhite",
        ff: "Jua",
      },
    },
    Flex: {
      defaultProps: {
        style: {
          borderRadius: 30,
        },
      },
    },
    Image: {
      defaultProps: {
        w: 20,
        h: 20,
        style: {
          cursor: "pointer",
        },
      },
    },
    Group: {
      defaultProps: {
        w: "100%",
        justify: "center",
      },
    },
    Input: {
      defaultProps: {
        c: "primaryBlue",
      },
      styles: {
        input: {
          fontFamily: "Jua",
          background: "#FBE39D",
          color: "#85A9CD",
          weight: "lighter",
        },
      },
    },
    Modal: {
      defaultProps:{
        bg: 'primaryOrange',
      },
      styles: {
        content: {
          background: "#85A9CD",
        },
        
      }
    }
  },
});
