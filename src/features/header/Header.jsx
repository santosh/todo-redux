import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => setText(e.target.value)

  const handleKeydown = e => {
    const trimmedText = text.trim()
    // If the user pressed the Enter key:
    if (e.which === 13 && trimmedText) {
      // Dispatch the "todo added" action with this text
      dispatch({ type: 'todo/TODO_ADDED', payload: trimmedText })
      // And clear out the text input
      setText('')
    }
  }

  return (
    <header className='header'>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeydown}
      />

    </header>
  )
}

export default Header
