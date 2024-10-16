import { MainSlider, Slider } from "@/components/shared";
import data from "../public/data.json";

export default function Home() {
  return (
    <>
      <MainSlider />
      <Slider data={data.firstSlider} />
    </>
  );
}
