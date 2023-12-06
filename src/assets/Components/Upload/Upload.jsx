import './upload.css';

const Upload = ({ onClose })=>{

    return(
        <>
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
                        <textarea id='descText' className=' descField' type='textarea'  maxLength={'400'}/>
                    </div>
                    <div>
                        <label htmlFor='linkText' className='inputLabel'>Link</label>
                        <input id='linkText' className='inputFields' type='text'/>
                    </div>
                    <div className='modalButtonsContainer'>
                    <button className='cancel modalButtons'
                        onClick={onClose}
                        >Cancel</button>
                    <input className='send modalButtons' type='submit' value={'Add project'}/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Upload;