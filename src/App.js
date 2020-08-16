import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

function App() {

  //declare images in arrays
  const images = [
    { url: "https://www.miga.org/sites/default/files/2018-06/soybean-plants-with-cloudy-sky.jpg" },
    { url: "https://www.vocfm.co.za/wp-content/uploads/2019/03/SA-LAND-EXPROPRIATION.jpg" },
    { url: "https://cdn.coingape.com/wp-content/uploads/2020/02/25173413/Screen-Shot-2020-02-25-at-5.32.11-pm-min-678x381.png" },
    { url: "https://fitsmallbusiness.com/wp-content/uploads/2017/09/How-to-buy-land-ftrd.jpg" },
];

  return (
    <div className="App">
      <center>
        {/* Calling image slider package component, and passing array of images */}
        <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                />
      </center>
     
    </div>
  );
}

//export the function
export default App;
