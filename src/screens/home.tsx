import { useCallback, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { MoodPicker } from '../components/'
import { type MoodOption, type MoodOptionWithTimestamp } from '../types'

export const Home = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([])

  const handleSelectMood = useCallback((mood: MoodOption) => {
    setMoodList(current => [{ mood, timestamp: Date.now() }, ...current])
  }, [])

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
      {moodList.map((item, index) => {
        const { timestamp, mood } = item
        const { emoji } = mood

        return (
          <Text key={index}>
            {emoji} {new Date(timestamp).toString()}
          </Text>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
