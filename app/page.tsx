'use client'

export default function Home() {


const Btn = (props:any)=>{
  return <button style={{height:60, width:60}} onClick={()=>{
    (document.getElementById("txt") as HTMLInputElement).value = props.txt

  }} > {props.txt}</button>
}

  return (
    <div>
      <input id="txt" style={{height:40, width:240}}></input>
      <br/>
        <Btn txt="-" />
        <Btn txt="1" />
        <Btn txt="2" />
        <Btn txt="3" />
        <br/>
        <Btn txt="+" />
        <Btn txt="4" />
        <Btn txt="5" />
        <Btn txt="6" />
        <br/>
        <Btn txt="0" />
        <Btn txt="7" />
        <Btn txt="8" />
        <Btn txt="9" />
        <br/>
        <button style={{height:60, width:240}}>=</button>



        <br/>





        {/* <button style={{height:60, width:60}}>2</button>
        <button style={{height:60, width:60}}>3</button>
        <br/>
        <button style={{height:60, width:60}}>+</button>
        <button style={{height:60, width:60}}>4</button>
        <button style={{height:60, width:60}}>5</button>
        <button style={{height:60, width:60}}>6</button>
        <br/>
        <button style={{height:60, width:60}}>0</button>
        <button style={{height:60, width:60}}>7</button>
        <button style={{height:60, width:60}}>8</button>
        <button style={{height:60, width:60}}>9</button>
        <br/>
        <button style={{height:60, width:240}}>0</button> */}
    </div>
  );
}
