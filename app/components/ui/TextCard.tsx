import { quicksand } from "@/app/fonts/Fonts";
import { staatliches } from "@/app/fonts/Fonts";

import { Reveal } from "@/app/helper components/Reveal";

function TextCard(props: any) {
  return (
    <div
      id="responsive"
      className="flex w-full items-center justify-center gap-16 "
    >
      <div className="max-w-[550px]">
        <Reveal>
          <h1
            className={` ${staatliches.className} text-[50px] font-semibold text-wrap dark:text-[#ECDFCC] text-[#F5EFE7]`}
          >
            {props.title}
          </h1>
        </Reveal>
        <Reveal>
          <p
            className={` ${quicksand.className} mt-10 text-[17px] text-[#fbfbfb65]`}
          >
            {props.description}
          </p>
        </Reveal>
      </div>
      <img className="w-full max-w-[750px]" src={props.img} alt="" />
    </div>
  );
}
export default TextCard;
