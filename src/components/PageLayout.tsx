import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${!isHomePage ? 'pt-20' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout 