import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <Card className="w-40 h-30 bg-black opacity-70 shadow-lg relative transition-transform hover:scale-[1.1] duration-500 flex flex-col items-center shadow-lg  m-1 border-none">
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
