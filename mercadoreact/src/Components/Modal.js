import React, {Component} from 'react'
import Form from './Form'

class Modal extends Component {

  render() {

    return (

      <div className="modal fade" tabIndex={-1} role="dialog" id="react-modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar Producto</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal
