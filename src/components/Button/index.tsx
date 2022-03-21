import './style.css'
import Typography from '../Typography'

interface Props {
  title: string
  type: 'secondary'
  className?: 'scroll' | undefined
}

const Button = ({ title, type, className }: Props): JSX.Element => {
  return (
    <div className={type}>
      <Typography sub1 color="white" className={className}>
        {title}
      </Typography>
    </div>
  )
}

export default Button
