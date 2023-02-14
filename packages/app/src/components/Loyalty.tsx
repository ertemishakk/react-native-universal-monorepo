import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { setGiftcard } from "../reducers/giftcard";
import { setMember } from "../reducers/member";
import { useAppDispatch, useAppSelector } from "../redux-app/hooks";
const Loyalty = () => {
  const giftcard = useAppSelector((state) => state.giftcard);
  const member = useAppSelector((state) => state.member);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setMember({
        memberName: "Ishak Ertem",
        loyaltyBalance: "100",
        groupName: "BLUE",
        cardExpiry: "01/24",
        numberOfVisits: 100,
        eligibleFreeGift: true,
      })
    );

    dispatch(
      setGiftcard({
        memberName: "Ishak",
        cardName: "Ishaks card",
        cardExpiry: "12/25",
        cardBalance: "123",
      })
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={[{ fontSize: 25 }, styles.defaultText]}>
          {member?.memberName || giftcard?.memberName}
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 5 }}>
        {giftcard && (
          <Text style={[styles.defaultText, { marginTop: 5, flex: 1 }]}>
            Giftcard Balance - {giftcard.cardBalance}
          </Text>
        )}
        <Text style={[styles.defaultText]}>
          {member?.loyaltyBalance} Points
        </Text>
      </View>
    </View>
  );
};

export default Loyalty;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  defaultText: {
    fontWeight: "bold",
    color: "white",
  },
});
