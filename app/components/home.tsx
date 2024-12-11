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
        <TextCard
          title="Search for the Jobs You Care About"
          description="Finding your dream job begins with discovering roles that align with your passions and goals. Our platform allows you to easily refine your search by interests, skills, and desired industries. Whether you're aiming for your next big career move or exploring new opportunities, we make it simple to find the job that's right for you."
        />
        <TextCard
          title="Track the Important Jobs and Stay Organized in Your Search"
          description="Keep track of the jobs that matter most to you with ease. Our platform helps you save and organize job listings, so you can revisit them anytime. Whether you're comparing opportunities, preparing applications, or monitoring deadlines, staying organized ensures you never miss out on your next big break."
        />
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
