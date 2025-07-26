import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <Card className="w-40 h-30  relative transition-transform hover:scale-105 duration-200 flex flex-col items-center shadow-md  m-2 ">
      <CardContent className="p-1 flex items-center justify-center">
        <img
          alt="Movie Card"
          src={IMG_CDN + posterPath}
          className="rounded-md object-cover"
        />
      </CardContent>
    </Card>
  );
};

export default MovieCard;
