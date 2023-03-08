import { useCallback } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { useAppContext } from '../app-provider'
import { assets } from '../assets'
import { MoodPicker } from '../components/'
import { type MoodOption } from '../types'

export const Home = () => {
  const { setMoodList } = useAppContext()

  const handleSelectMood = useCallback((mood: MoodOption) => {
    setMoodList(current => [{ mood, timestamp: Date.now() }, ...current])
  }, [])

  return (
    <View style={styles.container}>
      <Image source={assets.butterflies} resizeMode="contain" />
      <MoodPicker onSelect={handleSelectMood} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
