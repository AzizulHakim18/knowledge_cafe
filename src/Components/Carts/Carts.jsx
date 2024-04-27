import PropTypes from 'prop-types';
import Cart from './Cart';

const Carts = ({ bookmarks, readingTime }) => {


    return (
        <div className="md:w-1/3">
            <h1>
                Totall Reading Time {readingTime} min
            </h1>

            <h1>Carts: {bookmarks.length}</h1>

            <div>
                {
                    bookmarks.map(bookmark => <Cart
                        key={bookmark.id}
                        bookmark={bookmark}
                        readingTime={readingTime}
                    ></Cart>)
                }
            </div>
        </div>
    );
};


Carts.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Carts;