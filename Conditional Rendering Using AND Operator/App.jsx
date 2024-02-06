import React, {useState} from 'react';

const App = () => {
    let [notification, setNotification] = useState([
        "You have one  friend request",
        "Abhishek commented on your photo that `You are too cute`",
        "Sandhya accepted your friend request"
    ]);
    let [trainers, setTrainers] = useState([
        {
            trainer_name: "Shahi",
            course: "MERN Stack Developer",
            isAvailable: true
        }, {
            trainer_name: "Shahi",
            course: "Java Full Stack Developer",
            isAvailable: true
        }, {
            trainer_name: "Shahi",
            course: "MEAN Stack Developer",
            isAvailable: true
        }
    ]);

    let {isAvailable} = trainers;
    return (
        <div>
            <h1>Notification <sup>{notification.length > 0 && notification.length}</sup></h1>

            <section>
                {trainers.map((value, index) => {
                    return (
                        <React.Fragment key={index + 1}>
                            <h1>{value.trainer_name}</h1>
                            <h2>{value.course}</h2>
                            <p className={value.isAvailable ? "active" : "inactive"}>{value.isAvailable ? "Today class will be there" : "Holiday Enjoy!!!"}</p>
                        </React.Fragment>
                    );
                })}
            </section>
        </div>
    );
};

export default App;