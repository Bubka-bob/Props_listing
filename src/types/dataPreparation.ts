// utils/dataPreparation.ts

import type { ListingItem } from '../types/ListingItem';

// Промежуточный тип для описания структуры данных из JSON
export interface RawEtsyData {
  listing_id: number;
  state: string;
  url: string;
  MainImage: { url_570xN: string };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  // прочие поля, если понадобятся
}

// Функция подготовки данных
export function prepareDataForListing(items: RawEtsyData[]): ListingItem[] {
  return items
    .filter((item) => item.state === 'active') // оставляем только активные товары
    .map((item) => ({
      listing_id: item.listing_id,
      url: item.url,
      MainImage: {
        url_570xN: item.MainImage.url_570xN,
      },
      title: item.title,
      currency_code: item.currency_code,
      price: item.price,
      quantity: item.quantity,
    }))
    .filter(Boolean); // уберем пустые элементы
}