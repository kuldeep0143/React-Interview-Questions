import React from "react";
import LikeButton from "./LikeButton";

function App() {
  // Replace the imageURL with the actual URL of your image
  const imageURL =
    "https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fv1677712288%2Finstasize-website%2Flearn%2Flrm1ehuepxxgjntqr1hx.webp&w=640&q=75";

  return (
    <div className="App flex items-center justify-center h-screen bg-gray-100 ">
      <div className="post-container bg-black p-8 rounded-lg shadow-md w-72 ">
        {imageURL && (
          <img
            src={imageURL}
            alt="Custom Image"
            className="mb-4 rounded-md w-full"
          />
        )}

        {/* Your post content here */}
        <LikeButton />
      </div>
    </div>
  );
}

export default App;
