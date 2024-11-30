import { typography } from '../theme/typography'
import { Navbar } from './components/layout/Navbar'
import { Dashboard } from './components/ui/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Dashboard />
      </main>
    </div>
  )
}

export default App
