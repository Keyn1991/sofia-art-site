import React from 'react';
import {Gallery} from '../../components/Gallery';
export const images = [
    {
        id: 1,
        title: 'Картинка 1',
        description: 'Опис картинки 1',
        url: require('../../images/IMG_20230420_063717.jpg'),
    },
    {
        id: 2,
        title: 'Картинка 2',
        description: 'Опис картинки 2',
        url: require('../../images/1682015760703.jpg'),
    },
    {
        id: 3,
        title: 'Картинка 3',
        description: 'Опис картинки 3',
        url: require('../../images/1682015744120.jpg'),
    },
    {
        id: 4,
        title: 'Картинка 4',
        description: 'Опис картинки 4',
        url: require('../../images/1682015771796.jpg'),
    },
    {
        id: 5,
        title: 'Картинка 5',
        description: 'Опис картинки 5',
        url: 'https://via.placeholder.com/300x200.png?text=Image+5',
    },
    {
        id: 6,
        title: 'Картинка 6',
        description: 'Опис картинки 6',
        url: 'https://via.placeholder.com/300x200.png?text=Image+6',
    },
    {
        id: 7,
        title: 'Картинка 7',
        description: 'Опис картинки 7',
        url: 'https://via.placeholder.com/300x200.png?text=Image+7',
    },
    {
        id: 8,
        title: 'Картинка 8',
        description: 'Опис картинки 8',
        url: 'https://via.placeholder.com/300x200.png?text=Image+8',
    },

];
const Products = () => {


    return (
        <>
            <h1 className="mb-4">Наші картинки</h1>
            <Gallery images={images} />
        </>
    );
};

export {Products};

