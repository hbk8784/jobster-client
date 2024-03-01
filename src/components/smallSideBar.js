import Wrapper from "../assets/wrapper/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideBar } from "../features/user/userSlice";
import NavLinks from "./navLinks";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSideBar());
  };
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSideBar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
