import { React, useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';

import Card from './shared/Card';

function FeedbackItem({ item, reverse }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

    return (
        <Card reverse={reverse}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color="#ff6a95" />
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color="white" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;
