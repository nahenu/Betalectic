import React from "react";
import { useSelector } from "react-redux";
import AddFavorite from "../Components/AddFavourite";
import ViewFavourite from "../Components/ViewFavourite";
import { RootState } from "../redux/store"; // Assuming RootState is defined in redux/store
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
const ViewPage: React.FC = () => {
  const { favouritePackage } = useSelector((state: RootState) => state.package);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-4 justify-center items-center mt-4">
        <AddFavorite />
        <Link to={"/"}>
          <Button color="green">
            <FaHome />
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center sm:col sm:justify-none sm:items:none gap-4 flex-wrap mt-4 w-screen sm:p4">
        {favouritePackage &&
          favouritePackage.map((e: any, i: number) => {
            return <ViewFavourite key={i} props={e} i={i} />;
          })}
      </div>
    </div>
  );
};

export default ViewPage;
