import { useCallback } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useAppContext } from '../app-provider'
import { MoodPicker, MoodItemRow } from '../components/'
import { type MoodOption } from '../types'

export const Home = () => {
  const { moodList, setMoodList } = useAppContext()

  const handleSelectMood = useCallback((mood: MoodOption) => {
    setMoodList(current => [{ mood, timestamp: Date.now() }, ...current])
  }, [])

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
      <ScrollView>
        {moodList.map((item, index) => (
          <MoodItemRow key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
