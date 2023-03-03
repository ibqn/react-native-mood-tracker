import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { MoodOptionType } from '../types'

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
]

export const MoodPicker = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>()

  return (
    <View style={styles.moodList}>
      {moodOptions.map((option, index) => {
        const { emoji, description } = option

        return (
          <View key={index}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              style={[
                styles.moodItem,
                emoji === selectedMood?.emoji && styles.selectedMoodItem,
              ]}>
              <Text style={styles.moodText}>{emoji}</Text>
            </Pressable>
            {selectedMood?.emoji === emoji && (
              <Text style={styles.descriptionText}>{description}</Text>
            )}
          </View>
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
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: '#454C73',
    borderColor: '#fff',
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
})
