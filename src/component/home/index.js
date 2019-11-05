import React from 'react';

const homeContainer = {
  width: "90%",
  height: "90%"
};

const imgSize = {
  width: "100%",
  height: "100%",
  margin: 20
}

const Home = () => (
  <div className={homeContainer}>
    <a href="/">
    <img 
    className={imgSize} 
    src="https://image.freepik.com/free-vector/promotion-fashion-banner_1188-161.jpg" 
    alt=""
    />
    </a>
  </div>
);

export default Home;