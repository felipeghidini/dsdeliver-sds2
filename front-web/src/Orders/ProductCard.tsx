import React from 'react';
import { Product } from './Types';
import { formatPrice } from './helpers';


type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}



function ProductCard({ product, onSelectProduct, isSelected }: Props) {
    return (
        <div 
        className={`order-card-container ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelectProduct(product)}
        >
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img
            src={product.imageUri}
            className="order-card-image"
            alt={product.name} 
             />

            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
            </div>
            <p>
            {product.description}
            </p>
        </div>
     
    )
}

export default ProductCard;