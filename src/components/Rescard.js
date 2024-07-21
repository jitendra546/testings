let Rescard = (props) => {
  let { resData } = props;
  return (
    <>
      <div className="box">
        <img src={resData.image}/>
        <p>{resData.title}</p>
        <span>{resData.price}</span>
      </div>
    </>
  );
};
export default Rescard;
