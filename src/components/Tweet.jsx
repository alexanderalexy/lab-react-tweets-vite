import ProfileImage from "./src/components/ProfileImage";
import User from "./src/components/User";
import Timestamp from "./src/components/Timestamp";
import Message from "./src/Message";
import Actions from "./src/components/Actions";


function Tweet({tweet}) {
  console.log(tweet)
  return (
    <div className="tweet">
    

<ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
        
      <User name={tweet.user.name} handle={tweet.user.handle} />

      <Timestamp time={tweet.timestamp} />
  
        </div>

      <Message message={tweet.message} />

      <Actions />
        
    </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>

  );
}

export default Tweet;
