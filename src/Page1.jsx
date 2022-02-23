import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <br />
      <Link to="/Page1/DA">DA</Link>
      <br />
      <Link to="/Page1/DB">DB</Link>
    </div>
  );
};
