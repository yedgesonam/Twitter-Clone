import React from 'react';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Profile = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const handleOpenProfileModel = () => {
        console.log("open profile model");
    };
    const handleFollowUser = () => {
        console.log("Follow User");
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="z-50 flex items-center sticky top-0 bg-white shadow-md py-4 px-5">
                <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack}/>
                <h1 className="text-xl font-bold opacity-90 ml-5">Code With Me</h1>
            </section>

            {/* Cover Image Section */}
            <section>
                <img
                    className="w-full h-[15rem] object-cover"
                    src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
                    alt="Cover"
                />
            </section>

            {/* Profile Section */}
            <section className="relative w-full">
                <div className="absolute left-6 bottom-[-5rem] flex items-center">
                    <Avatar
                        alt="Code with me"
                        src="https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
                        sx={{width: "10rem", height: "10rem", border: "4px solid white"}}
                    />
                </div>

                {/* Buttons Section */}
                <div className="mt-5 absolute right-0 ">
                    {true ? (
                        <Button
                            onClick={handleOpenProfileModel}
                            variant="contained"
                            sx={{ borderRadius: "20px" }}
                        >
                            Edit Profile
                        </Button>
                    ) : (
                        <Button
                            onClick={handleFollowUser}
                            variant="contained"
                            sx={{ borderRadius: "20px"
                            }}
                        >
                            {true ? "Follow" : "Unfollow"}
                        </Button>
                    )}
                </div>
            </section>

            {/* Bio Section */}
            <section className="mt-24 px-6">
                <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-bold">Code with me</h1>
                        {true && (
                            <img
                                className="w-5 h-5"
                                src="https://icon2.cleanpng.com/20190222/fku/kisspng-verified-badge-computer-icons-scalable-vector-grap-logotipo-de-icono-de-twitter-descargar-pngsvg-tran-1713906027578.webp"
                                alt="Verified"
                            />
                        )}
                    </div>
                    <p className="text-gray-500">@sonamyedge</p>
                </div>
                <p className="mt-3 text-gray-700">
                    Hello! I'm Sonam Yedge, a Software Engineer by profession.
                </p>
            </section>

            {/* Details Section */}
            <section className="mt-5 px-6 space-y-3">
                {/* Information */}
                <div className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-5">
                    <div className="flex items-center text-gray-500">
                        <BusinessCenterIcon/>
                        <p className="ml-2">Education</p>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <LocationOnIcon/>
                        <p className="ml-2">India</p>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <CalendarMonthIcon/>
                        <p className="ml-2">Joined June 2022</p>
                    </div>
                </div>

                {/* Following and Followers */}
                <div className="flex space-x-10">
                    <div className="flex items-center space-x-1 font-semibold">
                        <span>200</span>
                        <span className="text-gray-500">Following</span>
                    </div>
                    <div className="flex items-center space-x-1 font-semibold">
                        <span>600</span>
                        <span className="text-gray-500">Followers</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
