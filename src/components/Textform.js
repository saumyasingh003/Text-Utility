import React ,{useState} from 'react'



export default function Textform(props) {
    const [text , setText] = useState(" ");
    const handleOnChange = (event)=>{
        //console.log("onChange");
        setText(event.target.value);
    }
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
     <textarea className="form-control" value={text} onChange={handleOnChange}  style= {{backgroundColor: props.mode ==='dark'?'grey':'white', color:props.mode ==='dark'?'white':'#143e7c'}} id='myBox' rows ="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear case</button>
    

</div>
<div className="container my-2" style={{color:props.mode ==='dark'?'white':'#143e7c'}}>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters </p>
  <p>{0.008 * text.split(" ").length} Minute read</p>
  <h3>Preview</h3>
  <p>{text.length>0? text:"Enter something to preview it here"}</p>
</div>
</>
  )
}
