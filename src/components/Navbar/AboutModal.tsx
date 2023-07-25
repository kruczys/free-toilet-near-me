import { BiSolidInfoCircle } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Modal from "../common/Modal";

const AboutModal = () => {
  return (
    <Modal
      buttonContent={
        <>
          <BiSolidInfoCircle></BiSolidInfoCircle>
          <span className="whitespace-nowrap hidden sm:block">About Us</span>
        </>
      }
      buttonAriaLabel="about us"
    >
      <div className="flex flex-row items-center gap-2">
        <BsGithub></BsGithub>You can contribute{" "}
        <a
          href="https://github.com/kruczys/free-toilet-near-me"
          target="_blank"
          className="contents font-bold"
        >
          here
        </a>
      </div>
    </Modal>
  );
};

export default AboutModal;
