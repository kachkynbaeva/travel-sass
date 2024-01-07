import React from 'react';
import './TourSection.scss'
import LightHouse from "../../../Components/Assets/Images/lighthouse 1.png";
import UserIcon from "../../../Components/Assets/Icons/user.svg"
import HeadphonesIcon from "../../../Components/Assets/Icons/headphones.svg"
import WorldIcon from "../../../Components/Assets/Icons/world.svg"

const TourSection = () => {
    return (
        <section className={"tour-section"}>
            <div className="tour-section__container">
                <div className="row">
                    <div className="col-4">
                        <div className="tour-section__item">
                            <div className="tour-section__item-image">
                                <img src={LightHouse} alt={"icon-tour-1"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="tour-section__item">
                            <h2 className="tour-section__item-title">We Offering In Total 793 Tours Out The World</h2>
                            <div className="tour-section__item-option">
                                <div className="tour-section__item-option-item">
                                    <div className="tour-section__item-option-item-icon">
                                        <img className={"user-icon"} src={UserIcon} alt={"icon-tour-1"}/>
                                    </div>
                                    <div className="tour-section__item-option-item-text">
                                        <h4 className="tour-section__item-option-item-text-title">
                                            Best Travel Guide Always For Your Services
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at dignissimos dolorem incidunt laboriosam laudantium maxime modi omnis quasi, vel!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tour-section__item-option-item">
                                <div className="tour-section__item-option-item-icon">
                                    <img className={"world-icon"} src={WorldIcon} alt={"icon-tour-1"}/>
                                </div>
                                <div className="tour-section__item-option-item-text">
                                    <h4 className="tour-section__item-option-item-text-title">
                                        World Class Services Provide For You
                                    </h4>
                                </div>
                            </div>
                            <div className="tour-section__item-option-item">
                                <div className="tour-section__item-option-item-icon">
                                    <img className={"headphones-icon"} src={HeadphonesIcon} alt={"icon-tour-1"}/>
                                </div>
                                <div className="tour-section__item-option-item-text">
                                    <h4 className="tour-section__item-option-item-text-title">
                                        24/7 Strong Customer Support
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TourSection;
