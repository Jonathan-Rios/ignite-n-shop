import { styled } from "@/styles";

export const Container = styled("aside", {
  variants: {
    open: {
      true: {
        width: "480px",
      },
      false: {
        width: "0px",
        padding: "24px 0",

        section: {
          display: "none",
        },
      },
    },
  },

  position: "absolute",
  zIndex: 10,
  top: 0,
  right: 0,
  height: "100vh",

  transition: "width 0.2s ease-in-out, padding 0.2s ease-in-out;",

  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

  backgroundColor: "$gray800",
  overflow: "hidden",
  padding: "24px 45px",

  display: "flex",
  flexDirection: "column",

  ".header": {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: "2rem",

    height: "80px",

    h3: {
      fontWeight: "700",
      fontSize: "$lg",
      color: "$gray100",
    },

    button: {
      all: "unset",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      marginLeft: "auto",
      marginBottom: "auto",

      width: "24px",
      height: "24px",

      cursor: "pointer",

      "&:hover": {
        filter: "brightness(0.9)",
      },

      svg: {
        width: "24px",
        height: "24px",
      },
    },
  },

  "& > section": {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },

  "& > footer": {
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",
    gap: "0.5rem",

    div: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      color: "$gray100",

      "&.total": {
        fontWeight: "700",
        fontSize: "$lg",

        h3: {
          fontSize: "$xl",
        },
      },
    },

    button: {
      margin: "48px 0 32px",

      backgroundColor: "$green500",
      border: 0,
      color: "$white",
      borderRadius: 8,
      cursor: "pointer",
      padding: "1.25rem",

      fontSize: "$md",
      fontWeight: "bold",
      transition: "background-color 0.2s",

      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },

      "&:not(:disabled):hover": {
        backgroundColor: "$green300",
      },
    },
  },
});
