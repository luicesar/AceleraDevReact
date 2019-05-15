import React, {useEffect} from 'react'

function Counter({step = 1, initialCount = 0}) {
  const [count, setCount] = React.useState(initialCount)

  Number(window.localStorage.getItem('count') || initialCount)

  useEffect(() => {
    window.localStorage.setItem('count', count)
    console.log(`useEffect (${count})`)
  })

  const increment = () => setCount(c => c + step)

  return <button onClick={increment}>{count}</button>
}

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: useEffect'

export default Usage
