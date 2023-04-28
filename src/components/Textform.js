import React ,{useState} from 'react'



export default function Textform(props) {
    const [text , setText] = useState("");
    const handleOnChange = (event)=>{
        
        setText(event.target.value);
    }
    // const handleResetClick=(event)=>{
    //   setText("");
    // }
    const handleUpClick=()=>{
       // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(':Converted to uppercase!',"success")
    }
    const handleLoClick=()=>{
      // console.log("UpperCase was clicked" + text);
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert(':Converted to lowercase!',"success")
    }  
    const handleClearClick=()=>{
      // console.log("UpperCase was clicked" + text);
       let newText = (" ");
       setText(newText)
       props.showAlert(':Text cleared!',"success")
    }    
    
  return (
    <>
    <div  className ="container" style={{color:props.mode ==='dark'?'white':'#143e7c'}}>
      <h1>{props.heading} </h1>
  <div className="mb-3">
     <label htmlFor="text" className="form-label"></label>
     <textarea className="form-control" value={text} onChange={handleOnChange}  style= {{backgroundColor: props.mode ==='dark'?'#13466e':'white', color:props.mode ==='dark'?'white':'#143e7c'}} id='myBox' rows ="8"></textarea>
     </div>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
     <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
     <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}> Clear case</button>
     

</div>
<div className="container my-2" style={{color:props.mode ==='dark'?'white':'#143e7c'}}>
  <h1>Your Text Summary</h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read</p>
  <h3>Preview</h3>
  <p>{text.length>0? text:"Nothing to Preview"}</p>
</div>
</>
  )
}
