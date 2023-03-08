import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './home'
import { History } from './history'
import { Analytics } from './analytics'
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components'

const BottomTabs = createBottomTabNavigator()

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />
          }

          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />
          }

          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size} />
          }

          return null
        },
        tabBarShowLabel: false,
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's Mood" }}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{ title: 'Past Moods' }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Fancy Charts' }}
      />
    </BottomTabs.Navigator>
  )
}
