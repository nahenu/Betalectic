import React, { useEffect, useState } from "react";
import { Button, Textarea, Label, Modal, TextInput } from "flowbite-react";
import axios from "axios";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addFavouritePackage } from "../redux/package/packageSlice";
import toast, { Toaster } from "react-hot-toast";

interface Package {
  package: {
    name: string;
  };
}
interface FavPackage {
  selectedPackage: string;

  description: string;
}

const AddFavourite: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [packages, setPackages] = useState<Package[]>([]);
  const [searchQuery, setSearchQuery] = useState<String>("");
  const [favpackage, setFavpackage] = useState<FavPackage>({
    selectedPackage: "",
    description: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchQuery) {
      let timeout = setTimeout(() => {
        axios
          .get(`https://api.npms.io/v2/search?q=${searchQuery}`)
          .then((response) => {
            setPackages(response.data.results);
          });
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [searchQuery]);

  const onCloseModal = () => {
    setOpenModal(false);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFavpackage({ ...favpackage, [id]: value });
  };
  const addFavourite = () => {
    if (!favpackage.selectedPackage || !favpackage.description) {
      return toast.error("Please fill all fields");
    }
    {
      setOpenModal(false);
      setPackages([]);
      setSearchQuery("");
      dispatch(addFavouritePackage(favpackage));
      toast.success("Added Successfully");
      return;
    }
  };

  return (
    <>
      <div className=" flex gap-5">
        <Button
          onClick={() => {
            setOpenModal(true), setSearchQuery(""), setPackages([]);
          }}
          color="light"
          pill
          className="flex items-center justify-center"
        >
          <IoMdAdd />
        </Button>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add Favourite
              </h3>
              <div className="flex flex-col gap-3">
                <div>
                  <div className="mb-2 block">
                    <Label value="Npm-Packages" />
                  </div>
                  <TextInput
                    type="text"
                    placeholder="Search "
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                {packages.length > 0 && (
                  <div className="mb-4 max-h-40 overflow-y-auto">
                    <h1 className="text-2xl font-bold mb-4 ml-4 text-white">
                      Results
                    </h1>
                    <div className="grid grid-cols-1 gap-2 ml-4">
                      {packages.map((pkg) => (
                        <div key={pkg.package.name} className="mb-2">
                          <input
                            type="radio"
                            id="selectedPackage"
                            name={pkg.package.name}
                            value={pkg.package.name}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor={pkg.package.name}
                            className="ml-2 text-white"
                          >
                            {pkg.package.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <div className="mb-2 block">
                    <Label value="Description" />
                  </div>
                  <Textarea
                    id="description"
                    placeholder="Why is this your Favourite ?"
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button onClick={addFavourite}>Add</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Toaster />
      </div>
    </>
  );
};

export default AddFavourite;
