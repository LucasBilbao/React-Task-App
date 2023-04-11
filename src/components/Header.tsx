import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

type Props = {
  title: "string";
};

function Header({ title }: Props) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && <Button text="Add" />}
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
