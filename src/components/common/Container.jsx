
const Container = ({children,className}) => {
  return (
    <div className={`w-400 mx-auto ${className}`}>{children}</div>
  )
}

export default Container