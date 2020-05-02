import React from 'react';

import Card from './Card.js';

// Wrap everything in JSX and simply use JS map function to loop over everything and make a card with these properties.
const CardList = ({robots}) => {
    return(
        <div>
            {robots.map((user, i) => {
                return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
            })}
        </div>
    );
}

export default CardList