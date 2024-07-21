import resList from "../../utils/mockdata";
import Rescard from "./Rescard";

let Body = () => {
  return (
    <>
      <div className="res-container">
        {resList.map((rest) => (
          <Rescard key={rest.id} resData={rest} />
        ))}
      </div>
    </>
  );
};
export default Body;
