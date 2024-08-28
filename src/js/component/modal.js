import React from "react";
import PropTypes from "prop-types";



const Modal = ({ show, onClose, onDelete }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">De verdad?? estás segur@ ??</h5>
                        <button type="button" className="close" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>¿ En serio que quieres borrar el contacto ? No podrás recuperarlo !!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                        <button type="button" className="btn btn-danger" onClick={onDelete}>Pues sí !! , borralo ya!!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Modal;

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};