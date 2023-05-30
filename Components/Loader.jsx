import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height : '100vh' , width : '100%' , background : 'rgba(0,0,0,0.3)'}}>
        <ThreeDots
          height="150"
          width="150"
          radius="9"
          color="#0b47a9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Loader;
