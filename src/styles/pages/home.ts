import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "1.5rem 2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    transform: "translateY(100%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    p: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },

    div: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },

    span: {
      all: "unset",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      width: "56px",
      height: "56px",

      borderRadius: "6px",
      backgroundColor: "$gray700",

      background: "$green500",
      cursor: "pointer",

      svg: {
        width: "32px",
        height: "32px",

        color: "$white",
        fontWeight: "bold",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
