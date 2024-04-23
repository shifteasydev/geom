"use client"
import React, { useState } from 'react';
import aboutBgImg from '../../../public/assets/img/about/about3.jpg';
import about1 from '../../../public/assets/img/about/about1.png';
import about2 from '../../../public/assets/img/about/about2.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import ModalVideo from 'react-modal-video';

const AboutVideoArea = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);
    return (
        <>
            <section className="ms-about-area fix">
                <div className="ms-about-bg include__bg p-relative zindex-1 pt-120 pb-130"
                    style={{ backgroundImage: `url(${aboutBgImg.src})` }}>
                    <div className="ms-overlay ms-overlay5 p-absolute zindex--1"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-10">
                                <div className="ms-about-content text-center">
                                    <h2 className="ms-title2 white-text mb-30 bd-title-anim">
                                        About GEOM, A platform to hire wedding band, book musicians, DJs, Emcee for events and aparty hiring agency
                                    </h2>
                                    <p className="capitalize mb-65">Global Entertainment Orchestra & Movies (GEOM) is the {`UK's`} leading live music, entertainment and events booking
                                        agency. We manage lot of bookings a year, from intimate <br /> weddings, live events to high-profile corporate functions.
                                    </p>
                                    <div className="ms-about-round-btn d-inline-block bdFadeUp">
                                        <button onClick={() => { openVideoModal() }}
                                            className="popup-video ms-video-round p-relative">
                                            <div className="ms-video-img1">
                                                <Image src={about1} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                                    alt="about image" />
                                            </div>
                                            <div className="ms-video-img2 d-inline-block">
                                                <Image src={about2} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                                    alt="about image" />
                                            </div>
                                            <div className="ms-video-icon">
                                                <i className="fa-sharp fa-regular fa-play"></i>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="WrshMGRm2e0" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default AboutVideoArea;