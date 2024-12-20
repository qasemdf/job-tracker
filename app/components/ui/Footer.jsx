function Footer() {
  return (
    <footer className="flex w-full h-[200px] absolute justify-evenly p-10 bg-[#3E5879] dark:bg-[#373d3c]">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#F5EFE7] dark:text-[#ECDFCC] text-2xl">PORTAL</h1>
        <p className="text-[#fbfbfb65]">all rights reserved</p>
        <p className="text-[#fbfbfb65]">Tracker Me 2024</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-[#F5EFE7] dark:text-[#ECDFCC] mb-4">Company</h2>
        <p className="text-[#fbfbfb65]">About</p>
        <p className="text-[#fbfbfb65]">Twitter</p>
        <p className="text-[#fbfbfb65]">Discord</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-[#F5EFE7] dark:text-[#ECDFCC] mb-4">Legal</h2>
        <p className="text-[#fbfbfb65]">Terms of Service</p>
        <p className="text-[#fbfbfb65]">Privacy Policy</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-[#F5EFE7] dark:text-[#ECDFCC] mb-4">The Team</h2>
        <p className="text-[#fbfbfb65]">Our Mission</p>
        <p className="text-[#fbfbfb65]">Meet the Team</p>
        <p className="text-[#fbfbfb65]">What we stand for</p>
      </div>
    </footer>
  );
}
export default Footer;
