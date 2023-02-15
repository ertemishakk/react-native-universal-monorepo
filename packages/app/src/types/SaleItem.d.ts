interface SaleItem {
  qty: number;
  level: number;
  itemName: string;
  price: string;
  total: string;
  style: {
    qty: string;
    itemName: string;
    price: string;
    total: string;
  };
}
