import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Card from '../../components/common/Card';

const CardList = ({
  cardsData,
}: {
  cardsData: Array<{
    imageSource: string;
    rating: number;
    title: string;
    location: string;
    rooms: number;
    area: number;
    price: number;
  }>;
}) => {
  function formatAmount(amount: number) {
    let parts = amount.toString().split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return parts.join('.');
  }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.cardListContainer}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageSource={card.imageSource}
            rating={card.rating}
            title={card.title}
            location={card.location}
            rooms={card.rooms}
            area={card.area}
            price={formatAmount(card.price)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardListContainer: {
    flexDirection: 'row',
  },
});

export default CardList;
