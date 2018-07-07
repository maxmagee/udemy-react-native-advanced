import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

import Deck from './src/Deck';

import CARD_DATA from './src/data/cards';

export default class App extends React.Component {
  renderCard = item => {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>I can customize the card further</Text>
        <Button icon={{ name: 'code' }} backgroundColor="#03A9F4" title="View Now!" />
      </Card>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Deck data={CARD_DATA} renderCard={this.renderCard} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
