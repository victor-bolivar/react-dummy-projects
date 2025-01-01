import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Toaster position='top-right' />
      <Header />
      <div className='min-h-[calc(100vh-15rem)] bg-white flex justify-center'>
        <div className='w-4/5 max-w-6xl'>
          <Container />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App