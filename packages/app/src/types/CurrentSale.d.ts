interface CurrentSale {
  tableName: string;
  pax: string;
  subtotal: string;
  cashRounding: string;
  balance: string;
  paid: string;
  customerName: string;
  loyaltyBalance: string;
  items: SaleItem[];
  payments: Payment[];
}
