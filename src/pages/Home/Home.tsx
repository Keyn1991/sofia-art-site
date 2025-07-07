import React from 'react';
import { Gallery } from '../../components/Gallery/Gallery';
import { useLocation } from 'react-router-dom';

const images = [
  {
    id: 1,
    title: 'painting 1',
    description: 'Lorem Ipsum is simply dummy text...',
    url: '/images/IMG_20230420_063717.jpg',
  },
  {
    id: 2,
    title: 'painting 2',
    description: 'Lorem Ipsum is simply dummy text...',
    url: '/images/1682015760703.jpg',
  },
  {
    id: 3,
    title: 'painting 3',
    description: 'Lorem Ipsum is simply dummy text...',
    url: '/images/1682015744120.jpg',
  },
  {
    id: 4,
    title: 'painting 4',
    description: 'Lorem Ipsum is simply dummy text...',
    url: '/images/1682015771796.jpg',
  },
  {
    id: 5,
    title: 'painting 5',
    description: 'Lorem Ipsum is simply dummy text...',
    url: '/images/Carlik.png',
  },
  {
    id: 6,
    title: 'painting 6',
    description: 'Lorem Ipsum is simply dummy text...',
    url: '/images/nat.png',
  },
  {
    id: 7,
    title: 'painting 7',
    description: 'Lorem Ipsum is simply dummy text...',
    url: '/images/morze.png',
  },
  {
    id: 8,
    title: 'painting 8',
    description: 'Lorem Ipsum is simply dummy text...',
    url: '/images/feja.png',
  },
];

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <h1 className="mb-4 text-center">Our paintings</h1>
      <Gallery key={location.search} images={images} />
    </div>
  );
};

export { Home };
