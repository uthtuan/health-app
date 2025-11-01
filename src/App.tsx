import '@/App'
import { Header } from '@components/layout/header'
import { Footer } from '@components/layout/footer'
import AppRoutes from './routes'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
