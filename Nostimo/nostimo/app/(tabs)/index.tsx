import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Nostimo</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* IMAGE PLACEHOLDER */}
        <View style={styles.imagePlaceholder}>
          <Text style={{ color: '#999' }}>Ảnh món ăn (cậu thêm Image sau)</Text>
        </View>

        {/* INFO ROW */}
        <View style={styles.infoRow}>
          <View>
            <Text style={styles.name}>Bánh cookie</Text>
            <Text style={styles.sub}>Công thức</Text>
          </View>

          <View style={styles.rating}>
            <Text style={styles.star}>⭐ 5.0</Text>
            <Text style={styles.review}>23 đánh giá</Text>
          </View>
        </View>

        {/* META */}
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Thời gian</Text>
            <Text style={styles.metaValue}>15 phút</Text>
          </View>

          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Khẩu phần</Text>
            <Text style={styles.metaValue}>2 người</Text>
          </View>

          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Độ khó</Text>
            <Text style={styles.metaValue}>Trung bình</Text>
          </View>
        </View>

        {/* AUTHOR */}
        <View style={styles.author}>
          <View style={styles.avatar} />
          <Text style={styles.authorName}>vtp_nuu</Text>
        </View>

        {/* SPACE */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    height: 90,
    backgroundColor: 'rgba(255,226,185,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 56,
    color: '#874609',
    fontFamily: 'System',
  },

  imagePlaceholder: {
    height: 300,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },

  name: {
    fontSize: 20,
    fontWeight: '500',
  },

  sub: {
    fontSize: 14,
    color: '#666',
  },

  rating: {
    alignItems: 'flex-end',
  },

  star: {
    fontSize: 14,
  },

  review: {
    fontSize: 12,
    color: '#666',
  },

  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
  },

  metaItem: {
    alignItems: 'center',
  },

  metaLabel: {
    fontSize: 12,
    color: '#777',
  },

  metaValue: {
    fontSize: 13,
    marginTop: 4,
  },

  author: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#ccc',
    marginRight: 10,
  },

  authorName: {
    fontSize: 14,
  },
});
