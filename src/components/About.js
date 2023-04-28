import { React } from 'react'

export default function About(props) {
  
//  const [myStyle, setMyStyle] = useState({

//    color:'black' ,
//    backgroundColor:'white',
//  })
 {/*const [btntext, setBtnText] = useState("Enable Dark Mode")

 const toggleStyle = () => {
  if(myStyle.color ==='black'){
    setMyStyle({
      color:'white',
      backgroundColor:'black',
      border:'1px solid white',
      borderRadius:'10px'
    })
    setBtnText('Enable Light Mode')
  }
  else{
    setMyStyle({
      color:'black',
      backgroundColor:'white',
      borderRadius:'10px'
    })
    setBtnText('Enable Dark Mode')
  }}*/}
  
 let myStyle ={
      color:props.mode ==='dark'?'white':'#042743',
      backgroundColor :props.mode ==='dark'?'#042743':'white',
      border:'2px solid',
      borderColor:props.mode ==='dark'?'white':'#042743',
 }
  
  return (
    <div className='container'>
        <h1 className="my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
       <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>Analyze your Text</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={myStyle}>From this web we can analyze our text and can change it's style in the way we want.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={myStyle}>It is free for all and can be used in any way..</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={myStyle}>It can work on various browserslike chrome firefox mozella etc...</div>
    </div>
  </div>
</div>
{/*<div className="container my-3">
   <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>

</div>*/}
</div>
  )
}
