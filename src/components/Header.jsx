import { FiAlignJustify } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

function Header({ setOpen, open }) {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  isMobile ? "" : setOpen(!isMobile);

  function handleMenuBtn(open) {
    setOpen(!open);
  }

  return (
    <div className="inline-block w-[97%]">
      <p className=" flex gap-3 sm:gap-5 items-center px-5 sm:px-8 ">
        <FiAlignJustify
          className="scale-[140%] sm:scale-[180%] mt-1 lg:hidden cursor-pointer hover:scale-[150%] sm:hover:scale-[190%]"
          onClick={() => handleMenuBtn(open)}
        />
        <p className="text-lg sm:text-3xl font-bold w-full my-3 md:my-5">
          Customizable Tic-Tac-Toe
        </p>
      </p>
    </div>
  );
}

export default Header;
