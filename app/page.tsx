import Image from "next/image";
import Home from "./components/home";
import JobSearchForm from "./components/jobSearch";
export default function Main() {
  return (
    <div>
      <Home />
      <JobSearchForm />
    </div>
  );
}
