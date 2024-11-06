import Image from "next/image";
import Home from "./components/Home";
import JobSearchForm from "./components/ui/jobSearch";
export default function Main() {
  return (
    <div>
      <Home />
      <JobSearchForm />
    </div>
  );
}
