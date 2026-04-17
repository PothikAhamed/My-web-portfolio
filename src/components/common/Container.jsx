
const Container = ({children,className}) => {
  return (
    <div className={`w-380 mx-auto ${className}`}>{children}</div>
  )
}

export default Container