

const Header = ({title = "Review App", bgColor = "blue", textColor = "white"}) => {


  const headerStyle = {
    backgroundColor:bgColor,
    color:textColor
  }
  
  return (
    <header style={headerStyle}>

       <div className="container">
           <h1>{title}</h1>
       </div>

    </header>
  )
}

export default Header