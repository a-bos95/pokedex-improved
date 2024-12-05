import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
