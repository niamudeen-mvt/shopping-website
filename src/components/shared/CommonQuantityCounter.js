import React, { useState } from 'react';

const QuantityIncrementer = () => {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const commonStyles = {
        flex: 1,
        display: 'grid',
        placeItems: 'center',
    };
    return (
        <div
            style={{
                width: '111px',
                height: '36px',
                border: '1px solid #D9D9D9',
                display: 'flex',
                boxSizing: 'border-box',
                borderRadius: '6px',
            }}
        >
            <div style={commonStyles} onClick={decreaseQuantity}>-</div>
            <div style={commonStyles}>{quantity < 10 ? `0${quantity}` : quantity}</div>
            <div style={commonStyles} onClick={increaseQuantity}>+</div>
        </div>
    );
};

export default QuantityIncrementer;
