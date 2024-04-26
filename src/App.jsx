
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Carts from './Components/Carts/Carts'
import Header from './Components/Header/Header'
import PropTypes from 'prop-types';
function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleClick = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Header></Header>
        <hr />
        <div className='md:flex gap-7'>
          <Blogs handleClick={handleClick}></Blogs>
          <Carts bookmarks={bookmarks}></Carts>
        </div>
      </div>
    </>
  )
}


App.propTypes = {
  handleClick: PropTypes.func
}
export default App
