export default function App() {

  function wypuscLog(){
    console.log('Rybitwa')
  }

  return <Button kolorTekstu='red' textWewnatrz='Rybitwa' jestKlikalny={false} funkcja={wypuscLog}/>
}

function Button({textWewnatrz,kolorTekstu, jestKlikalny, funkcja }){
  return <button style={{color: kolorTekstu}} disabled={jestKlikalny} onClick={funkcja} >{textWewnatrz}</button>
}