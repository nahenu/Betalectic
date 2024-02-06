import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <div className="h-screen w-screen flex-column justify-center items-center p-1  sm:flex">
      <div className="flex-1">
        <img src="./pose_31.png" alt="" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-3 text-3xl">
        <h1 className="text-3xl text-slate-600 ">
          {" "}
          <span className="italic">Our</span> platform showcases a curated
          selection of npm packages to streamline your development process.
        </h1>
        <Link to={"/ViewPage"}>
          <Button size={"xl"}>
            ADD FAVOURITES
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
