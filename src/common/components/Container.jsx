export const Container = ({ children, ...props }) => {
  return (
    <div className="max-w-7xl mx-auto px-6" {...props}>
      {children}
    </div>
  )
}
