import React from 'react'
import './list.scss'
import Card from '../card/Card'

const List = () => {
    const data = [
        {
            id: 1,
            img: "https://source.unsplash.com/xw5cQNbky5A",
            img2: 'https://source.unsplash.com/YsiSAp3ccvk',
            title: "title",
            isNew: true,
            oldPrice: 19,
            price: 12,


        },
        {
            id: 2,
            img: "https://source.unsplash.com/2UTk-Nip5aM",
            title: "title",
            isNew: true,
            oldPrice: 19,
            price: 12,


        },
        {
            id: 3,
            img: "https://source.unsplash.com/3MvlGhagq4E",
            title: "title",
            isNew: true,
            oldPrice: 19,
            price: 12,


        },
        {
            id: 4,
            img: "https://source.unsplash.com/yQTCPf-AnUY",
            title: "title",
            isNew: true,
            oldPrice: 19,
            price: 12,


        },


    ];
    return (
        <div className='list'>{data?.map(item => (<Card item={item} key={item.id} />))}</div>
    )
}

export default List