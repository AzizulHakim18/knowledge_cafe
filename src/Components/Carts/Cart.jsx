import PropTypes from 'prop-types';
const Cart = ({ bookmark }) => {

    console.log(bookmark);
    const { title } = bookmark
    return (
        <div>
            <h1 className='text-xl font-semibold text-red-600 bg-slate-200 border-2 rounded-lg m-3 p-3'>{title}</h1>
        </div>
    );
};

Cart.propTypes = {
    bookmark: PropTypes.object,
    readingTime: PropTypes.number
}
export default Cart;