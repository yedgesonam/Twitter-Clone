import React from 'react';
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import {Avatar, Button} from "@mui/material";

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-5'>
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                         className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-k200y r-1nao33i r-5sfk15 r-kzbkwu"
                         style={{ width: '30px', height: '30px' }}>
                        <g>
                            <path
                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </g>
                    </svg>
                </div>
                <div className='space-y-6'> {/* Adjust the spacing here */}
                    {navigationMenu.map((item) => (
                        <div
                            key={item.title}
                            className='flex items-center space-x-3 cursor-pointer'
                            onClick={() => item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)}
                        >
                            <span className='flex items-center'>
                                {item.icon}
                                <span className='text-xl ml-2'>{item.title}</span>
                            </span>
                        </div>
                    ))}
                </div>
                <div className="py-10">
                    <Button
                        sx={{width:"100%",borderRadius:"29px",py:"15px",bgcolor:"#1e88e5"}} variant='contained'
                    >
                        Tweet
                    </Button>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Avatar
                        alt='user name'
                        src='https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png'
                    />
                    <div>
                        <span className='inline-block'>Sonam Yedge</span>
                        <span className='opacity-70'>@sonamyedge</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navigation;
