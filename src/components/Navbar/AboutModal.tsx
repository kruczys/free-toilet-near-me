import { BiSolidInfoCircle } from "react-icons/bi";

const AboutModal = () => {
  return (
    <button className="flex gap-1 items-center ml-2">
      <BiSolidInfoCircle></BiSolidInfoCircle>
      <span className="whitespace-nowrap">About Us</span>
    </button>
  );
};

export default AboutModal;
