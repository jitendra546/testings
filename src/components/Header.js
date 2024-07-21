import {URL} from "../../utils/constants.js";

let Header = () => {
  return (
    <div className="d-flex">
      {console.log(URL)}
      <img
        src={URL} 
        style={{ width: "100px" }}
        alt=""
      />

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};
export default Header;
