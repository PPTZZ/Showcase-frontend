import '../Upload/upload.css';
import './edit.css'
import { Link } from 'react-router-dom';
import Back from '../Back/Back';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Edit = ()=>{

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
                    <label htmlFor='picSelect'>
                        <img src='/test pic 1.jpeg' alt='' className='selectedPic'/>
                        <div className='hiddenOptions'>
                            

                        </div>
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
                    <button className='delete'>Delete Project</button>
                    <input className='save submitButton' type='submit' value={'Add project'}/>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

export default Edit;