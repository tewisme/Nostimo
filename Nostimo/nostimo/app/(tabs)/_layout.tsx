import React from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: 'white',        // ← màu icon khi KHÔNG active
        tabBarStyle: {
          backgroundColor: '#E0831F',              // ← nền tab bar
          borderTopColor: '#eee',                // ← viền trên
        },
        tabBarLabelStyle: {
          fontSize: 12,                          // ← chữ dưới icon
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,

        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <SimpleLineIcons name="badge" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}
