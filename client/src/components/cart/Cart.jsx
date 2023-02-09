import React from 'react'
import './cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data = [
        {
            id: 0,
            img: "https://source.unsplash.com/xw5cQNbky5A",
            img2: 'https://source.unsplash.com/YsiSAp3ccvk',
            title: "title",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            isNew: true,
            oldPrice: 19,
            price: 12,


        },
        {
            id: 1,
            img: "https://source.unsplash.com/2UTk-Nip5aM",
            title: "title",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            isNew: true,
            oldPrice: 19,
            price: 12,


        },
    ]
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}

export default Cart