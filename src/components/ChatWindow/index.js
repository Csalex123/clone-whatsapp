import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './style.css';

import MessageItem from '../MessageItem';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default ({user}) => {
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {   
            author: 1,
            body: 'teste'
        },
        {
            author: 1,
            body: 'teste2'
        },
        {
            author: 2 ,
            body: 'teste3'
        },
        
    ]);

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    function handleEmojiClick(e, emojiObject) {
        setText(text + emojiObject.emoji)
    }

    const handleSendClick = () => {

    }

    const handleMicClick = () => {
        if (recognition !== null) {

            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript);
            }

            recognition.start();
        }
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://w3schools.com/howto/img_avatar2.png" alt="" />
                    <div className="chatWindow--name">Alex Ricardo</div>
                </div>

                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{ color: "#919191" }} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{ color: "#919191" }} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{ color: "#919191" }} />
                    </div>
                </div>
            </div>
            <div className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div className="chatWindow--emojiarea" style={{ height: emojiOpen ? '250px' : '0' }}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker />
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow-pre">
                    {emojiOpen && (
                        <div
                            className="chatWindow--btn"
                            onClick={handleCloseEmoji}
                        >
                            <CloseIcon style={{ color: "#919191" }} />
                        </div>
                    )}

                    {!emojiOpen && (
                        <div
                            className="chatWindow--btn"
                            onClick={handleOpenEmoji}>
                            <InsertEmoticonIcon style={{ color: "#919191" }} />
                        </div>
                    )}
                </div>
                <div className="chatWindow-inputarea">
                    <input
                        className="chatWindow--input"
                        placeholder="Digite uma mensagem..."
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow-pos">
                    {text !== '' && (
                        <div onClick={handleSendClick} className="chatWindow--btn">
                            <SendIcon style={{ color: "#919191" }} />
                        </div>
                    )}
                    {text === '' && (
                        <div onClick={handleMicClick} className="chatWindow--btn">
                            <MicIcon style={{ color: listening ? '#126ECE' : "#919191" }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}