import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHooks } from './02-useEffect/TrafficLightWithHooks'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './hooks/FocusScreen'
import { TasksApp } from './05-useReducer/TaskApp'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLightWithEffect /> */}
    {/* <FocusScreen /> */}
    <TasksApp />
  </StrictMode>,
)
