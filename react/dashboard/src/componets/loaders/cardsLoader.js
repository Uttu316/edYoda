import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

const CardsLoader = () => {
  const numberOfCards = new Array(4).fill(0);
  return (
    <React.Fragment>
      {numberOfCards.map((i, index) => (
        <CardLoader key={index + "card_loader"} />
      ))}
    </React.Fragment>
  );
};

export const CardLoader = ({ ...props }) => {
  return (
    <Skeleton
      variant="rectangular"
      sx={{ margin: 4 }}
      width={210}
      height={118}
      {...props}
    />
  );
};
export default CardsLoader;
