import { InfiniteMovingCards } from "./ui/MarqueeCards";
import HpTitle from "./ui/HpTitle";
import TextCard from "./ui/TextCard";
import InfoGrid from "./ui/InfoGrid";
import TripleInfoCards from "./ui/TripleInfoCards";

function Home() {
  return (
    <div className="flex flex-col p-5 pt-20 w-full dark:bg-[#1E201E] bg-white ">
      <HpTitle />
      <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-transparent  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
        />
      </div>
      <div className="flex flex-col w-full p-12 gap-60">
        <TextCard />
        <TextCard />
      </div>
      <InfoGrid />
      <TripleInfoCards />
    </div>
  );
}
// the content for the moving cards
const testimonials = [
  {
    quote: "I found my dream job from this 10/10",
    name: "Lebron James",
    title: "Dream Job!",
  },
  {
    quote:
      "This software made my job search so much easier. The tailored recommendations saved me hours, and I landed a new role within two weeks. Highly recommend!",
    name: "James R",
    title: "amazing software!",
  },
  {
    quote:
      "The interface is clean and user-friendly, but I wish there were more job options in my field. Still, it’s worth a try for its efficiency.",
    name: "Sarah M",
    title: "Great interface",
  },
  {
    quote:
      "It’s a solid platform, but the notifications are a bit overwhelming. I appreciate the detailed job matches, though!",
    name: "Liam P",
    title: "Solid overall",
  },
  {
    quote:
      "Honestly, I was skeptical at first, but the software helped me land a dream job in under a month. Totally worth it!",
    name: "Give it a chance",
    title: "Ava G",
  },
];

export default Home;
