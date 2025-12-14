import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Profile</Text>

      <Pressable
        onPress={() => router.replace('/login')}
        style={{
          backgroundColor: '#EF4444',
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: '#fff' }}>Logout</Text>
      </Pressable>
    </View>
  );
}
