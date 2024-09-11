import { useState } from "react";

import full_view from "../assets/full_view.jpg";
import betroom from "../assets/bedroom.png";
import top_view from "../assets/top_view.png";
import meating_hall from "../assets/meating_hall.png";
import meating_room from "../assets/meating_room.png";

const Slide = () => {
  const [image, setImage] = useState(0);
  const gallary = [full_view, betroom, top_view, meating_hall, meating_room];
  setTimeout(() => {
    if (image < gallary.length - 1) {
      setImage(image + 1);
    } else {
      setImage(0);
    }
  }, 3000);
  return (
    <img
      src={gallary[image]}
      alt={gallary[image]}
      className="w-full h-full overscroll-contain rounded-3xl border-none bg-none"
    />
  );
};

export default Slide;
