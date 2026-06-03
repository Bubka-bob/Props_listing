import React from 'react';
import type { ListingItem } from '../types/ListingItem';

interface ListingProps {
  items?: ListingItem[];
}

const Listing: React.FunctionComponent<ListingProps> = ({ items = [] }) => {
  
  const truncateTitle = (title: string) =>
    title.length <= 50 ? title : `${title.slice(0, 50)}…`;

  
  const formatPrice = (currencyCode: string, price: string) => {
    switch (currencyCode) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      case 'GBP':
        return `£${price}`;
      default:
        return `${currencyCode} ${price}`;
    }
  };


  const getStockClass = (quantity: number) => {
    if (quantity < 10) return 'stock-low';
    else if (quantity < 20) return 'stock-medium';
    else return 'stock-high';
  };

  return (
    <div className="product-grid">
      {items.map((item) => (
        <div key={item.listing_id} className="product-card">
          <img
            src={item.MainImage.url_570xN}
            alt={truncateTitle(item.title)}
            className="product-image"
          />
          <div className="product-info">
            <h3 className="product-title">{truncateTitle(item.title)}</h3>
            <div className="price-container">
              <div className="product-price">
                {formatPrice(item.currency_code, item.price)}
              </div>
              <span className={`stock-badge ${getStockClass(item.quantity)}`}>
                {item.quantity === 0 ? 'Out of Stock' : `${item.quantity} left`}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;