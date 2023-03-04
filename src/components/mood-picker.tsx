import { type FunctionComponent, useState, useCallback } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { theme } from '../theme'
import { type MoodOption } from '../types'

const moodOptions: MoodOption[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
]

type MoodPickerProps = {
  onSelect: (mood: MoodOption) => void
}

export const MoodPicker: FunctionComponent<MoodPickerProps> = ({
  onSelect,
}) => {
  const [selectedMood, setSelectedMood] = useState<MoodOption>()

  const handleSelect = useCallback(() => {
    if (selectedMood) {
      onSelect(selectedMood)
      setSelectedMood(undefined)
    }
  }, [onSelect, selectedMood])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
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
      <Pressable style={styles.button} onPress={handleSelect}>
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    height: 230,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  heading: {
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    color: theme.colorWhite,
    fontFamily: theme.fontFamilyBold,
  },
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
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontFamily: theme.fontFamilyBold,
  },
})
