import './styles/global.css';

import { Habit } from "./components/Habit";

function App() {
  return (
    <div>
      <Habit completed={2}/>
      <Habit completed={213}/>
      <Habit completed={22}/>
    </div>
  )
}

export default App

// Componentes : Reaproveitar / isolar
// Propriedades : Uma informação enviada para modificar um componente visual ou comportamental