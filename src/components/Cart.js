import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'
import { CartItem } from './CartItem';

export const Cart = () => {

    const { cart, getCart } = useContext(DataContext);

    const createChectout = async( e ) =>{
        e.preventDefault();

        const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PK_TEST);

        let newLineItems= [];

        Object.values( cart.items ).forEach( item =>{
            let newItem = {
                'price': item.id,
                // 'price':  {
                //     'currency': 'usd',
                //     'product_data':{
                //         'name': item.name,
                //         'images': item.images[0]
                //     },
                //     'unit_amount': parseInt(parseFloat(item.metadata.price) * 100),
                // },
                'quantity': item.quantity,
            }
            newLineItems.push(newItem)
        })

        stripe.redirectToCheckout({
            lineItems: newLineItems,
            mode: 'payment',
            successUrl: 'http://lcoalhost:3000/shop/products?clear_cart=1',
            cancelUrl: 'http://localhost:3000/shop/cart'
        })
        .then( result => result.error? console.error(result.error.message) : null)
    }

    return (
        <div>
            <h3>Cart</h3>
            <hr />
            <div className="card shopping-cart">
                <div className="card-header bg-dark text-light">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    Shopping Cart
                    <a href="" className="btn btn-outline-info btn-sm pull-right">Continue Shopping</a>
                    <div className="clearfix"></div>
                </div>
                <div className="card-body">
                    {/* <!-- PRODUCTS --> */}
                    { Object.values( cart.items ).map( productInfo => <CartItem data = {productInfo} key={productInfo.id} />
                        
                     )}
                    <hr />
                    {/* <!-- END PRODUCTS --> */}
                </div>
                <div className="card-footer">
                    <div className="text-right">
                        <div className="cart-totals">
                            Subtotal: <b>${ cart.subtotal }</b>
                        </div>
                        <div className="cart-totals">
                            Tax: <b>${ cart.taxes }</b>
                        </div>
                        <div className="cart-totals">
                            Grand total: <b>${ cart.grandtotal }</b>
                        </div>
                    </div>
                    <div className="pull-right" style={{ margin: "10px" }}>
                        <form id="checkout-form" action="" method="POST">
                            <input onClick={e => createChectout(e) } type="submit" className="btn btn-success pull-right" value="Checkout" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
