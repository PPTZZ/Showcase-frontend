import './modal.css';
import { createPortal } from 'react-dom';



const Modal = ({ open, children, onClose })=>{
  if(!open) return null
  return createPortal(
    <>
      <div className='overlay' onClick={onClose}/>
      <div className="upload">
          {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal;