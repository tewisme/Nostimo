import { View, Text, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      {/* Status bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>16:04</Text>
        <Text>📶 🔋</Text>
      </View>

      {/* Title */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Nostimo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '0.1%',
    backgroundColor: 'hsl(30 100% 95%)',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  time: {
    fontSize: 12,
    color: 'rgb(57, 23, 19)',
  },
  titleWrapper: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 48,
    color: 'rgb(135, 70, 9)',
    fontFamily: 'Jomhuria',
  },
});
