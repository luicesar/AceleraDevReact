import React, {useState} from 'react'

function Counter({step = 1, initialCount = 0}) {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(c => c + step)
  return <button onClick={increment}>{count}</button>
}

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: custom hooks'

export default Usage
