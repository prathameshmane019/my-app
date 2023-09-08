import Header from './components/header'
import Footer from './components/footer'
import HomePage from './pages/home'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <HomePage />
      <Footer />
    </main>
  )
}
