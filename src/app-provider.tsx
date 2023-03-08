import {
  createContext,
  type FunctionComponent,
  type PropsWithChildren,
  useState,
  type Dispatch,
  type SetStateAction,
  useContext,
} from 'react'
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

  return (
    <AppContext.Provider value={{ moodList, setMoodList }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext<AppContextType>(AppContext)
