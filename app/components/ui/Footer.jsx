function Footer() {
  return (
    <footer className="flex w-full h-[200px] justify-evenly p-10 bg-black">
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-2xl">Track Me</h1>
        <p className="text-[#fbfbfb65]">all rights reserved</p>
        <p className="text-[#fbfbfb65]">Tracker Me 2024</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-white mb-4">Company</h2>
        <p className="text-[#fbfbfb65]">About</p>
        <p className="text-[#fbfbfb65]">Twitter</p>
        <p className="text-[#fbfbfb65]">Discord</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-white mb-4">Legal</h2>
        <p className="text-[#fbfbfb65]">Terms of Service</p>
        <p className="text-[#fbfbfb65]">Privacy Policy</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-white mb-4">The Team</h2>
        <p className="text-[#fbfbfb65]">Our Mission</p>
        <p className="text-[#fbfbfb65]">Meet the Team</p>
        <p className="text-[#fbfbfb65]">What we stand for</p>
      </div>
    </footer>
  );
}
export default Footer;
