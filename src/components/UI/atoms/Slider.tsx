import SimpleImageSlider from "react-simple-image-slider";

interface Props {
  images: Array<string>;
}

export const Slider: React.FC<Props> = ({ images }) => {
  return (
    <>
      <SimpleImageSlider
        autoPlay
        autoPlayDelay={5}
        slideDuration={0.5}
        width={600}
        height={350}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </>
  );
};
