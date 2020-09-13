import React from 'react';
import './style.css';

export default ({ onClick, active, data}) => {
    return (
        <div className={`chatListItem ${active && 'active'}`} onClick={onClick}>
            <img className="chatListItem--avatar" src={data.image} alt="Avatar" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
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