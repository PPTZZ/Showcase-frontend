import './prfile.css';
import { Link, Outlet } from 'react-router-dom';
import Upload from '../Upload/Upload';

const Profile = () =>{
    return(
        <>
            <nav>
                <img src='/Logo.svg' alt='Logo' className='logo'/>
                <img src='/bell icon.svg' alt='subscriibe bell' className='subscribe'/>
                <Link to='/' className='reactLink logOut'>
                    <p className='logOut'>Log Out</p>
                </Link>
            </nav>
            <div>
                <div className='keyboardContainer'>
                    <img src='/keyboard.svg' width={'100%'}/>
                </div>
                <div className='bodyContainer'>
                    <div className='sidebar'>
                        <img className='profPic' src='/Profile Picture.svg'/>
                        <p className='name'>{"Jackson Brown"}</p>
                        <p className='job'>{"Web Developer"}</p>
                        <a href='mailto:fakemail@yopmail.com'>
                            <div className='email'>
                                <img src='/mail.svg' />
                                <p className='marginless'>{"email"}</p>
                            </div>
                        </a>
                        <div className='loc'>
                            <img src='/location_on.svg'/>
                            <p className='marginless'>{"locaton"}</p>
                        </div>
                        <div className='lowerPage'>
                            <button className='profileBtn'><img src="/edit.svg"/>Edit Profile</button>
                            <p className='member'>Member since: {"date"}</p>
                        </div>
                    </div>
                    <div className='display'>
                        <Link to='/projects' className='reactLink projects'>
                            <p>Projects</p>
                        </Link>
                        <Link to='/drafts' className='reactLink drafts'>
                            <p>Drafts({'0'})</p>
                        </Link>
                        <div className='canvas'>
                        <Upload>
                            <button className='uploadBtn'><img src='/add.svg'/>New project </button>
                        </Upload>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile;