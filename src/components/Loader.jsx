import { useEffect } from "react";
import { preLoaderAnim } from "../animations/animation";

const Loader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div
      className="position-absolute top-50 start-50 translate-middle"
      style={{ zIndex: "999" }}
    >
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
