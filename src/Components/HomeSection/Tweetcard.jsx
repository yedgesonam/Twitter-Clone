import React from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {MoreHoriz as MoreHorizIcon} from "@mui/icons-material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';

const Tweetcard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeleteTweet = () => {
        console.log('delete tweet')
        handleClose();
    }
    const handleOpenReplyModel = () => {
        console.log('open model')
    }
    const handleCreateRetweet = () => {
        console.log('handle create retweet')
    }
    const handleLikeTweet = () => {
        console.log("handle like tweet")
    }
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex space-x-5'>
                <Avatar className='cursor-pointer'
                        onClick={() => navigate(`profile/${6}`)}
                        alt='username'
                        src='https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png'
                />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>
                            <span className='font-semibold'>Code with me .2m</span>
                            <span className='text-gray-500'>@sonamyedge</span>
                            <img className='ml-2 w-5 h-5'
                                 src='https://icon2.cleanpng.com/20190222/fku/kisspng-verified-badge-computer-icons-scalable-vector-grap-logotipo-de-icono-de-twitter-descargar-pngsvg-tran-1713906027578.webp'
                                 alt=''/>
                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon/>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='cursor-pointer'>
                            <p className='mb-2 p-0 font-normal'>nice full stack project twitter clone</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md'
                                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s'
                                 alt=''/>
                        </div>
                        <div className='py-5 flex items-center justify-between '>
                            <div className='flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                <p className='ml-2'>43</p>
                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600"} flex items-center`}>
                                <RepeatIcon
                                    onClick={handleCreateRetweet}
                                    className='cursor-pointer'/>
                                <p className='ml-2'>54</p>
                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600"} flex items-center`}>
                                {true ? <FavoriteIcon
                                        onClick={handleCreateRetweet}
                                        className='cursor-pointer'/> :
                                    <FavoriteBorderIcon
                                        onClick={handleLikeTweet}
                                        className='cursor-pointer'/>}
                                <p className='ml-2'>54</p>
                            </div>
                            <div className='flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                <p className='ml-2'>430</p>
                            </div>
                            <div className='flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tweetcard;
