import {
  HiOutlineArrowLeftOnRectangle,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

function Header() {
  return (
    <div className="layout flex justify-between sticky top-0 backdrop-blur-sm border-b-gray-100 border-2">
      <span>Logo</span>

      <ul className="flex items-center gap-2">
        <li>
          <img src="#" alt="User's profile" />
        </li>
        <li>
          <button>
            <HiOutlineCog6Tooth />
          </button>
        </li>
        <li>
          <button>
            <HiOutlineArrowLeftOnRectangle />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
