import "./Loader.css";
import LoaderImg from "../../assets/img/loader.gif";

export default function Loader() {
  window.onload = () => {
    setTimeout(() => {
      document.querySelector(".Loader").style.display = "none";
    }, 100);
  };
  return (
    <div className="Loader">
      <img src={LoaderImg} />
    </div>
  );
}
