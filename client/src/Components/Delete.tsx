import { Button, Modal } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import { deleteFavouritePackage } from "../redux/package/packageSlice";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
interface DeleteFavourite {
  i: number;
}

const Delete: React.FC<DeleteFavourite> = ({ i }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const DeleteFavourite = (index: number) => {
    dispatch(deleteFavouritePackage(index));
    setOpenModal(false);
  };
  return (
    <>
      <Button color="failure" onClick={() => setOpenModal(true)}>
        <MdDelete size={"18px"} />
      </Button>
      <Modal
        show={openModal}
        popup
        size="md"
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => DeleteFavourite(i)}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Delete;
