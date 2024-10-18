import { MainSlider, Slider, Residence, Panorama } from "@/components/shared";
import { Parallax } from "@/components/ui/ParallaxProvider";
import data from "../public/data.json";

export default function Home() {
  return (
    <>
      <MainSlider />
      <Parallax>
        <Residence />
      </Parallax>
      <Slider data={data.firstSlider} />
      <Panorama />
    </>
  );
}
