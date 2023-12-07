import './prfile.css';
import { Link } from 'react-router-dom';
import CardList from '../CardList/Cardlist';
import keyboard from './keyboard.jpg'

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
                    <img src={keyboard} className='keyboard'/>
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
                            <button className='uploadBtn'><img src="/edit.svg"/>Edit Profile</button>
                            <p className='member'>Member since: {"date"}</p>
                        </div>
                    </div>
                    <div className='display'>
                        <div className='canvas'>
                            <nav className='uploadNav'>
                            <p className='pageTitle'>Projects</p>
                            <Link to={"/upload"}>
                                <button
                                    className='uploadBtn'>
                                    <img src='/add.svg'/>New project
                                </button>
                            </Link>
                            </nav>
                            <CardList/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile;