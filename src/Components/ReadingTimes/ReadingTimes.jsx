
import PropTypes from 'prop-types';
import { useState } from 'react';
const ReadingTimes = ({ x }) => {
    const [totallTime, setTotallTime] = useState([0])

    const { reading_time } = x

    const sumTime = time => {
        const newTime = [...reading_time, time]
        setTotallTime(newTime)
    }
    console.log(totallTime);
    return (
        <div>

        </div>
    );
};
ReadingTimes.propTypes = {
    x: PropTypes.object
}
export default ReadingTimes;