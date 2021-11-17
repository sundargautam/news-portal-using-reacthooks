import "./Loader.css";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <div className="loader centered">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
