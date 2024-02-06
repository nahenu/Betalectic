import React from "react";
import { Button } from "flowbite-react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { RootState } from "../redux/store";
interface Package {
  selectedPackage: string;
  description: string;
}

interface FavouritePackageState {
  favouritePackage: { [key: number]: Package };
}
const ReadAboutPackage: React.FC = () => {
  const { favouritePackage } = useSelector(
    (state: RootState) => state.package
  ) as FavouritePackageState;
  const params = useParams<{ id: string }>();

  return (
    <>
      {favouritePackage && favouritePackage[Number(params.id)] ? (
        <div className="flex justify-center h-screen items-center">
          <div className="flex flex-col justify-center p-5 gap-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {favouritePackage[Number(params.id)].selectedPackage}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 break-normal h-auto text-xs sm:text-base">
              {favouritePackage[Number(params.id)].description}
            </p>
            <Link to={`/viewpage`}>
              <Button color="failure">
                Back
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ReadAboutPackage;
