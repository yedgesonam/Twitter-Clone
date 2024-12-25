
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useFormik} from "formik";
import {Avatar, IconButton, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius:4
};

export default function ProfileModel({open,handleClose}) {
    //const [open, setOpen] = React.useState(false);
    const [uploading,setUploading] = React.useState(false);

    const handleSubmit = (values) => {
        console.log("handle submit",values);
    };
    const handleImageChange = (event) => {
        setUploading(true);
        const {name} = event.target
        const {file} = event.target.files[0];

        formik.setFieldValue(name,file);
        setUploading(false);
    }

    const formik = useFormik({
        initialValues:{
            fullName:"",
            website:"",
            location:"",
            bio:"",
            backGrounfImage:"",
            image:"",
        },
        onSubmit:handleSubmit
    })
    return (
        <div>
           {/*// <Button onClick={handleOpen}>Open modal</Button>*/}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3'>
                                <IconButton onClick={handleClose} aria-label="delete">
                                    <CloseIcon/>
                                </IconButton>
                                <p className=''>Edit Profile</p>
                            </div>
                            <Button type='submit'>Save</Button>
                        </div>
                        <div className='overflow-y-scroll overflow-x-hidden h-[80vh]'>
                            <React.Fragment>
                                <div className='w-full'>
                                    <div className='relative'>
                                        <img
                                            className="w-full h-[12rem] object-cover object-center"
                                            src="https://images.unsplash.com/photo-1485850781094-4ea66c44d023?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="Cover"
                                        />
                                        <input
                                            className='absolute top-0 left-0 w-full opacity-0 cursor-pointer'
                                            onChange={handleImageChange}
                                            name='backgroundImage'
                                            type="file"
                                        >

                                        </input>
                                    </div>
                                </div>
                                <div/>
                                <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                                    <div className='relative'>
                                        <Avatar
                                            sx={{width: "10rem", height: "10rem", border: "4px solid white",}}
                                            src="https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
                                        />
                                        <input
                                            className="absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer"
                                            onChange={handleImageChange}
                                            name="image"
                                            type="file"/>
                                    </div>
                                </div>
                                <div/>
                            </React.Fragment>
                            <div className='space-y-3'>
                                <TextField
                                fullWidth
                                id="fullName"
                                name="fullName"
                                label="Full Name"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                helperText={formik.touched.fullName && formik.errors.fullName}
                                />
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="bio"
                                    name="bio"
                                    label="Bio"
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.bio && formik.errors.bio}
                                />
                                <TextField
                                    fullWidth
                                    id="website"
                                    name="website"
                                    label="Website"
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    error={formik.touched.website && Boolean(formik.errors.website)}
                                    helperText={formik.website && formik.errors.website}
                                />
                                <TextField
                                    fullWidth
                                    id="location"
                                    name="location"
                                    label="Location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.location && formik.errors.location}
                                />
                                <div className='my-3'>
                                    <p className='text-lg'>Birth Date . Edit</p>
                                    <p className='text-2xl'>October 25, 1996</p>
                                </div>
                                <p className='py-3 text-lg'>Edit Professional Profile</p>
                            </div>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}