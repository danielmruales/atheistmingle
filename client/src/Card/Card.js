import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    render() {
        return (
            <div>
                <div className='cardImage'>
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' alt='user profile' className='image' />
                </div>
                <div className='mainBtns'>
                    <button>They're Hot!</button>
                </div>
            </div>

        );
    }
}

export default Card;