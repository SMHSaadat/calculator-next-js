'use client'

export default function Home() {
  return (
    <div align="center">
      <h1>hello_world</h1>
      <button onClick={
        () => {
          let s: any = prompt("Enter something")

          alert("Your answer is: " + eval(s))
        }}
        style={{ padding: "20px 100px" }}>hii</button>
    </div>
  );
}
