//packages
import { Blocks } from "react-loader-spinner";
import { useSelector } from "react-redux";

//styles
import "./index.css";

//component
const Loader = (props) => {
  const { isLoading } = useSelector((state) => state.userState);
  return (
    <>
      {isLoading && (
        <div className="loader">
          <Blocks
            height="80"
            width="80"
            color="#40AEBD"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default Loader;
