import React from 'react'
import { typography } from '../theme/typography'

function App() {
  return (
    <div style={{ fontFamily: typography.fontFamily.recursive }}>
      <h1>Welcome to Ribaru</h1>
      <p>Your application is now set up with the Recursive font!</p>
    </div>
  )
}

export default App
