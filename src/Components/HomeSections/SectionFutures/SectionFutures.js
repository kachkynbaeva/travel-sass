import React from 'react';
import './SectionFuture.scss'
import Map from "../../../Components/Assets/map 1.png"
import Binocular from "../../../Components/Assets/binocular 1.png";
import Ukulele from "../../../Components/Assets/ukelele 1.png";
import Backpack from "../../../Components/Assets/backpack 1.png";
import Cuba from "../../../Components/Assets/Cuba-city 1.png";
import Paris from "../../../Components/Assets/Paris-City.png";
import Japan from "../../../Components/Assets/japan.png";
const SectionFutures = () => {
    return (
        <section className={"section-futures"}>
            <div className={"section-futures__container"}>
                <div className={"row"}>
                    <div className={"col-3"}>
                        <div className={"section-futures__item"}>
                            <div className={"section-futures__item-icon"}>
                                <img src={Map} alt={"icon-futures-1"}/>
                            </div>
                            <div className={"section-futures__item-text"}>
                                <h4 className={"section-futures__item-text-title"}>
                                    Choose Destination
                                </h4>
                                <p className={"section-futures__item-text-subtitle"}>
                                    Lorem Ipsum is simply dummy text of the printing setting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-3"}>
                        <div className={"section-futures__item"}>
                            <div className={"section-futures__item-icon"}>
                                <img src={Binocular} alt={"icon-futures-1"}/>
                            </div>
                            <div className={"section-futures__item-text"}>
                                <h4 className={"section-futures__item-text-title"}>
                                    Explore The Place
                                </h4>
                                <p className={"section-futures__item-text-subtitle"}>
                                    Lorem Ipsum is simply dummy text of the printing setting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-3"}>
                        <div className={"section-futures__item"}>
                            <div className={"section-futures__item-icon"}>
                                <img src={Backpack} alt={"icon-futures-1"}/>
                            </div>
                            <div className={"section-futures__item-text"}>
                                <h4 className={"section-futures__item-text-title"}>
                                    Start Your Journey
                                </h4>
                                <p className={"section-futures__item-text-subtitle"}>
                                    Lorem Ipsum is simply dummy text of the printing setting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-3"}>
                        <div className={"section-futures__item"}>
                            <div className={"section-futures__item-icon"}>
                                <img src={Ukulele} alt={"icon-futures-1"}/>
                            </div>
                            <div className={"section-futures__item-text"}>
                                <h4 className={"section-futures__item-text-title"}>
                                    Let’s Enjoy
                                </h4>
                                <p className={"section-futures__item-text-subtitle"}>
                                    Lorem Ipsum is simply dummy text of the printing setting
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"section-futures-destination__container"}>
                <div className={"section-futures-destination__text"}>
                    <h2 className={"section-futures-destination__text-title"}>
                        Top Destinations
                        In The World
                    </h2>
                    <p className={"section-futures-destination__text-subtitle"}>
                        It is a long established fact that a reader will be the distracted by the readable content of a page when looking at its layout from it.
                    </p>
                    <button className={"section-futures-destination__text-button"}>
                        Discover More
                    </button>
                </div>
                <div className={"section-futures-destination__images"}>
                    <div className={"section-futures-destination__images-item"}>
                        <img src={Cuba} alt={"cuba"}/>
                        <h4 className={"section-futures-destination__images-item-title"}>
                            Cuba City
                        </h4>
                    </div>
                    <div className={"section-futures-destination__images-item"}>
                        <img src={Paris} alt={"paris"}/>
                        <h4 className={"section-futures-destination__images-item-title"}>
                            Paris City
                        </h4>
                    </div>
                    <div className={"section-futures-destination__images-item"}>
                        <img src={Japan} alt={"japan"}/>
                        <h4 className={"section-futures-destination__images-item-title"}>
                            Japan City
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFutures;
