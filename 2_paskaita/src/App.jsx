
import Adult from "./components/Adult"
import Button from "./components/Button"
import ButtonClass from "./components/ButtonClass"
import Card from "./components/Card"
import Greeting from "./components/Greeting"
import Header from "./components/Header"
import Hero from "./components/Hero"


const App = () => {

  // const isAdult = (age) => {
  //   if (age >= 18) {
  //     return true
  //   }
  //   return false
  //   }
    
  //   const isAdultV2 = (age) => age >= 18
  //     const isAdultV3 = (age) => (age >= 18 ? true : false)
  //     const isAdultV4 = (age) => {
  //       return age >= 18 ? true : false
  //     }
  //     const isAdultV5 = (age) => {
  //       return age >= 18
  //     }
    
  //     const isAdultV6 = (age) => {
  //       if (age >= 18) {
  //         return true
  //       } else {
  //         return false
  //       }
  //     }
  const fruits = ["Apple", "Banana", "Carrot"]    

  return <div>
  <Header />
  <Hero title ="Akcija atrakcija" subtitle="Visiems saldainiams akcija" 
   imageUrl="https://cdn.creatureandcoagency.com/uploads/2020/10/Facts-about-Chrismtas-5.jpg"/>
  <br />
  <Button title="Spausk mane" />
  <Button title ="Click me" />
  <ButtonClass title = "Atidaryti" />
  <br/>
  <Hero title ="Akcija atrakcija" subtitle="Visiems saldainiams akcija" color="red"/>
  <br/>
  <div style={{display: "flex", justifyContent: "center", gap: "2rem"}}>
  <Card imageUrl="https://cdn.creatureandcoagency.com/uploads/2020/10/Facts-about-Chrismtas-5.jpg" description="Christmas party in Vilnius"/>
  <Card imageUrl="https://cdn.creatureandcoagency.com/uploads/2020/10/Facts-about-Chrismtas-5.jpg" description="Christmas party in Kaunas"/>
  <Card imageUrl="https://t4.ftcdn.net/jpg/02/94/71/81/360_F_294718149_aIizeIOQuJAK2K79oJ7C0Ck0xTaDTxOu.jpg" description="Christmas party in Klaipėda" price={15}/>
  </div>
  <br/>
  <br/>
  <Adult name="Inga" age={38} />
  <Adult name="Rūta" age={11} />
  <Greeting />
  <Greeting name="Inga" surname="Kazakevičiūtė"/>
  <Greeting name="Rūta" surname="Valaitytė" lastLoggedIn={new Date().toLocaleDateString()}/>

  <br />

  {[" Petras", "Jonas", "Antanas", "Tomas", "Inga", "Zosė"].map(name => <Greeting key={name} name={name}/>)}

  <br />
  <ul>
    {fruits.map ((fruit, index) => (<li key={fruit}>{fruit} {index}</li>))}
  </ul>

  </div>
}

export default App
