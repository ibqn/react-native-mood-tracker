import {NavigationContainer} from '@react-navigation/native'
import {BottomTabsNavigator} from './screens'

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  )
}
