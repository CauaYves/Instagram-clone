import ReactDOM from "react-dom"

function Lista(){
  return(
    <ul>
      <li>EU ESTOU AQUUI</li>
      <li>a</li>
      <li>b</li>
    </ul>
  ) 
}
ReactDOM.render(<Lista />, document.querySelector('.root'))
