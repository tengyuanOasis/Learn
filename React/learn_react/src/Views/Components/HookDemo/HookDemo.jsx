import React, { useState, useEffect } from 'react';

export function HookTest(props) {
  const [count, setCount] = useState(0)
  const [width, setWidth] = useState(document.body.clientWidth)

  const onChange = () => {
    setWidth(document.body.clientWidth)
  }

  useEffect(() => {
    // 相当于 componentDidMount
    console.log('add resize event')
    window.addEventListener('resize', onChange, false)

    return () => {
      // 相当于 componentWillUnmount
      window.removeEventListener('resize', onChange, false)
    }
  }, [])

  useEffect(() => {
    // 相当于 componentDidUpdate
    document.title = count
  })

  useEffect(() => {
    console.log(`count change: count is ${count}`)
  }, [count])

  return (
    <div>
      页面名称: { count}
        页面宽度: { width}
      <button onClick={() => { setCount(count + 1) }}>点我</button>
    </div>
  )
}