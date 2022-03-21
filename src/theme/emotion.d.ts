import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: color
  }

  interface color {
    white: string
    black: string
    black90: string
    grey: string
    swipe1: string
    swipe2: string
    swipe3: string
    swipe4: string
    swipe5: string
    swipe6: string
  }
}
