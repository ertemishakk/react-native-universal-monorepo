interface PromoPlayer {
  config: ConfigState;
  mode: string;
  member: Member | null;
  adsContainer: null | Layout;
  giftcard: GiftCard | null;
  currentSale: CurrentSale | null;
}
