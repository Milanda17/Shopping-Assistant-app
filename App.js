import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

export default class App extends React.Component {

  renderItem = ({ item, index }) => {
    console.log(item);
  
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }

    if(item.value=='x')
    {
      return (
      <View style={styles.itemSelected}>
      {/* <Text style={styles.itemselected}>{item.key}</Text> */}
    </View>
      );
    }
    
    return (
      <View style={styles.item}>
        {/* <Text style={styles.itemText}>{item.key}</Text> */}
      </View>
    );

  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
     
    );
  }


}

