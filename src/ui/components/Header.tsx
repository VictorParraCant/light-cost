import React from 'react';
import {Text, useColorScheme, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header: React.FC<{title: string; subtitle: string}> = ({
  title,
  subtitle,
}) => {
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
      <Text
        style={[
          styles.headerSubtitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    marginBottom: 12,
    fontWeight: '600',
  },
  headerSubtitle: {
    fontSize: 24,
  },
});

export default Header;
