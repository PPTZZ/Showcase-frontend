import './card.css'
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Edit from '../Edit/edit';

const Card = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div className='displayCard'>
            <img src='/test pic 1.jpeg' className='cardImage'/>
            <div className='hiddenCard hidden'>
                <div
                    className='edit hiddenButton' onClick={()=> setIsOpen(true)}>
                    <img src='/edit.svg'/> 
                    <p>Edit</p>
                    <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
                        <Edit onClose={()=> setIsOpen(false)}/>
                    </Modal>
                </div>
                <div className='hide hiddenButton'>
                    <img src='/visibility.svg'/>
                    <p>Hide</p>
                </div>
                <div className='delete hiddenButton'>
                    <img src='/delete.svg'/>
                    <p>Delete</p>
                </div>
                <p className='title'>{"TITLE"}</p>
            </div>
        </div>
        </>
    );
}

export default Card