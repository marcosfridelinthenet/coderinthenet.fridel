import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { createContext, useState } from 'react';
import { render } from '@testing-library/react';

export const WindowModalContext = createContext();

const WindowModalContextProvider = ({children}) => {
    /* const [show, setShow] = useState(false); */
    
    const [showWindow, setShowWindow] = useState(false);
    const handleClose = () => setShowWindow(false);
    const handleShow = () => setShowWindow(true);
        
    console.log('showWindow', showWindow);

    const showModal = (mensaje) => {
        console.log('show', showWindow, mensaje);
        render(
          <Modal show={showWindow} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Coder.Inthenet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {mensaje}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }

    return (
      <>
{/*         <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}
  
      <WindowModalContext.Provider value={{ handleShow }}>
        {children}
      </WindowModalContext.Provider>
      </>
    );
  }
  
export default WindowModalContextProvider;