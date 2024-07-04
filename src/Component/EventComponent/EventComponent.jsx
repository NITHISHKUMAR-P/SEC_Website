import React, {useState, useEffect} from "react";
import techImg from './tech-conference.jpg';
import artImg from './art-exhibition.jpg';
import musicImg from './music-fest.jpg';
import scienceImg from './science-fair.jpg';
import sportsImg from './sports-day.jpg';

import './EventComponent.css'

function EventComponent () {
  const eventsList = [
    {
        img: techImg,
        title: 'Tech Conference 2024',
        description: 'An annual tech conference with the latest in technology and innovation.'
    },
    {
        img: artImg,
        title: 'Art Exhibition',
        description: 'A display of the finest art from upcoming artists.'
    },
    {
        img: musicImg,
        title: 'Music Fest',
        description: 'A weekend filled with music from top bands and artists.'
    },
    {
        img: scienceImg,
        title: 'Science Fair',
        description: 'A showcase of the latest scientific discoveries and projects by students.'
    },
    {
        img: sportsImg,
        title: 'Sports Day',
        description: 'An exciting day of sports activities and competitions.'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsList.length);
  }, 5000);

  return () => clearInterval(intervalId);
  }, [eventsList.length]);

  return (
      <>
          <h1>Events</h1>
          <div className="events-list">
              <img src={eventsList[currentIndex].img} alt={eventsList[currentIndex].title} />
              <center className="card-title">{eventsList[currentIndex].title}</center>
              <center className="card-description">{eventsList[currentIndex].description}</center>
          </div>
      </>
  )
}

export default EventComponent