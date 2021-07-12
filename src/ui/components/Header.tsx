import React from 'react';
import {Text, useColorScheme, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header: React.FC<{title: string}> = ({title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.containerTitle}>
      <Text
        style={[
          styles.headerTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 64,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '600',
  },
});

export default Header;
