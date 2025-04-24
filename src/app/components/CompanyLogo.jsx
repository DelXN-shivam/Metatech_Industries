import Image from 'next/image';
import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import { ImMail4 } from 'react-icons/im';
import { TfiLocationPin } from "react-icons/tfi";

const CompanyHeader = () => {
    return (
        <div className="p-4 pl-0">
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
                {/* Logo */}
                <a href="/">
                <div className="bg-white p-4 rounded-lg">
                    <Image
                        src="/images/metatech_logo.png"
                        width={250}
                        height={85}
                        alt="Metatech Logo"
                    />
                </div>
                </a>

                {/* Contact Info */}
                {/* <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-4 md:space-y-0">
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
                </div> */}
            </div>
        </div>
    );
}

export default CompanyHeader;
