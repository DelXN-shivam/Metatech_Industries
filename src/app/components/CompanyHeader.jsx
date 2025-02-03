import Image from 'next/image';
import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import { ImMail4 } from 'react-icons/im';
import { TfiLocationPin } from "react-icons/tfi";
import Drawer from './Drawer';

const CompanyHeader = () => {

    const IconTexts = ({ icon: Icon, text1, text2 }) => {
        return (
            <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="text-blue-600">
                    <Icon size={24} />
                </div>

                {/* Texts */}
                <div className="flex flex-col items-start">
                    <span className="text-xs md:text-base font-medium text-white">{text1}</span>
                    <span className="text-sm md:text-lg font-semibold text-white">{text2}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="allScreens:p-4">
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 phone:hidden'>
                {/* Logo */}
                <a href="/#">
                    <div className="bg-white p-4 rounded-lg">
                        <span>
                            <Image
                                src="/images/metatech_logo.png"
                                width={200}
                                height={85}
                                alt="Metatech Logo"
                            />
                        </span>
                    </div>
                </a>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-4 md:space-y-0">
                    <IconTexts
                        icon={FaPhoneVolume}
                        text1="Call Us"
                        text2="22-33-44-55"
                    />
                    <IconTexts
                        icon={ImMail4}
                        text1="Contact"
                        text2="metatechind@domain.com"
                    />
                    <IconTexts
                        icon={TfiLocationPin}
                        text1="Location"
                        text2="Narayan Peth, Cosmos Bank Building"
                    />
                </div>
            </div>
            <div className='phone:visible allScreens:hidden phone:flex phone:items-center phone:justify-between phone:mt-2'>
                {/* Logo */}
                <a href="/#">
                    <div className="bg-white rounded-lg phone:p-2 phone:flex-wrap">
                        <Image
                            src="/images/metatech_logo.png"
                            width={150}
                            height={85}
                            alt="Metatech Logo"
                        />
                    </div>
                </a>
                <span className='phone:mt-1.5'>
                    <Drawer />
                </span>
            </div>
        </div>
    );
}

export default CompanyHeader;
