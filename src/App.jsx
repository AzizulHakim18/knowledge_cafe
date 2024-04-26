
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Carts from './Components/Carts/Carts'
import Header from './Components/Header/Header'
import PropTypes from 'prop-types';
function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTimes, setReadingTimes] = useState([])


  const handleClick = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleReading = time => {
    const newtimearray = [...readingTimes, time]
    setReadingTimes(newtimearray)
  }
  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Header></Header>
        <hr />
        <div className='md:flex gap-7'>
          <Blogs handleClick={handleClick}
            handleReading={handleReading}
          ></Blogs>
          <Carts
            bookmarks={bookmarks}
            readingTimes={readingTimes}
          ></Carts>
        </div>
      </div>
    </>
  )
}


App.propTypes = {
  handleClick: PropTypes.func,
  handleReading: PropTypes.func
}
export default App
