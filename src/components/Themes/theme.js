import theme from 'styled-theming'
import { colors } from '../Helpers/colors'

/**
 * Default
 */
export const backgroundColor = theme('mode', {
    light: `${colors.lightGray}`,
    dark: `${colors.black}`
});

export const textColor = theme('mode', {
    light: `${colors.darkGray}`,
    dark: `${colors.white}`
});

export const invertColor = theme('mode', {
    light: `${colors.white}`,
    dark: `${colors.darkGray}`
});

/**
 * Button
 */
export const buttonBackgroundColor = theme('mode', {
    light: `${colors.black}`,
    dark: `${colors.white}`
});

export const buttonTextColor = theme('mode', {
    light: `${colors.white}`,
    dark: `${colors.black}`
});

/**
 * Card
 */
export const cardBackgroundColor = theme('mode', {
    light: `${colors.white}`,
    dark: `${colors.black}`
})