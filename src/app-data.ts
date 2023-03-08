import AsyncStorage from '@react-native-async-storage/async-storage'
import { MoodOptionWithTimestamp } from './types'

export type AppData = {
  moodList: MoodOptionWithTimestamp[]
}

const dataKey = '@app_data'

export const setAppData = async (appData: AppData) => {
  try {
    const jsonValue = JSON.stringify(appData)
    await AsyncStorage.setItem(dataKey, jsonValue)
  } catch (error) {}
}

export const getAppData = async (): Promise<AppData> => {
  try {
    const data = await AsyncStorage.getItem(dataKey)
    if (data !== null) {
      const appDataValue = JSON.parse(data) as AppData
      return appDataValue
    }
  } catch (error) {}

  return { moodList: [] }
}
