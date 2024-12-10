function Video() {
  return (
    <video width={500} height={350} controls autoPlay preload="none">
      <source src="Videos/showcase_1.mp4" type="video/mp4" />
    </video>
  );
}
export default Video;
