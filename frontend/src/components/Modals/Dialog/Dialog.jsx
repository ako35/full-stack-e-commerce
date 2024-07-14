import PropTypes from "prop-types";
import "./Dialog.css";

const Dialog = ({ isDialogShow, setIsDialogShow }) => {

  const handleCloseDialog = (event) => {
    const checked = event.target.checked;
    localStorage.setItem("dialog", JSON.stringify(!checked))
  };

  return (
    <div className={`modal-dialog ${isDialogShow ? "show" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={() => setIsDialogShow(false)}>
          <i className="bi bi-x"></i>
        </button>
        <div className="modal-image">
          <img src="/img/modal-dialog.jpg" alt="" />
        </div>
        <div className="popup-wrapper">
          <div className="popup-content">
            <div className="popup-title">
              <h3>E-BÜLTEN</h3>
            </div>
            <p className="popup-text">
            E-bültenimize kaydolun ve başka hiçbir yerde bulamayacağınız özel fırsatları doğrudan gelen kutunuza alın!
            </p>
            <form className="popup-form">
              <input type="text" placeholder="Email adresinizi giriniz" />
              <button className="btn btn-primary">ABONE OL</button>
              <label>
                <input type="checkbox" onChange={handleCloseDialog} />
                <span>Bu pencereyi bir daha gösterme</span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal-overlay"
        onClick={() => setIsDialogShow(false)}
      ></div>
    </div>
  );
};

export default Dialog;

Dialog.propTypes = {
  isDialogShow: PropTypes.bool,
  setIsDialogShow: PropTypes.func,
};
