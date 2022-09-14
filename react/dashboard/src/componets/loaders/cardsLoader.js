import React from "react";
import { Skeleton } from "@mui/material";

const CardsLoader = () => {
  const numberOfCards = new Array(4).fill(0);
  return (
    <React.Fragment>
      {numberOfCards.map((i, index) => (
        <Skeleton
          variant="rectangular"
          key={index + "card_skeleton"}
          sx={{ margin: 4 }}
          width={210}
          height={118}
        />
      ))}
    </React.Fragment>
  );
};

export default CardsLoader;
