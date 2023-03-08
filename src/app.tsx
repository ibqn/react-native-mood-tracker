import { NavigationContainer } from '@react-navigation/native'
import { AppProvider } from './app-provider'
import { BottomTabsNavigator } from './screens'

export const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  )
}
