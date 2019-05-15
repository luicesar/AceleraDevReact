// Counter: hooks and simple state
import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  )
}

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: hooks and simple state'

export default Usage
