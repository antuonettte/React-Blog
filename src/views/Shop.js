import React, { Component, useContext } from 'react'
import { Product } from '../components/Product';
import { DataContext } from '../contexts/DataProvider';

export const Shop = (props) => {

    const { products } = useContext(DataContext);


    return (
        <React.Fragment>
            <p className="h3 pb-1">
                Shop
            </p>
            <hr />

            <div className="card-deck">
                                                        {/* Key is a predefined value react components look for when they are duplicated */}
                {products.map(item => <Product item={ item } key={ item.id } />)}

            </div>

            {/* <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src="holder.js/100x180/" alt=""/>
                        <div class="card-body">
                            <h4 class="card-title">Title</h4>
                            <p class="card-text">Text</p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="holder.js/100x180/" alt=""/>
                        <div class="card-body">
                            <h4 class="card-title">Title</h4>
                            <p class="card-text">Text</p>
                        </div>
                    </div>
                </div> */}
        </React.Fragment>
    )
}
