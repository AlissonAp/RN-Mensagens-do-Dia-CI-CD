import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Lista({mensagens}) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Mensagens já lidas pelo usuário</Text>
      {mensagens.map(el => {
        return (
          <Text key={el} style={styles.sectionDescription}>
            {el}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'gray',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: 'gray',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
