import React from 'react';
import {  Avatar,Avatar2,Avatar3,Avatar4,Avatar5,Avatar6 } from "../assets";


const images = [
  Avatar,Avatar2,Avatar3,Avatar4,Avatar5,Avatar6
  // Add more image URLs as needed
];

const RandomImage = ({ images }) => {
  // Function to select a random image from the array
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // Get a random image
  const randomImage = getRandomImage();

  return randomImage; // Return the random image URL
};

// Usage


export default RandomImage;
