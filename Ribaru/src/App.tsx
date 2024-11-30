import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { SalesPage } from './pages/Sales'
import { AddSalePage } from './pages/AddSale'
import { StockPage } from './pages/Stock'
import { AddStockPage } from './pages/AddStock'
import { SettingsPage } from './pages/Settings'
import { ProfilePage } from './pages/Profile'
import { AccountSettingsPage } from './pages/AccountSettings'
import { BusinessProfilePage } from './pages/BusinessProfile'
import { POSSetupPage } from './pages/POSSetup'
import { Users } from './pages/Users'
import { AddUserPage } from './pages/AddUser'
import { EditUserPage } from './pages/EditUser'
import { Navbar } from './components/layout/Navbar'
import { SearchBarcodeScreen } from '../screens/SearchBarcodeScreen';
import { CurrencyScreen } from '../screens/CurrencyScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <main className="pb-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/sales/add" element={<AddSalePage />} />
            <Route path="/stocks" element={<StockPage />} />
            <Route path="/stocks/add" element={<AddStockPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/add" element={<AddUserPage />} />
            <Route path="/users/:id" element={<EditUserPage />} />
            <Route path="/settings/profile" element={<ProfilePage />} />
            <Route path="/settings/account" element={<AccountSettingsPage />} />
            <Route path="/settings/business" element={<BusinessProfilePage />} />
            <Route path="/settings/pos" element={<POSSetupPage />} />
            <Route path="/stock" element={<StockPage />} />
            <Route path="/add-stock" element={<AddStockPage />} />
            <Route path="/search-barcode" element={<SearchBarcodeScreen />} />
            <Route path="/settings/currency" element={<CurrencyScreen />} />
          </Routes>
        </main>
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App
