import { quicksand } from "@/app/fonts/Fonts";
import { staatliches } from "@/app/fonts/Fonts";

function TextCard(props) {
  return (
    <div className="flex w-full items-center justify-center gap-16 ">
      <div className="max-w-[550px]">
        <h1
          className={` ${staatliches.className} text-[50px] font-semibold text-wrap dark:text-[#ECDFCC] text-[#F5EFE7]`}
        >
          {props.title}
        </h1>
        <p
          className={` ${quicksand.className} mt-10 text-[17px] text-[#fbfbfb65]`}
        >
          {props.description}
        </p>
      </div>
      <div className="w-full max-w-[750px] h-[490px] bg-white rounded-2xl"></div>
    </div>
  );
}
export default TextCard;
