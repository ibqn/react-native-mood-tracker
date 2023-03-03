import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './home'
import { History } from './history'

const BottomTabs = createBottomTabNavigator()

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
    </BottomTabs.Navigator>
  )
}
