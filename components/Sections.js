import React, { useEffect } from 'react';
import { View, Dimensions, StyleSheet,Animated } from 'react-native';

import Headers from './Headers';
import Pages from './Pages';
import { SMALL_HEADER_HEIGHT, MEDIUM_HEADER_HEIGHT } from './Model';

const {
  Value, event, block, call,
} = Animated;

const { width, height } = Dimensions.get('window');



const Sections = (props) => {
  const [state,useState] = useState({
      x:null,
      y:null,
      onScrollX:null,
      onScrollY:null
  })  
  const {x,y,onScrollX,onScrollY} = state;
  
  const onScroll = (contentOffset: { x?: Value, y?: Value }) => event(
    [
      {
        nativeEvent: {
          contentOffset,
        },
      },
    ],
    { useNativeDriver: true },
  );

  useEffect(() => {
    let x = new Value(0);
    let y = new Value(0);
    let onScrollX = onScroll({ x });
    let onScrollY = onScroll({ y });
    setState({x,y,onScrollX,onScrollY});
  }, [])

    const { sections } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Headers {...{ sections, y, x }} />
          <Pages {...{ sections, y, x }} />
        </View>
        <Animated.ScrollView
          style={StyleSheet.absoluteFill}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={onScrollY}
          bounces={false}
          contentContainerStyle={{ height: height + height - SMALL_HEADER_HEIGHT }}
          vertical
        >
          <Animated.ScrollView
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={onScrollX}
            bounces={false}
            contentContainerStyle={{ width: width * sections.length }}
            snapToInterval={width}
            decelerationRate="fast"
            horizontal
          />
        </Animated.ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Sections;