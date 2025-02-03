import { Reveal } from "@/app/helper components/Reveal";

function InfoGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 container mt-52">
      <Reveal>
        <div className=" h-[350px] rounded-lg bg-white"></div>
      </Reveal>
      <div className="grid grid-cols-2 gap-5">
        <Reveal animationType="slide2">
          <div className=" h-[650px] rounded-lg bg-white "></div>
        </Reveal>
        <Reveal animationType="slide3">
          <div className=" h-[650px] rounded-lg bg-white "></div>
        </Reveal>
      </div>
    </div>
  );
}
export default InfoGrid;
