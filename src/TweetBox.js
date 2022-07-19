import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://www.cs.utexas.edu/~rpara/images/headshot.jpg"></Avatar>
                    <input placeholder="What's happening?"></input>
                </div>
                <input
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox