import { IoMdHeart } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-center flex  gap-2 items-center justify-center mt-8">
      <div className="text-gray-600 text-xs">Made By <span className="text-xs text-primary">Murshid</span> with love</div>
      <div className="text-primary text-xs">
        <IoMdHeart size={15} />
      </div>
    </div>
  );
};

export default Footer;
