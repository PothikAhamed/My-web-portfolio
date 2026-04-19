import { MdOutlineContactPhone } from "react-icons/md";

const Button = () => {
  return (
    <div>
      <button className="bg-orange-600 flex items-center gap-x-2 py-1 px-2 text-white text-[16px] font-semibold rounded-2xl cursor-pointer hover:bg-gray-900 hover:text-orange-600 duration-300">
        <MdOutlineContactPhone />
        Hire me
      </button>
    </div>
  );
};

export default Button;
