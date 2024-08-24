import profileImg from './assets/profile.jpg'

function Card() {
    return (
        <div className="card">
            <img className='card__image' src={profileImg} alt="profile picture" />
            <h2 className='card__title'>pppisar</h2>
            <p className='card__description'>I study Web Engineering at university and work as a UX Designer</p>
        </div>
    );
}

export default Card;