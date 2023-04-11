import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store";
import { FormState } from "../interfaces/FormState.interface";
import { toggleForm } from "../features/formSlice/formSlice";

interface Props {
  text: string;
}

export default function Button({ text }: Props) {
  const { isFormShown }: FormState = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  return (
    <button className="btn" onClick={() => dispatch(toggleForm())}>
      {isFormShown ? <FaTimes style={{ color: "white" }} /> : text}
    </button>
  );
}

Button.defaultProps = {
  text: "Add",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
