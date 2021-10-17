import React, { useRef } from 'react'

export const CartItem = (productInfo) => {
    const qty = useRef();
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-2 text-center">
                <img className="img-responsive" src={productInfo.data.images[0]} width="120" height="80" />
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                <h4 className="product-name"><strong>{ productInfo.name }</strong></h4>
                <h4>
                    <small>{productInfo.data.description}</small>
                </h4>
            </div>
            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: "5px" }}>
                    <h6><strong>${productInfo.data.metadata.price} <span className="text-muted">x</span>{}</strong></h6>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                    <div className="quantity">
                        <input type="number" step="1" max="99" ref={qty} defaultValue={productInfo.data.quantity} min="1" />
                    </div>
                </div>
                <div className="col-2 col-sm-2 col-md-2 text-right">
                    <button type="button" className="btn btn-outline-danger btn-xs">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
