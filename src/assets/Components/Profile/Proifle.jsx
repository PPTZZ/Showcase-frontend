// import CardList from "./CardList";

const Profile = ()=> {
    return(
        <>
            <nav>
                <img src="/Logo.svg" alt="Logo" className="logo"/>
                <img src="/bell icon.svg" alt="" className="bellIcon"/>
                <p>Log out</p>
            </nav>
            <img src="/keyboard.svg" alt="keyboard img" className="keyboard"/>
            <div className="sideBar">
                <img src="Profile Picture.svg" alt="user's img" className="profPic"/>
                <p>{"name"}</p>
                <p>{"proffesion"}</p>
                <p><img src="mail.svg"/>{"email"}</p>
                <p><img src="location_on.svg"/>{"location"}</p>
                <button><img src="edit.svg"/>Edit profile</button>
                <p>Member since {"date"}</p>
            </div>
            <div className="mainContainer">
                <p>Projects</p>
                <p>Drafts {"(number)"}</p>
                <div className="cardContainer">
                    {/* <CardList/> */}
                </div>

            </div>
        </>
    )

}

export default Profile;