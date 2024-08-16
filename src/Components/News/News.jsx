import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from "@mui/material";
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material';

const News = () => {
    const handleChangeTheme = () => {
        console.log("change theme");
    };

    return (
        <div className='py-5 sticky top-0'>
            <div className='relative flex items-center'>
                <input
                    type='text'
                    placeholder='Search...'
                    className='py-3 rounded-full text-gray-500 w-full pl-12 border border-gray-300 focus:outline-none focus:border-blue-500'
                />
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <SearchIcon className='text-gray-500'/>
                </div>
                <Brightness4Icon
                    onClick={handleChangeTheme}
                    className='ml-3 cursor-pointer'
                />
            </div>
            <section className='my-5'>
                <h1 className='text-xl font-bold'>Get Verified</h1>
                <h1 className='font-bold my-2'>Subscribe to unlock new features</h1>
                <Button variant='contained' sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}>
                    Get Verified
                </Button>
            </section>
            <section className='mt-7 space-y-7'>
                <h1 className='font-bold text-xl py-1'>What's Happening</h1>
                <div>
                    <p className='text-sm'>FIFA Women's World Cup . LIVE</p>
                    <p className='font-bold'>Philippines vs Switzerland</p>
                </div>
                {[1, 1, 1].map((item, index) => (
                    <div key={index} className='flex justify-between w-full'>
                        <div>
                            <p>Entertainment . Trending</p>
                            <p className='font-bold'>#Spartans</p>
                            <p>34.4k Tweets</p>
                        </div>
                        <MoreHorizIcon />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default News;
