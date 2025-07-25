import { useState } from "react";

export default function LikeButton(){
  let [likes, setLikes] = useState(0);
  function countLikes(e){
    setLikes(likes + 1);
    console.log(likes);
  }
  return <button onClick={countLikes}>{likes} likes</button>;
}