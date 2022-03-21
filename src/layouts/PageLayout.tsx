interface Props {
  children: JSX.Element | JSX.Element[]
}

const PageLayout = ({ children }: Props): JSX.Element => {
  return <>{children}</>
}

export default PageLayout
