import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getCurrentCost} from '../../usecases/getCurrentCost';
import Header from '../components/Header';
import Section from '../components/Section';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const currentCost = getCurrentCost(new Date());
  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={[backgroundStyle, styles.principalContent]}>
        <Header title="light cost?" subtitle={currentCost} />
      </View>
      <View
        style={[
          styles.infoContent,
          {
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          },
        ]}>
        <Section title="Next feature">
          Here the time of the{' '}
          <Text style={styles.highlight}>next price change</Text> in the light
          will be displayed
        </Section>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  principalContent: {
    flex: 0.8,
  },
  infoContent: {
    flex: 0.2,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
