import './card.css'

const Card = () => {
    return (
        <>
        <div className='card'>
            <img src='/test pic 1.jpeg' className='cardImage'/>
            <div className='hiddenCard hidden'>
                <div className='edit hiddenButton'>
                    <img src='/edit.svg'/> 
                    <p>Edit</p>
                </div>
                <div className='hide hiddenButton'>
                    <img src='/visibility.svg'/>
                    <p>Hide</p>
                </div>
                <div className='delete hiddenButton'>
                    <img src='/delete.svg'/>
                    <p>Delete</p>
                </div>
                <p className='title'>{"TITLE"}</p>
            </div>
        </div>
        </>
    );
}

export default Card