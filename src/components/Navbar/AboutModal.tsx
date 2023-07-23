import { BiSolidInfoCircle } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Modal from "../common/Modal";

const AboutModal = () => {
  return (
    <Modal
      buttonContent={
        <>
          <i className="ml-2">
            <BiSolidInfoCircle></BiSolidInfoCircle>
          </i>
          <span className="whitespace-nowrap">About Us</span>
        </>
      }
    >
      <>
        <div className="flex flex-row items-center gap-1">
          <BsGithub></BsGithub>You can contribute{" "}
          <a
            href="https://github.com/kruczys/free-toilet-near-me"
            target="_blank"
            className="font-bold"
          >
            here
          </a>
        </div>
      </>
    </Modal>
  );
};

export default AboutModal;
