import { styled } from "@/styles";

export const Container = styled("aside", {
  display: "flex",
  alignItems: "stretch",
  gap: "20px",

  "& > span": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "110px",
    height: "92px",

    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
    borderRadius: "8px",
  },

  "& > div": {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
    padding: "4px",

    h4: {
      fontWeight: "400",
      fontSize: "18px",

      color: "#C4C4CC",
    },

    h3: {
      fontWeight: "700",
      fontSize: "18px",

      color: "#E1E1E6",
    },

    button: {
      all: "unset",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      marginRight: "auto",

      fontWeight: "700",
      fontSize: "16px",

      color: "#00875F",

      cursor: "pointer",

      "&:hover": {
        filter: "brightness(0.9)",
      },
    },
  },
});
