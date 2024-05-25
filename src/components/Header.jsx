import { useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { TbGoGame } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";

//This will simply render the header in our project and it also contains 3line menu bar button to open/hide form in lower resolution

function Header({ setOpen, open }) {
  const isResChanged = useMediaQuery({ maxWidth: 1024 }); // this hook basically gives ous boolean value when our hits a specific resolution

  useEffect(
    //here we add/remove form to side based on higher or lower resolution
    function () {
      isResChanged ? "" : setOpen(!isResChanged);
    },
    [isResChanged]
  );

  function handleMenuBtn(open) {
    // to handle the menu button on top on lower resolution
    setOpen(!open);
  }

  return (
    <div className="inline-block w-[97%] fontUp">
      <div className=" flex gap-3 sm:gap-5 items-center px-5 sm:px-8 ">
        <FiAlignJustify
          className="scale-[140%] sm:scale-[180%] mt-1 lg:hidden cursor-pointer hover:scale-[150%] sm:hover:scale-[190%] text-gray-600"
          onClick={() => handleMenuBtn(open)}
        />
        <p className="text-lg sm:text-2xl lg:text-3xl ml-5 lg:ml-5 font-bold w-full my-3 md:my-5  text-gray-600 flex gap-4">
          <span>Tic-Tac-Toe Game</span>
          <TbGoGame className="scale-[120%] text-gray-600 mt-1.5" />
        </p>
      </div>
    </div>
  );
}

export default Header;
