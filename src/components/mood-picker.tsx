import { View, Text, StyleSheet } from 'react-native'

const moodOptions = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
]

export const MoodPicker = () => {
  return (
    <View style={styles.moodList}>
      {moodOptions.map((option, index) => {
        const { emoji, description } = option
        return (
          <Text key={index} style={styles.moodText}>
            {emoji}
          </Text>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
})
