import error from "../assets/image/not-found.svg";
import Wrapper from "../assets/wrapper/ErrorPage";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={error} alt="errror logo" />
        <h3>OOPS! Page Not Found</h3>
        <p>We can't seem to find the page you'r looking for</p>
        <Link to="/">Go Home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
