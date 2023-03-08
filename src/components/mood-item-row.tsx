import { View, Text, StyleSheet } from 'react-native'
import { type MoodOptionWithTimestamp } from '../types'
import { type FunctionComponent } from 'react'
import format from 'date-fns/format'
import { theme } from '../theme'

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp
}

export const MoodItemRow: FunctionComponent<MoodItemRowProps> = ({ item }) => {
  const { mood, timestamp } = item
  const { emoji, description } = mood

  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{emoji}</Text>
        <Text style={styles.moodDescription}>{description}</Text>
      </View>

      <Text style={styles.moodDate}>
        {format(new Date(timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  moodItem: {
    backgroundColor: theme.colorWhite,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDate: {
    textAlign: 'center',
    color: theme.colorLavender,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDescription: {
    fontSize: 18,
    color: theme.colorPurple,
    fontWeight: 'bold',
  },
})
