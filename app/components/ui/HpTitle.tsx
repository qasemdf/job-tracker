import { ScrollContainerComponent } from "./ScollContainerComponent";

function HpTitle() {
  return (
    <div className="flex flex-col items-center pt-16 pb-10 dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
      <h1 className="text-[#ECDFCC] text-[48px] font-semibold">
        Bring the job market to you
      </h1>
      <h2 className="text-[#ECDFCC] text-[42px] font-semibold text-center">
        Track every application effortlessly
      </h2>
      <p className="mt-5 text-[#ECDFCC]">
        The new standard for applying and tracking jobs find your dream career
        within minuets
      </p>
      <p className="text-[#ECDFCC]">
        lorum ipsum so lador this is filler replace this with words later dalor
      </p>
      <a href="/register">
        <button
          className="mt-5 text-[#F6FCDF] p-2 font-medium w-[400px] rounded-md "
          style={{
            background: "linear-gradient(90deg, #1E201E, #3C3D37",
          }}
        >
          Start for Free
        </button>
      </a>
      <p className="text-[15px] mt-2 text-[#fbfbfb65]">
        14-day trial, no card required. start in minuets
      </p>
      <ScrollContainerComponent />
    </div>
  );
}
export default HpTitle;
