import { ModeToggle } from "./components/mode-toggle"
import { Button } from "./components/ui/button"

function App() {

  return (
    <>
      <h1 className="text-3xl">Vite + React</h1>
      <Button variant="outline" >Click Me</Button>
      <ModeToggle />
    </>
  )
}

export default App
