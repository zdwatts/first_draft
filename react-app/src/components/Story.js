import React, { useEffect, useState } from "react";
import axios from "axios";

function Story() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get("http://127.0.0.1:5000/api/stories");
      console.log(data);
      console.log("alksjdf");
      setStory(data);
    })();
    console.log("hi");
  }, [story]);

  console.log(story);

  return <h1>Story Component</h1>;
}

export default Story;
