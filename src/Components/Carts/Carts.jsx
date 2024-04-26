import PropTypes from 'prop-types';
import Cart from './Cart';
import ReadingTimes from '../ReadingTimes/ReadingTimes';

const Carts = ({ bookmarks, readingTimes }) => {


    return (
        <div className="md:w-1/3">
            <h1>
                totall length: {readingTimes.length}
            </h1>
            <div>
                {
                    readingTimes.map(x => <ReadingTimes
                        key={x.id}
                        x={x}
                    ></ReadingTimes>)
                }
            </div>
            <h1>Carts: {bookmarks.length}</h1>

            <div>
                {
                    bookmarks.map(bookmark => <Cart
                        key={bookmark.id}
                        bookmark={bookmark}
                        readingTimes={readingTimes}
                    ></Cart>)
                }
            </div>
        </div>
    );
};


Carts.propTypes = {
    bookmarks: PropTypes.array,
    readingTimes: PropTypes.array
}
export default Carts;