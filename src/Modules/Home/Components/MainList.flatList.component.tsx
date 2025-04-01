import React from 'react';
import { StyleSheet, Animated, Text, Dimensions } from 'react-native';

interface MainListProps {
  data: any[];
  renderItem: ({ item, index }: { item: any, index: number }) => React.ReactElement;
  itemSize: number;
  dimensions: {
    width: number;
    height: number;
  };
}

// Fix the component declaration syntax
export const MainList: React.FC<MainListProps> = React.memo(({
  data,
  renderItem,
  itemSize,
  dimensions,

}) => {

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (

    <Animated.FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{ alignItems: 'center' }}
      snapToInterval={itemSize}
      decelerationRate={0}
      bounces={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true },
      )}
      scrollEventThrottle={16}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {

        const inputRange = [
          (index - 1) * itemSize,
          index * itemSize,
          (index + 1) * itemSize,
        ]
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.75, 1, 0.75],
          extrapolate: 'extend',
        });

        const styles = StyleSheet.create({
          container: {
            marginLeft: index == 0 ? ((dimensions.width-20) - itemSize) / 2 : 0,
            marginRight: index == data.length - 1 ? (dimensions.width - itemSize) / 2 : 0,
          },
        });

        return (
          <Animated.View style={[{ transform: [{ scale }] }, styles.container]}>
            {renderItem({ item, index })}
          </Animated.View>
        );
      }}
    />



  );
});


