import React from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {MoreHoriz as MoreHorizIcon} from "@mui/icons-material";

const Tweetcard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeleteTweet=()=>{
        console.log('delete tweet')
        handleClose();
    }
    const navigate=useNavigate();
  return (
    <div>
     <div className='flex space-x-5'>
    <Avatar className='cursor-pointer'
            onClick={()=>navigate(`profile/${6}`)}
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
                     </Menu>
                 </div>

             </div>

         </div>
     </div>
    </div>
  );
};

export default Tweetcard;
