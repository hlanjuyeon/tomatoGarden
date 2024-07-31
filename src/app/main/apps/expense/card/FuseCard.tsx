import { styled } from "@mui/material/styles";
import { Card } from "@mui/material"
import React, { FC } from 'react';

export type FuseCardProps = {
  expanded?: boolean;
  face?: 'front' | 'back';
  flippable?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export const StyledCard = styled(Card)(({ theme }) => ({
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
}));

const FuseCard: FC<FuseCardProps> = ({ expanded = false, face = 'front', flippable = false, children, className = '', }) => {

  const getClassNames = () => {
    const classList = {
      'fuse-card-expanded': expanded,
      'fuse-card-face-back': flippable && face === 'back',
      'fuse-card-face-front': flippable && face === 'front',
      'fuse-card-flippable': flippable,
    };

    return Object.entries(classList)
      .filter(([key, value]) => value)
      .map(([key]) => key)
      .join(' ');
  };

  const renderContent = (selector: string) => {
    return React.Children.map(children, child => {
      if (React.isValidElement(child) && child.props[selector]) {
        return child;
      }
      return null;
    });
  };

  return (
    <StyledCard className={`${className} ${getClassNames()}`}>
      {flippable ? (
        <>
          <div className="fuse-card-front">{renderContent('fuseCardFront')}</div>
          <div className="fuse-card-back">{renderContent('fuseCardBack')}</div>
        </>
      ) : (
        <>
          {children}
          {expanded && (
            <div className="fuse-card-expansion">
              {renderContent('fuseCardExpansion')}
            </div>
          )}
        </>
      )}
    </StyledCard>
  );
};

export default FuseCard;