import { React, useContext } from 'react';
import { motion, animatePresence, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

import FeedbackItem from './FeedbackItem';

function FeedbackList({ darkMode }) {
    const { feedback } = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={item.id}
                            item={item}
                            reverse={darkMode}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );

    // return (
    //     <div className="feedback-list">
    //         {feedback.map((item) => (
    //             <FeedbackItem
    //                 key={item.id}
    //                 item={item}
    //                 handleDelete={handleDelete}
    //                 reverse={darkMode}
    //             />
    //         ))}
    //     </div>
    // );
}

export default FeedbackList;
