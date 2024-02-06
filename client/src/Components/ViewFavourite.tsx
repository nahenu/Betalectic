import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import Delete from "./Delete";
import { FaEye } from "react-icons/fa";

interface ViewFavouriteProps {
  props: {
    selectedPackage: string;
    description: string;
  };
  i: number;
}
const ViewFavourite: React.FC<ViewFavouriteProps> = ({ props, i }) => {
  return (
    <Card className="w-3/4 sm:w-64 ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden text-ellipsis">
        {props.selectedPackage}
      </h5>
      <p className=" overflow-hidden h-12 text-ellipsis w-full  font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
      <div className="flex w-full  justify-between">
        <Link to={`/viewpage/${i}`}>
          <Button color="purple">
            <FaEye size={"18px"} />
          </Button>
        </Link>

        <Delete i={i} />
      </div>
    </Card>
  );
};

export default ViewFavourite;
