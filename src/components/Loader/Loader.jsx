import { Triangle } from "react-loader-spinner";
import { wrapper } from "./Loader.module.css";

const Loader = () => {
  return (
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#646cff"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass={wrapper}
    />
  );
};

export default Loader;
