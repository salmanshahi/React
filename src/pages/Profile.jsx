import React from 'react';

const Profile = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Profile | salman</title>
<link href="../css/profile.css" rel="stylesheet"/>
</head>
<body>
<div className="sidebar" id="sidebar">
<div className="sidebar-header">
<div className="icon">S</div>
<span>salman</span>
</div>
<a className="nav-item" href="#">
<div className="icon">📊</div>
<span>Dashboard</span>
</a>
<a className="nav-item" href="#">
<div className="icon">🛒</div>
<span>POS</span>
</a>
<a className="nav-item" href="#">
<div className="icon">👥</div>
<span>People</span>
<div className="arrow">‹</div>
</a>
<a className="nav-item" href="#">
<div className="icon">📦</div>
<span>Product</span>
<div className="arrow">‹</div>
</a>
<a className="nav-item" href="#">
<div className="icon">🏷️</div>
<span>Sale</span>
<div className="arrow">‹</div>
</a>
<a className="nav-item" href="#">
<div className="icon">🔒</div>
<span>Purchase</span>
<div className="arrow">‹</div>
</a>
<a className="nav-item" href="#">
<div className="icon">📊</div>
<span>Reports</span>
<div className="arrow">‹</div>
</a>
<div className="nav-section">
<div className="nav-section-title">SETTINGS</div>
<a className="nav-item" href="#">
<div className="icon">⚙️</div>
<span>Website Settings</span>
<div className="arrow">‹</div>
</a>
</div>
</div>
<div className="main-content">
<div className="top-bar">
<button className="menu-btn" id="menuBtn">☰</button>
<div className="actions">
<button className="btn pos-btn">
                    🛒 POS
                </button>
<button className="btn" id="fullscreenBtn">⛶</button>
<button className="btn">👤 ▼</button>
<div className="user-dropdown" id="userDropdown">
<a href="../html/profile.html" id="profileBtn">Profile</a>
<a href="../html/log-in.html" id="logoutBtn">Logout</a>
</div>
</div>
</div>
<div className="content-area">
<h1 className="page-title">Profile</h1>
<div className="form-section">
<div className="form-row">
<div className="form-group">
<label htmlFor="fullName">Full Name</label>
<input id="fullName" type="text" value="Mr Admin"/>
</div>
<div className="form-group">
<label htmlFor="email">Email</label>
<input id="email" type="email" value="demo@qtecsolution.net"/>
</div>
</div>
<div className="profile-image-section">
<label>Profile Image</label>
<div className="image-upload-container" id="imageUploadContainer" onClick="document.getElementById('imageInput').click()">
<div className="upload-placeholder" id="imagePlaceholder">
<div className="icon">
<img alt="Upload pic" src="../images/pic.png"/>
</div>
<div>Click to upload profile image</div>
<img className="profile-image hidden" id="profileImage" src=""/>
</div>
<input accept="image/*" className="hidden" id="imageInput" type="file"/>
<button className="change-image-btn hidden" id="changeImageBtn" onClick="document.getElementById('imageInput').click()">
                            Change Image
                        </button>
</div>
<div className="password-section">
<h3>Password change</h3>
<div className="form-row">
<div className="form-group">
<label htmlFor="currentPassword">Current password</label>
<input id="currentPassword" placeholder="Enter your password" type="password"/>
</div>
<div className="form-group">
<label htmlFor="newPassword">New password</label>
<input id="newPassword" placeholder="New password" type="password"/>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="confirmPassword">Confirm password</label>
<input id="confirmPassword" placeholder="Confirm password" type="password"/>
</div>
<div className="form-group">
</div>
</div>
</div>
<button className="update-btn" onClick="updateProfile()">Update</button>
</div>
</div>
</div>
<div className="overlay" id="overlay"></div>
<script src="../js/script.js"></script>
</div></body>
</html>
  </>
);

export default Profile;
