import { width } from "@mui/system";
import LeftArrow from "../../assets/left-arrow-copy.svg";
import RightArrow from "../../assets/right-arrow.svg";

export default function NavButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        
      }}
    >
      {<img src={LeftArrow} />}
    </button>
  );
}
