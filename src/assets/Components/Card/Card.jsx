import './card.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Card = () => {

    const [hide,setHidden] = useState(false)

            return (
                <>
                 <div className='displayCard'>
                     <img src='/test pic 1.jpeg' className='cardImage'/>
                     <Link to="/edit/:id">
                         <div className='hiddenCard hidden'>
                             <div
                                onClick={()=>setHidden(true)}
                                className='hiddenButton'>
                                <img src='/visibility.svg'/>
                                <p className='hide'>Hide</p>
                             </div>
                             <p className='title'>{"TITLE"}</p>
                         </div>
                     </Link>
                 </div>
                </>
            );
        }

export default Card