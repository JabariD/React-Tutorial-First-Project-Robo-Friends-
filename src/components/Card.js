import React from 'react';

// We use tachyons to make the card (when it is being looped over) PRETTY!
const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt='robot' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;