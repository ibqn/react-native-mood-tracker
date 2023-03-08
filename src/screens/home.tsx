import { useCallback } from 'react'
import { StyleSheet, ImageBackground, Image } from 'react-native'
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
    <ImageBackground source={assets.background} style={styles.container}>
      <Image
        style={styles.image}
        source={assets.butterflies}
        resizeMode="contain"
      />
      <MoodPicker onSelect={handleSelectMood} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
  },
})
