
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Carts from './Components/Carts/Carts'
import Header from './Components/Header/Header'
import PropTypes from 'prop-types';
function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleClick = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = time => {
    const newTime = readingTime + time;
    setReadingTime(newTime)
    console.log(newTime);
  }

  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Header></Header>
        <hr />
        <div className='md:flex gap-7'>
          <Blogs handleClick={handleClick}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Carts
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Carts>
        </div>
      </div>
    </>
  )
}


App.propTypes = {
  handleClick: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
  readingTime: PropTypes.number
}
export default App
