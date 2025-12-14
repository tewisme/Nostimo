import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, marginBottom: 20 }}>Login</Text>

      <Pressable
        onPress={() => router.replace('/(tabs)')}
        style={{
          backgroundColor: '#F59E0B',
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>Đăng nhập</Text>
      </Pressable>
    </View>
  );
}
