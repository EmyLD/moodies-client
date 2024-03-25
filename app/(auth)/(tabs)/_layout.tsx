import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook, faUser, faRainbow } from '@fortawesome/free-solid-svg-icons';
import { useGlobalSearchParams } from 'expo-router';

export default function TabLayout() {
  const { id } = useGlobalSearchParams();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#DD6677',
        tabBarLabelStyle: {
          fontFamily: 'Nunito',
          fontSize: 14,
        },
      }}>
      <Tabs.Screen
        name="[diary]"
        options={{
          title: 'Diary',
          href: {
            pathname: '/[diary]',
            params: {
              userId: id,
            },
          },
          headerStyle: { backgroundColor: '#DD6677' },
          headerTitle: 'My diary',
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faBook} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faUser} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(feels)"
        options={{
          title: 'Emotions',
          headerTitle: 'My emotions curve',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#DD6677' },
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faRainbow} color={color} />,
        }}
      />
    </Tabs>
  );
}
