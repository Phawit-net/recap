import styled from '@emotion/styled'
import airpod from '../../images/airpod.png'
import watch from '../../images/watch.png'
import iphone from '../../images/iphone.png'
import ipad from '../../images/ipad.png'
import mac from '../../images/mac.png'
import mouse from '../../images/mouse.png'
import Device from '../../components/Device'
import LiquidSwipe from '../../components/LiquidSwipe'

const MOCKDATA = [
  {
    id: 'airpod',
    title: 'Apple Airpods',
    subtitle: 'Magic runs in the family.',
    caption:
      'AirPods deliver an unparalleled listening experience with all your devices. Every model connects effortlessly and packs rich, high-quality sound into an innovative wireless design.',
    buttonText: "What's New",
    buttonLink: 'https://www.apple.com/in/airpods/',
    image: airpod,
    color: 'swipe1',
    bg: 'swipe6',
  },
  {
    id: 'watch',
    title: 'Apple Watch SE',
    subtitle: 'Heavy on features. Light in price.',
    caption:
      'An expansive Retina display so you can see more at a glance. Advanced sensors to track all the ways you move. Powerful features to keep you healthy and safe. Apple Watch SE is a lot of watch.',
    buttonText: "What's New",
    buttonLink: 'https://www.apple.com/in/apple-watch-se/',
    image: watch,
    color: 'swipe2',
    bg: 'swipe1',
  },
  {
    id: 'iphone',
    title: 'Apple iPhone 12',
    subtitle: 'Blast past fast.',
    caption:
      'A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
    buttonText: "What's New",
    buttonLink: 'https://www.apple.com/in/iphone-12/',
    image: iphone,
    color: 'swipe3',
    bg: 'swipe2',
  },
  {
    id: 'ipad',
    title: 'Apple iPad Pro',
    subtitle: 'Magical piece of glass.',
    caption:
      'It’s so fast most PC laptops can’t catch up. It has pro cameras that can transform reality. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.',
    buttonText: "What's New",
    buttonLink: 'https://www.apple.com/in/ipad-pro/',
    image: ipad,
    color: 'swipe4',
    bg: 'swipe3',
  },
  {
    id: 'mac',
    title: 'MacBook Pro',
    subtitle: 'Small chip. Giant leap.',
    caption:
      'The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance. Up to 5x the graphics speed. Our most advanced Neural Engine for up to 11x faster machine learning.',
    buttonText: "What's New",
    buttonLink: 'https://www.apple.com/in/macbook-pro-13/',
    image: mac,
    color: 'swipe5',
    bg: 'swipe4',
  },
  {
    id: 'mouse',
    title: 'Magic Mouse',
    subtitle: 'Small size. Amazing outcome.',
    caption:
      'Magic Mouse 2 is completely rechargeable, so you’ll eliminate the use of traditional batteries. It’s lighter, has fewer moving parts thanks to its built-in battery and continuous bottom shell.',
    buttonText: "What's New",
    buttonLink:
      'https://www.apple.com/in/shop/product/MLA02ZM/A/magic-mouse-2-silver',
    image: mouse,
    color: 'swipe6',
    bg: 'swipe5',
  },
]

const SwipePage = (): JSX.Element => {
  const componentsToRender = []
  const backgroundColors = []
  for (let i = 0; i < MOCKDATA.length; i++) {
    componentsToRender.push(<Device allData={MOCKDATA[i]} key={i} />)
    backgroundColors.push(MOCKDATA[i].bg)
  }

  return (
    <LiquidSwipe components={componentsToRender} colors={backgroundColors} />
  )
}

export default SwipePage
