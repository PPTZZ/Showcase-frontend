import './upload.css';
import Back from '../Back/Back';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal'
import { useState } from 'react';

const Upload = ()=>{

    const [state, setState] = useState(false)
        
    return(
    <>
        <nav>
            <img src='/Logo.svg' alt='Logo' className='logo'/>
            <img src='/bell icon.svg' alt='subscriibe bell' className='subscribe'/>
            <Link to='/' className='reactLink logOut'>
                <p className='logOut'>Log Out</p>
            </Link>
        </nav>
        <div className='uploadPage'>
                <div
                    onClick={()=>setState(true)}
                    className='backBtn'>
                    <img src="/arrow_back.svg"/>
                    <p className='backText'>Back</p>
                </div>
            <Modal open={state}>
                <Back close={()=>setState(false)}/>
            </Modal>
            <div className='formBody'>
                <form action="http://localhost:3000/" encType="multipart/form-data" method="post">
                    <label htmlFor='picSelect' className='picFrame'>
                        <img src='/upload.svg' alt='upload'/>
                        <p className='uploadText'>Upload picture</p>
                    </label>
                    <input className='picFrame' id='picSelect' type='file' style={{display:'none'}}/>
                    <div>
                        <label htmlFor='titleText' className='inputLabel'>Title</label>
                        <input id='titleText' className='inputFields' type='text'/>
                    </div>
                    <div>
                        <label htmlFor='descText' className='inputLabel'>Description</label>
                        <textarea id='descText' className=' descField' type='textarea'/>
                    </div>
                    <div>
                        <label htmlFor='linkText' className='inputLabel'>Link</label>
                        <input id='linkText' className='inputFields' type='text'/>
                    </div>
                    <div className='submitButtonContainer'>
                    <input className='send submitButton' type='submit' value={'Add project'}/>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

export default Upload;