import PropTypes from 'prop-types';
import Cart from './Cart';
const Carts = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3">
            <h1>Carts: {bookmarks.length}</h1>

            <div>
                {
                    bookmarks.map(bookmark => <Cart
                        key={bookmark.id}
                        bookmark={bookmark}
                    ></Cart>)
                }
            </div>
        </div>
    );
};


Carts.propTypes = {
    bookmarks: PropTypes.array
}
export default Carts;