import { InfiniteMovingCards } from "./ui/MarqueeCards";
import HpTitle from "./ui/HpTitle";
import TextCard from "./ui/TextCard";

function Home() {
  return (
    <div className="flex flex-col p-5 pt-20 w-full dark:bg-[#1A1A19] bg-white ">
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
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default Home;
