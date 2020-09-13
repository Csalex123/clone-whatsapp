import React from 'react';
import './style.css';

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://w3schools.com/howto/img_avatar2.png" alt="Avatar" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Alex Ricardo</div>
                    <div className="chatListItem--date">01:50</div>
                </div>

                <div className="chatListItem-line">
                    <div className="chatListItem--lastMasg">
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}