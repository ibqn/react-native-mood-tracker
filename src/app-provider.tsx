import {
  createContext,
  type FunctionComponent,
  type PropsWithChildren,
  useState,
  useEffect,
  type Dispatch,
  type SetStateAction,
  useContext,
} from 'react'
import { getAppData, setAppData } from './app-data'
import { type MoodOptionWithTimestamp } from './types'

type AppContextType = {
  moodList: MoodOptionWithTimestamp[]
  setMoodList: Dispatch<SetStateAction<MoodOptionWithTimestamp[]>>
}

const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([])

  useEffect(() => {
    const fetchAppData = async () => {
      const { moodList } = await getAppData()
      setMoodList(moodList)
    }

    fetchAppData()
  }, [])

  useEffect(() => {
    setAppData({ moodList })
  }, [moodList])

  return (
    <AppContext.Provider value={{ moodList, setMoodList }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext<AppContextType>(AppContext)
