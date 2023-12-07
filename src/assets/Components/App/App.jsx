
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../Login/Login'
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Upload from '../Upload/Upload'
import Edit from "../Edit/edit";




const App = ()=> {
    useEffect(()=>{
        const url = 'http://localhost:3000/'
        const fetchData = async ()=>{
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
            } catch(err){
                console.log(err)
            }
        };

        fetchData();
    },[]);

    return(
        <>
        <Routes>
            <Route path='/' element = { <Login/> } />
            <Route path="/register" element = { <Register/> } />
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/upload' element={<Upload/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>

        </Routes>
        </>
    )
}

export default App;