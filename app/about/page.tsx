import { GridComponent } from "../components/ui/GridComponent";

function About() {
  return (
    <div className="flex flex-col items-center w-full pt-20 text-white">
      <section className="w-full dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
        <h1 className="text-[45px] mb-36 mt-14 text-center">
          This was made by two very passionate developers
        </h1>
        <div className="flex justify-center gap-10 w-full">
          <div className="flex justify-center items-center w-full max-w-[620px] h-96 rounded-lg bg-white"></div>
          <div className="w-full max-w-[620px] h-96 rounded-lg bg-white"></div>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex gap-10 mt-44">
            <h1 className="text-[25px]">
              Too is a Platform for Jobs of Services Replace Dis Later on Lad
            </h1>
            <div className="w-[790px]">
              <p className="text-[25px] text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                repudiandae possimus provident dolor natus ipsum qui sed quo
                eaque repellat id quae, at sunt. Necessitatibus consequatur
                exercitationem ducimus asperiores harum?
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center mt-36 gap-24">
            <div className="w-full max-w-[485px] h-64 mb-14 rounded-lg bg-white"></div>
            <div className="w-full max-w-[485px] h-64 mb-14 rounded-lg bg-white"></div>
            <div className="w-full max-w-[485px] h-64 mb-14 rounded-lg bg-white"></div>
          </div>
        </div>
      </section>
      <section className="w-full h-[1700px] flex flex-col bg-[#3C3D37] pt-10">
        <h2 className="text-center text-[rgba(255,255,255, 0.2)]">
          Our Values
        </h2>
        <h2 className="text-[49px] text-center text-[#eee]">
          Our Values are the catalyst for all of our endeavors
        </h2>
        <GridComponent />
      </section>
    </div>
  );
}
export default About;
