

import Listing from './components/Listing';
import data from './etsy.json'; 
import type { ListingItem } from "./types/ListingItem";

const validListings: ListingItem[] = data
  .filter((item) => {
    return (
      item.state === "active" &&
      typeof item.title === "string" &&
      item.title.trim() !== "" &&
      item.MainImage?.url_570xN
    );
  })
  .map((item) => {
    const imageUrl = item.MainImage?.url_570xN || "";
    return {
      listing_id: Number(item.listing_id),
      url: String(item.url),
      MainImage: {
        url_570xN: String(imageUrl),
      },
      title: String(item.title).trim(),
      currency_code: String(item.currency_code).trim(),
      price: String(item.price).trim(),
      quantity: Number(item.quantity),
      state: "active",
    };
  });

const App = () => {
  return (
    <div className="container">
      <Listing items={validListings} />
    </div>
  );
};

export default App;