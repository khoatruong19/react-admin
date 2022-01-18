import React from 'react'
import "./user.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://image.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowTitle">Computer Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">10.12.199</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroidIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">+1 231 234 123</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearchingIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='annabeck99' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Fullname</label>
                                <input type="text" placeholder='Anna Beck' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder='annabeck99@gmail.com' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder=
                                '+1 231 234 123' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Adress</label>
                                <input type="text" placeholder=
                                'New York | USA' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://image.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg" alt="" className="userUpdateImg" />
                                <label htmlFor='file'><PublishIcon className='userUpdateIcon'/></label>
                                <input hidden type="file" id="file" />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
