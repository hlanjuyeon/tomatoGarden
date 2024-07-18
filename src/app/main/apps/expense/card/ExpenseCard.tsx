import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)({
  position: "relative",
  display: "flex",
  overflow: "hidden",
  borderRadius: "1rem", // rounded-2xl
  boxShadow:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // shadow
  backgroundColor: "#fff", // bg-card

  "&.fuse-card-flippable": {
    borderRadius: 0,
    overflow: "visible",
    transformStyle: "preserve-3d",
    transition: "transform 1s",
    perspective: "600px",
    background: "transparent",
    boxShadow: "none", // shadow-none

    "&.fuse-card-face-back": {
      ".fuse-card-front": {
        visibility: "hidden",
        opacity: 0,
        transform: "rotateY(180deg)",
      },

      ".fuse-card-back": {
        visibility: "visible",
        opacity: 1,
        transform: "rotateY(360deg)",
      },
    },

    ".fuse-card-front, .fuse-card-back": {
      display: "flex",
      flexDirection: "column",
      flex: "1 1 auto",
      zIndex: 10,
      transition:
        "transform 0.5s ease-out 0s, visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s",
      backfaceVisibility: "hidden",
      borderRadius: "1rem", // rounded-2xl
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // shadow
      backgroundColor: "#fff", // bg-card
    },

    ".fuse-card-front": {
      position: "relative",
      opacity: 1,
      visibility: "visible",
      transform: "rotateY(0deg)",
      overflow: "hidden",
    },

    ".fuse-card-back": {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0,
      visibility: "hidden",
      transform: "rotateY(180deg)",
      overflow: "hidden auto",
    },
  },
});

function ExpenseCard() {

  return (
    <>
    <StyledCard>Example</StyledCard>
    </>
  );
};

export default ExpenseCard;