import React, { Component } from 'react'

export const Shop = (props) => {
    return (
        <React.Fragment>
            <p className="h3 pb-1">
                Shop
            </p>
            <hr />

            <div class="card-deck">

                {props.items.slice(1).map(item => (

                    <div class="card mt-3">
                        <div class="card-header bg-light text-dark h6">
                            {item.name} <span className="float-right">{item.metadata.price}</span>
                        </div>
                        <img class="card-img-top" src={item.images[0]} alt="Image of product" />
                        <div class="card-body bg-white">
                            <a className="btn btn-success w-100" href=".">Add to card</a>
                            <p class="card-text mt-2">{item.description}</p>
                        </div>
                    </div>

                ))}

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
