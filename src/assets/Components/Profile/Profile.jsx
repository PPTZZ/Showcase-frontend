import './prfile.css';
import { Link, Outlet } from 'react-router-dom';

const Profile = () =>{
    return(
        <>
            <nav>
                <img src='/Logo.svg' alt='Logo'/>
                <img src='/bell icon.svg' alt='subscriibe bell'/>
                <Link to='/' className='reactLink'>
                    <p>Log Out</p>
                </Link>
            </nav>
            <div>
                <img src='/keyboard.svg'/>
                <div className='sidebar'>
                    <img src='/Profile Picture.svg'/>
                    <p>{"name"}</p>
                    <p>{""}</p>
                    <p>{"email"}</p>
                    <p>{"locaton"}</p>
                    <button><img src="/edit.svg"/>Edit Profile</button>
                    <p>Member since: {"date"}</p>
                </div>
                <div className='display'>
                    <Link to='/projects' className='reactLink'>
                        <p>Projects</p>
                    </Link>
                    <Link to='/drafts' className='ractLink'>
                        <p>Drafts</p>
                    </Link>
                </div>
                <div className='canvas'>
                    <Link to='/upload' className='reactLink'>
                        <button><img src='/add.svg'/>New project </button>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Profile;