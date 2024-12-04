function TextCard() {
  return (
    <div className="flex w-full items-center justify-center gap-16 ">
      <div className="max-w-[500px]">
        <h1 className="text-[50px] font-semibold text-wrap text-[#ECDFCC]">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </h1>
        <p className="mt-10 text-[17px] text-[#fbfbfb65]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi
          optio accusantium, voluptate magnam odit quibusdam incidunt possimus,
          rem dolorum
        </p>
      </div>
      <div className="w-full max-w-[750px] h-[490px] bg-white rounded-2xl"></div>
    </div>
  );
}
export default TextCard;
