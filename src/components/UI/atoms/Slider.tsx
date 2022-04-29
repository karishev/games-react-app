import { Typography } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";

interface Props {
  images: Array<string>;
  title: string
}

export const Slider: React.FC<Props> = ({ images, title }) => {
  return (
    <>
      <Typography variant="h4" sx={{marginBottom: "2rem"}}>{title}</Typography>
      <SimpleImageSlider
        autoPlay
        autoPlayDelay={5}
        slideDuration={0.5}
        width="50vw"
        height="calc(9/16*50vw)"
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </>
  );
};
