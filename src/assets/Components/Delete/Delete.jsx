import '../Back/Back.css'
import { Link } from 'react-router-dom';

const Delete = ({close}) => {

    return(
        <>
            <div className="warningBody">
                <p className='warninigText1'>Are you sure you want to delete this project?</p>
                <p className='warningText2'>This action is not reversable.</p>
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

export default Delete;