type Props = {
  width: string
}

const Logo: React.FC<Props> = ({ width }) => {
  return <img src="logo-dark.svg" width={width} />
}
export default Logo
