import { styled } from "@/styles";

export const Container = styled("header", {
  variants: {
    justLogo: {
      true: {
        justifyContent: "center",

        button: {
          display: "none",
        },
      },
    },
  },

  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  button: {
    all: "unset",
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "48px",
    height: "48px",

    borderRadius: "6px",
    backgroundColor: "$gray800",

    cursor: "pointer",

    "&:hover": {
      filter: "brightness(0.9)",
    },

    svg: {
      width: "24px",
      height: "24px",
    },

    span: {
      position: "absolute",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      top: "-8px",
      right: "-8px",
      backgroundColor: "$green500",
      height: "24px",
      width: "24px",
      border: "3px solid $gray900",

      borderRadius: "50%",

      fontSize: "$sm",
      fontWeight: "bold",
      color: "$white",
    },
  },
});
