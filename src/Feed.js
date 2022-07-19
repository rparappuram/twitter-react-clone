import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";

function Feed() {

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
          <Post
          displayName="Ryan Parappuram"
          username="rparappuram"
          verified={true}
          text="I like cars!"
          image="https://www.wired.com/wp-content/uploads/2016/05/11xHTywJSoZIMTgyfgFLBJQ-1.gif"
          avatar="https://www.cs.utexas.edu/~rpara/images/headshot.jpg"
          />
    </div>
  );
}

export default Feed;