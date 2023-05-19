import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },

  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

    marginRight: "-50px",
  },
});

export const ImageContainer = styled("div", {
  width: 145,
  height: 145,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "999px",
  padding: "0.25rem",

  marginLeft: "-50px",
  marginTop: "4rem",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
