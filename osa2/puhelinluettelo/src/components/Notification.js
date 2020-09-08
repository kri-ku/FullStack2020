import React from 'react';


const Notification = ({ message, type }) => {


    if (type === '') {
        return null
    }

    if (type === "rejected") {
        return (
            <div className="rejected">
                {message}
            </div>
        )
    }

    return (
        <div className="completed">
            {message}
        </div>
    )
}

export default Notification;