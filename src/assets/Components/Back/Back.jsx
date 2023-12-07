import './Back.css'
import { Link } from 'react-router-dom';

const Back = ({close}) => {

    return(
        <>
            <div className="warningBody">
                <p className='warninigText1'>Are you sure you want to go back?</p>
                <p className='warningText2'>All unsaved progress will be lost.</p>
                <button
                    onClick={close}
                    className='warningBtn warncancel '>Cancel</button>
                <Link to="/profile" className='reactlink'>
                    <button className='warningBtn warnconfirm '>Confirm</button>
                </Link>
            </div>

        </>
    )
}

export default Back;