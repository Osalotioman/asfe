import { View, Platform, StyleSheet } from 'react-native';
import { useLinkBuilder } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function MyTabBar({ state, descriptors, navigation}) {
    const { buildHref } = useLinkBuilder();
    const icons = {
      events: (props) => <FontAwesome6 name="rectangle-list" size={32} color="#ddd" {...props} />,
      timetable: (props) => <MaterialCommunityIcons name="timetable" size={32} color="#ddd" {...props} />,
      metrics: (props) => <MaterialIcons name="insert-chart-outlined" size={32} color="#ddd" {...props} />,
      profile: (props) => <MaterialCommunityIcons name="account-circle-outline" size={32} color="#ddd" {...props} />,
    }

    return (
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <PlatformPressable
              key={route.name}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
            >
              { icons[route.name]({ color: isFocused ? '#007bff' : '#ddd' }) }
              <Text style={{ color: isFocused ? '#007bff' : '#ddd' }}>
                {label}
              </Text>
            </PlatformPressable>
          );
        })}
      </View>
    );
}


const styles = StyleSheet.create({
    tabBar: {
      flexDirection: 'row',
      backgroundColor: '#333',
      paddingVertical: 18,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: '#444',
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'inter',
      fontSize: 10,
      gap: 6,
    },
});