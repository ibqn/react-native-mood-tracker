import { ScrollView } from 'react-native'
import { useAppContext } from '../app-provider'
import { MoodItemRow } from '../components'

export const History = () => {
  const { moodList } = useAppContext()

  return (
    <ScrollView>
      {moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </ScrollView>
  )
}
