import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Toaster } from 'sonner'

// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHooks } from './02-useEffect/TrafficLightWithHooks'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './hooks/FocusScreen'
// import { TasksApp } from './05-useReducer/TaskApp'
// import { ScrambleWords } from './05-useReducer/ScrambleWords'
// import { MemoHook } from './06-memos/MmeoHook'
// import { MemoCounter } from './06-memos/MemoCounter'
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
// import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { getUserAction } from './08-use-suspense/api/get-user.action'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <TrafficLightWithEffect /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense fallback={<h1>Cargando</h1>}>
      <ClientInformation getUser={getUserAction(1000)}/>
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
)
