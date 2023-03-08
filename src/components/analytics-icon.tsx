import { FunctionComponent } from 'react'
import { Svg, Path } from 'react-native-svg'

type AnalyticsIconProps = {
  color?: string
  size?: number
}

export const AnalyticsIcon: FunctionComponent<AnalyticsIconProps> = ({
  color = 'teal',
  size = 40,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 512 512" fill={color}>
      <Path d="M501.333 490.667H10.667C4.779 490.667 0 495.445 0 501.333 0 507.221 4.779 512 10.667 512h490.667c5.888 0 10.667-4.779 10.667-10.667-.001-5.888-4.78-10.666-10.668-10.666z" />
      <Path d="M96 362.667H32c-5.888 0-10.667 4.779-10.667 10.667v128C21.333 507.221 26.112 512 32 512h64c5.888 0 10.667-4.779 10.667-10.667v-128c0-5.888-4.779-10.666-10.667-10.666zm-10.667 128H42.667V384h42.667v106.667zM224 256h-64c-5.888 0-10.667 4.779-10.667 10.667v234.667c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667V266.667c0-5.888-4.779-10.667-10.667-10.667zm-10.667 234.667h-42.667V277.333h42.667v213.334zM352 298.667h-64c-5.888 0-10.667 4.779-10.667 10.667v192c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667v-192c0-5.889-4.779-10.667-10.667-10.667zm-10.667 192h-42.667V320h42.667v170.667zM480 170.667h-64c-5.888 0-10.667 4.779-10.667 10.667v320c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667v-320c0-5.889-4.779-10.667-10.667-10.667zm-10.667 320h-42.667V192h42.667v298.667zM64 192c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C106.667 211.136 87.531 192 64 192zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333C85.333 246.421 75.776 256 64 256zM192 85.333c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667s42.667-19.136 42.667-42.667c0-23.531-19.136-42.667-42.667-42.667zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333c0 11.755-9.557 21.333-21.333 21.333zM320 128c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C362.667 147.136 343.531 128 320 128zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333c0 11.754-9.557 21.333-21.333 21.333zM448 0c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C490.667 19.136 471.531 0 448 0zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333C469.333 54.421 459.776 64 448 64z" />
      <Path d="M432.939 57.728c-4.16-4.16-10.923-4.16-15.083 0l-82.773 82.773c-4.16 4.16-4.16 10.923 0 15.083a10.716 10.716 0 007.552 3.115c2.709 0 5.44-1.024 7.531-3.115l82.773-82.773c4.16-4.16 4.16-10.923 0-15.083zM294.208 146.048l-68.523-19.541c-5.739-1.664-11.563 1.664-13.163 7.339-1.621 5.675 1.664 11.563 7.317 13.184l68.523 19.541a10.675 10.675 0 0013.184-7.339c1.622-5.653-1.663-11.563-7.338-13.184zM175.36 141.291c-3.669-4.608-10.368-5.355-14.976-1.707l-80.427 64.128c-4.608 3.691-5.376 10.389-1.685 14.997a10.658 10.658 0 008.341 4.011c2.325 0 4.672-.768 6.635-2.304l80.427-64.128c4.608-3.691 5.376-10.389 1.685-14.997z" />
    </Svg>
  )
}
