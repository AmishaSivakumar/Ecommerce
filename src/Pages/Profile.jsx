import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Profile() {
  const defaultPhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  const { fullName, email, address, phone } = useSelector(state => state.user);
  const [profilePhoto, setProfilePhoto] = useState(defaultPhoto);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };


  const NotRegister = () => (
    <div className="container" style={{height: "80vh"}}>
      <div className="row">
        <div className="col-md-12 bg-light text-center">
          <h1 className="text-center">Profile</h1>
          <hr />
          <h4 className="p-3 display-5">Your are not registered</h4>
          <Link to={"/register"} className="btn btn-outline-dark mx-4">
            <i className="bi bi-arrow-left"></i> Register
          </Link>
        </div>
      </div>
    </div>
  );

  const Registered = () => (
    <div className="container" style={{height: "80vh"}}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card my-5 border border-black">
            <div className="card-body">
              <h2 className="card-title">Hey! {fullName}</h2>
              <div className="text-center mb-3">
                <img src={profilePhoto} alt="profile" className="rounded-circle" style={{ width: '150px', height: '150px' }} />
                {profilePhoto === defaultPhoto && (
                  <input type="file" accept="image/*" onChange={handleImageChange} className="form-control mt-3 m-auto" style={{ width: '60%' }} />
                )}
              </div>
              <p className="card-text "><b>Address:</b> {address}</p>
              <p className="card-text"><b>Phone:</b> {phone}</p>
              <p className="card-text"><b>Email:</b> {email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


  return (
    <>
      <Navbar />
      {fullName != "" ? <Registered /> : <NotRegister />}
      <Footer />
    </>
  )
}

export default Profile
