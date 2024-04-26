
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Carts from './Components/Carts/Carts'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Header></Header>
        <hr />
        <div className='md:flex'>
          <Blogs></Blogs>
          <Carts></Carts>
        </div>
      </div>
    </>
  )
}

export default App
