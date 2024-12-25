import React, {useState} from 'react';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tweetcard from "../HomeSection/Tweetcard";

const Profile = () => {
    const [tabValue,setTabValue]=useState("1")
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const handleOpenProfileModel = () => {
        console.log("open profile model");
    };
    const handleFollowUser = () => {
        console.log("Follow User");
    };
    const handleChange = (event,newValue) => {
        setTabValue(newValue)
        if(newValue==4){
            console.log("Likes Tweets");
        }
        else if(newValue==1){
            console.log("User Tweets");
        }

    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="bg-white z-50 flex items-center sticky top-0 bg-white shadow-md py-4 px-5">
                <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack}/>
                <h1 className="text-xl font-bold opacity-90 ml-5">Sonam</h1>
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
                        <h1 className="text-2xl font-bold">Sonam</h1>
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
            <section className='py-3'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Tweets" value="1" />
                                <Tab label="Replies" value="2" />
                                <Tab label="Media" value="3" />
                                <Tab label="Likes" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1,1,1,1,1].map((item)=><Tweetcard/>)}
                        </TabPanel>
                        <TabPanel value="2">User's replies</TabPanel>
                        <TabPanel value="3">Media</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>
                    </TabContext>
                </Box>
            </section>
        </div>
    );
};

export default Profile;
