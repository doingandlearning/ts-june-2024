import { useState } from 'react'
import './App.css'
import BBC from './components/BBC'

function App() {
  const [user, setUser] = useState<{ name: string } | null>(null)
  return (
    <>
      <BBC team="Archives" />
      <button onClick={() => setUser({ name: "Kevin" })}>Click</button>
      <p>{user?.name}</p>
    </>
  )
}


export default App
