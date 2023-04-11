import { PulseLoader } from "react-spinners";
import { useAppSelector } from "../store";
import { CSSProperties } from "react";

function Spinner() {
  const { isLoading }: { isLoading: boolean } = useAppSelector(
    (state) => state.task
  );

  const flexDisplay: CSSProperties = {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <PulseLoader
      cssOverride={flexDisplay}
      color={"#7ebffb"}
      loading={isLoading}
      size={25}
    />
  );
}

export default Spinner;
