import { Logo } from "../components";
import main from "../assets/image/main.svg";
import Wrapper from "../assets/wrapper/LandingPage";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> Portal
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            corrupti commodi delectus hic consequuntur placeat sequi ut officia
            aperiam tempore!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img className="img main-img" src={main} alt="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
