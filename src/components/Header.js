import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCart } from '../store/slices/cartSlice';
import Cart from './Cart';


const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();


    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };


    const cartQuantity = cartItems.length;


    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="navbar">
                        <Link to='/'>
                        <h4>Redux Shopping Cart</h4>
                        </Link>
                        <div className="nav_menu">
                            <div
                                title="Cart"
                                className="cart_icon"
                                onClick={() => handleOpenCart(true)}
                            >
                                <Cart/>
                                <img src="/images/bag-icon.svg" alt="bag-icon" />
                                <span className="badge">{cartQuantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;