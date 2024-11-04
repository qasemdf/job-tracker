import { InfiniteMovingCards } from "./ui/MarqueeCards";

function Home() {
  return (
    <div className="flex flex-col p-5 pt-20 w-full dark:bg-[#1A1A19] bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] ">
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-white text-[48px] font-semibold">
          Bring the job market to you
        </h1>
        <h2 className="text-white text-[42px] font-semibold text-center">
          Track every application effortlessly
        </h2>
        <p className="mt-5 text-white">
          The new standard for applying and tracking jobs find your dream career
          within minuets
        </p>
        <p className="text-white">
          lorum ipsum so lador this is filler replace this with words later
          dalor
        </p>
        <button
          className="mt-5 text-[#F6FCDF] p-2 font-medium w-[400px] rounded-md "
          style={{
            background: "linear-gradient(90deg, #31511E, #859F3D",
          }}
        >
          Start for Free
        </button>
        <p className="text-[15px] mt-2 text-[#fbfbfb65]">
          14-day trial, no card required. start in minuets
        </p>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-transparent  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
      <div className="w-full p-12">
        <h2 className="text-white text-[26px]">
          Search for in demand jobs in your area
        </h2>
        <h2 className="text-white text-[26px] pl-4">
          look for the jobs your interested in
        </h2>
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
