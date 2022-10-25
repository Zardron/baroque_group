import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow-copy.svg";

export default function NextButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: "none",
        background: "transparent",
        padding: "1px 6px",
        cursor: "pointer",

      }}
    >
      {<img src={RightArrow} />}
    </button>
  );
}
