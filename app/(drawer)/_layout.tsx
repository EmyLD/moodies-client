import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import Drawer from 'expo-router/drawer';

const _layout = () => {
  return (
    <Drawer
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: colorTokens.light.green.green6,
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: { marginLeft: -10 },
      }}>
      <Drawer.Screen
        name="(profil)"
        options={{
          title: 'User Profil',
          headerShown: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="(diary)"
        options={{
          title: 'My diary',
          headerShown: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="document-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
};

export default _layout;
