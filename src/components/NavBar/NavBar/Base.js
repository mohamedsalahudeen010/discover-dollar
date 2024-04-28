import NavBar from "./NavBar"

function MainBase(props) {
  return (
    <div>
    
        <NavBar/>
        <div>{props.children}</div>
    </div>
  )
}

export default MainBase