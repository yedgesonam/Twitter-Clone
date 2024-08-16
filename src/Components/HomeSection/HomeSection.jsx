import React, {useState} from 'react';
import {Avatar, Button} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from 'yup';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Tweetcard from "./Tweetcard";

const validationSchema = Yup.object().shape({
    content:Yup.string().required("Tweet text is required")
})
const HomeSection = () => {
    const [uploadingImage,setUpLoadingImage]=useState(false);
    const [selectImage, setSelectedImage]=useState("");
    const handleSubmit=(values)=>{
        console.log("values",values)
    }
    const formik= useFormik({
        initialValues:{
            content:"",
            image:""
        },
        onSubmit:handleSubmit,
        validationSchema
    })
    const handleSelectImage=(event)=>{
setUpLoadingImage(true)
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image",imgUrl);
setSelectedImage(imgUrl);
setUpLoadingImage(false);
    }
  return (
    <div className='py-5 text-xl font-bold opacity-90, space-y-8'>
          <section>
              <h1>Home</h1>
          </section>
        <section className='pb-10'>
        <div className='flex space-x-4 items-start'>
            <Avatar alt='username'
                      src='https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png'
            />
            <div className='flex-grow'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-4'>
                        <input type='text' name='content' placeholder='What is happening'
                        className={'border-none outline-none bg-transparent w-full'}
                            {...formik.getFieldProps('content')}/>
                    </div>
                    <div className='flex justify-between items-center space-x-4'>
                      <div className='flex space-x-5 items-center '>
                          <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                              <ImageIcon className='text-[#1d9bf0]'/>
                              <input
                                  type='file' name='imageFile'
                                  className='hidden'
                                  onChange={handleSelectImage}/>
                          </label>
                      <FmdGoodIcon className='text-[#1d9bf0]'/>
                          <TagFacesIcon className='text-[#1d9bf0]'/>
                      </div>
                        <div>
                            <Button sx={{width:"100%",
                                borderRadius:"29px",
                                paddingY:"8px",
                                paddingX:'20px',
                                bgcolor:"#1e88e5"}}
                                    variant='contained'
                                    type='submit'
                            >Tweet
                            </Button>
                        </div>
                      </div>
                </form>

            </div>
        </div>
        </section>
        <section>
            {[1,1,1,1,1].map((item)=><Tweetcard/>)}
        </section>
    </div>
  );
};

export default HomeSection;
