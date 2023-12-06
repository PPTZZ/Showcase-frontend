import Card from "../Card/Card";
import './cardlist.css'
import { Outlet } from "react-router-dom";

const CardList = () =>{

    return(
    <>
        <div className="cardListView">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Outlet/>
        </div>
    </>
    )
}

export default CardList;