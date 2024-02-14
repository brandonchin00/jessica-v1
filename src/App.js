import React from "react";
import "./App.css";

function App() {
  // Define a list of image URLs
  const imageUrls = [
    "../photos/1.gif",
    "../photos/2.jpeg",
    "../photos/3.gif",
    "../photos/4.jpeg",
    "../photos/5.jpeg",
    "../photos/6.gif",
    "../photos/7.jpeg",
    "../photos/8.jpeg",
    "../photos/9.jpeg",
    "../photos/10.jpeg",
    "../photos/11.jpeg",
    "../photos/12.jpeg",
    "../photos/13.jpeg",
    "../photos/14.jpeg",
    "../photos/15.jpeg",
    "../photos/16.jpeg",
    "../photos/17.jpeg",
    "../photos/18.jpeg",
    "../photos/19.jpeg",
    "../photos/20.jpeg",
    "../photos/21.jpeg",
    "../photos/22.jpeg",
    "../photos/23.jpeg",
    "../photos/24.jpeg",
    "../photos/25.gif",
    "../photos/26.jpeg",
    "../photos/27.jpeg",
    "../photos/28.jpeg",
    "../photos/29.jpeg",
    "../photos/30.jpeg",
    "../photos/31.jpeg",
    "../photos/32.jpeg",
    "../photos/33.jpeg",
    "../photos/34.jpeg",
    "../photos/35.jpeg",
    "../photos/36.gif",
    "../photos/37.jpeg",
    "../photos/38.gif",
    "../photos/39.jpeg",
    "../photos/40.jpeg",
  ];

  return (
    <div className="App">
      <div className="grid-container">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index}`} />
        ))}
      </div>
      <div className="block">
        <h2>Will you be my valentines?</h2>
        <p>
          Thank you for being patient with me. I want to do this to display the
          memories we had in the last 5 months.
        </p>
        <div className="button-box">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
}

export default App;
