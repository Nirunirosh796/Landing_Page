import React from 'react';
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel nulla officia, pariatur assumenda porro eveniet itaque rerum fuga maxime debitis totam laboriosam possimus ab error corporis voluptas eaque officiis.",
        },
        {
            image: ChooseMeals,
            title: "Choose how often",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel nulla officia, pariatur assumenda porro eveniet itaque rerum fuga maxime debitis totam laboriosam possimus ab error corporis voluptas eaque officiis.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Delivers",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel nulla officia, pariatur assumenda porro eveniet itaque rerum fuga maxime debitis totam laboriosam possimus ab error corporis voluptas eaque officiis.",
        },
    ];

    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <p className='primary-heading'>How It Works</p>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate dolorem culpa fugit nobis laudantium architecto, accusantium voluptatum soluta, enim non harum asperiores iure quaerat ut inventore. Nemo, recusandae saepe.
                </p>
            </div>
            <div className='work-section-bottom'>
                {workInfoData.map((data, index) => (
                    <div className='work-section-info' key={index}>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
