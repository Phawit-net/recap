import { color } from '@emotion/react'
import styled from '@emotion/styled'

interface Props extends TextProps {
  children: string
}

interface TextProps {
  fontFamily?: 'Promt' | 'Merriweather' | 'Parisienne' | 'Source Sans Pro'
  color?: string
  h1?: boolean
  h2?: boolean
  title1?: boolean
  sub1?: boolean
  body1?: boolean
  body2?: boolean
  body3?: boolean
  input?: boolean
  bold?: boolean
  semiBold?: boolean
  medium?: boolean
  light?: boolean
  fontSize?: number
  className?: string
  style?: React.CSSProperties
}

const RNText = styled.div<TextProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${(props) => props.theme.color[props.color as keyof color]};
  ${({ h1, h2, title1, sub1, body1, body2, body3, input, fontSize }) => {
    if (h1)
      return `
      font-size: 48px;
      font-weight: 700;
      line-height: 56px;
    `
    if (h2)
      return `
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
    `
    if (title1)
      return `
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
    `
    if (sub1)
      return `
			font-size: 16px;
			font-weight: 400;
			line-height: 24px;
  `
    if (body1)
      return `
			font-size: 14px;
			font-weight: 400;
			line-height: 22px;
  `
    if (body2)
      return `
			font-size: 12px;
			font-weight:400;
			line-height: 20px;
  `
    if (body3)
      return `
			font-size: 10px;
			font-weight: 400;
			line-height: 18px;
  `
    if (input)
      return `
			font-size: 16px;
			font-weight: 600;
			line-height: 18px;
  `
    return `
			font-size: ${fontSize ? fontSize : 16}px;
    `
  }}
  font-weight: ${({ bold, semiBold, medium, light }) => {
    if (bold) return 700
    else if (semiBold) {
      return 600
    } else if (medium) {
      return 400
    } else if (light) {
      return 300
    }
  }};
`

const Typography = ({
  children,
  fontFamily,
  color = 'black',
  h1,
  h2,
  title1,
  sub1,
  body1,
  body2,
  body3,
  input,
  fontSize,
  bold,
  semiBold,
  medium,
  light,
  className,
  style,
}: Props): JSX.Element => {
  return (
    <RNText
      className={className}
      color={color}
      fontFamily={fontFamily}
      h1={h1}
      h2={h2}
      title1={title1}
      sub1={sub1}
      body1={body1}
      body2={body2}
      body3={body3}
      input={input}
      fontSize={fontSize}
      bold={bold}
      semiBold={semiBold}
      medium={medium}
      light={light}
      style={style}
    >
      {children}
    </RNText>
  )
}

export default Typography
