import React from 'react';

const Editcategory = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Update Category - salman</title>
<link href="../css/brand.css" rel="stylesheet"/>
<style>
        .top-header {
            background-color: white;
            padding: 15px 30px;
            border-bottom: 1px solid #e9ecef;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .hamburger-menu {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            color: #6c757d;
        }

        .page-title {
            font-size: 24px;
            font-weight: 600;
            color: #2c3e50;
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .pos-button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .settings-icon {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            color: #6c757d;
        }

        .user-menu {
            background: none;
            border: none;
            cursor: pointer;
            color: #6c757d;
            font-size: 14px;
        }

        .edit-content {
            padding: 30px;
        }

        .content-header {
            margin-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .back-btn {
            background-color: #6c757d;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            transition: background-color 0.3s;
        }

        .back-btn:hover {
            background-color: #5a6268;
        }

        .form-container {
            background-color: white;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group.full-width {
            grid-column: 1 / -1;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #2c3e50;
            font-size: 14px;
        }

        .required {
            color: #e74c3c;
        }

        .form-group input[type="text"],
        .form-group textarea {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e9ecef;
            border-radius: 6px;
            font-size: 14px;
            transition: all 0.3s;
            font-family: inherit;
        }

        .form-group input[type="text"]:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }

        .image-upload-section {
            border: 2px dashed #dee2e6;
            border-radius: 8px;
            padding: 30px;
            text-align: center;
            background-color: #f8f9fa;
            transition: all 0.3s;
        }

        .image-upload-section:hover {
            border-color: #007bff;
            background-color: #f0f8ff;
        }

        .image-preview {
            margin-bottom: 20px;
            min-height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .no-image-placeholder {
            color: #6c757d;
            text-align: center;
        }

        .image-icon {
            font-size: 48px;
            margin-bottom: 10px;
            opacity: 0.5;
        }

        .current-image {
            max-width: 200px;
            max-height: 150px;
            border-radius: 8px;
            object-fit: cover;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .upload-btn {
            background-color: #6c757d;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s;
        }

        .upload-btn:hover {
            background-color: #5a6268;
            transform: translateY(-1px);
        }

        .checkbox-group {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
        }

        .checkbox-label {
            display: flex;
            align-items: center;
            cursor: pointer;
            font-weight: 500;
            color: #2c3e50;
        }

        .checkbox-label input[type="checkbox"] {
            margin-right: 8px;
            width: 18px;
            height: 18px;
            accent-color: #007bff;
        }

        .form-actions {
            display: flex;
            gap: 15px;
            justify-content: flex-end;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid #f1f3f4;
        }

        .btn-cancel {
            background-color: #6c757d;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s;
        }

        .btn-cancel:hover {
            background-color: #5a6268;
            transform: translateY(-1px);
        }

        .btn-update {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s;
        }

        .btn-update:hover {
            background-color: #0056b3;
            transform: translateY(-1px);
        }

        .success-message {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #d4edda;
            color: #155724;
            padding: 15px 20px;
            border-radius: 8px;
            border: 1px solid #c3e6cb;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1001;
            animation: slideInRight 0.5s ease-out;
            max-width: 400px;
            font-weight: 500;
        }

        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }

            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .success-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        @media (max-width: 768px) {
            .sidebar {
                transform: translateX(-100%);
                transition: transform 0.3s;
            }

            .sidebar.open {
                transform: translateX(0);
            }

            .main-content {
                margin-left: 0;
            }

            .form-row {
                grid-template-columns: 1fr;
            }

            .edit-content {
                padding: 20px;
            }

            .form-container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
<div className="container">
<aside className="sidebar">
<div className="user-section">
<div className="user-avatar">
<span className="avatar-lock">🔒</span>
</div>
<span className="username">salman</span>
</div>
<nav className="sidebar-nav">
<a className="nav-link" href="../html/dashboard.html">
<span className="nav-icon">📊</span>
<span className="nav-text">Dashboard</span>
</a>
<a className="nav-link" href="../html/pos.html">
<span className="nav-icon">🛒</span>
<span className="nav-text">POS</span>
</a>
<div className="nav-link collapsible" onClick="toggleSubmenu('peopleSubmenu', this)">
<span className="nav-icon">👤</span>
<span className="nav-text">People</span>
<span className="nav-chevron">❮</span>
</div>
<div className="submenu" id="peopleSubmenu">
<a className="submenu-link" href="../html/customer.html" id="customerLink">
<span className="dot"></span>Customer
                    </a>
<a className="submenu-link" href="../html/supplier.html" id="supplierLink">
<span className="dot"></span>Supplier
                    </a>
</div>
<div className="nav-link collapsible" onClick="toggleSubmenu('productSubmenu', this)">
<span className="nav-icon">📦</span>
<span className="nav-text">Product</span>
<span className="nav-chevron">❮</span>
</div>
<div className="submenu" id="productSubmenu">
<a className="submenu-link" href="#"><span className="dot"></span>Product
                        List</a>
<a className="submenu-link" href="#"><span className="dot"></span>Product
                        Create</a>
<a className="submenu-link" href="#"><span className="dot"></span>Product
                        Import</a>
<a className="submenu-link" href="#"><span className="dot"></span>Brand</a>
<a className="submenu-link" href="#"><span className="dot"></span>Category</a>
<a className="submenu-link" href="#"><span className="dot"></span>Unit</a>
</div>
<div className="nav-link collapsible" onClick="toggleSubmenu('saleSubmenu', this)">
<span className="nav-icon">🏷️</span>
<span className="nav-text">Sale</span>
<span className="nav-chevron">❮</span>
</div>
<div className="submenu" id="saleSubmenu">
<a className="submenu-link" href="#"><span className="dot"></span>Sale
                        List</a>
</div>
<div className="nav-link collapsible" onClick="toggleSubmenu('purchaseSubmenu', this)">
<span className="nav-icon">🛍️</span>
<span className="nav-text">Purchase</span>
<span className="nav-chevron">❮</span>
</div>
<div className="submenu" id="purchaseSubmenu">
<a className="submenu-link" href="#"><span className="dot"></span>Purchase
                        List</a>
<a className="submenu-link" href="#"><span className="dot"></span>Purchase
                        Create</a>
</div>
<div className="nav-link collapsible" onClick="toggleSubmenu('reportsSubmenu', this)">
<span className="nav-icon">📈</span>
<span className="nav-text">Reports</span>
<span className="nav-chevron">❮</span>
</div>
<div className="submenu" id="reportsSubmenu">
<a className="submenu-link" href="#"><span className="dot"></span>Sales
                        Summary</a>
<a className="submenu-link" href="#"><span className="dot"></span>Sales</a>
<a className="submenu-link" href="#"><span className="dot"></span>Inventory</a>
</div>
</nav>
<div className="settings-section">
<div className="settings-header">SETTINGS</div>
<div className="nav-link collapsible" onClick="toggleSubmenu('websiteSubmenu', this)">
<span className="nav-icon">⚙️</span>
<span className="nav-text">Website Settings</span>
<span className="nav-chevron">❮</span>
</div>
<div className="submenu" id="websiteSubmenu">
<a className="submenu-link" href="#">
<span>⚙️</span>General Setting
                    </a>
<a className="submenu-link" href="#">
<span className="coin-icon">💵</span>Currency
                    </a>
<div className="nav-link collapsible inner" onClick="toggleSubmenu('rulesSubmenu', this)">
<span>🛡️</span>
<span className="nav-text">Rules &amp; Permission</span>
<span className="nav-chevron">❮</span>
</div>
<div className="submenu" id="rulesSubmenu">
<a className="submenu-link" href="#"> <span>📜</span>Rules </a>
<a className="submenu-link" href="#"> <span>🔐</span>Permission </a>
</div>
<a className="submenu-link" href="#">
<span>👥</span>User Management
                    </a>
</div>
</div>
</aside>
<main className="main-content">
<header className="top-header">
<div className="header-left">
<button className="hamburger-menu">☰</button>
<h1 className="page-title"> Edit Category</h1>
</div>
<div className="header-right">
<button className="pos-button" onClick="window.location.href='pos.html'">
                        🛒 POS
                    </button>
<button className="settings-icon" id="fullscreenBtn">⛶</button>
<div className="user-dropdown-container">
<button className="user-menu" id="userMenuBtn">👤 ▼</button>
<div className="user-dropdown" id="userDropdown">
<a href="../html/profile.html" id="profileBtn">Profile</a>
<a href="../html/log-in.html" id="logoutBtn">Logout</a>
</div>
</div>
</div>
</header>
<div className="form-container">
<form id="updateBrandForm">
<div className="form-row">
<div className="form-group">
<label htmlFor="brandName">Name <span className="required">*</span></label>
<input id="brandName" name="brandName" placeholder="Enter brand name" required="" type="text"/>
</div>
<div className="form-group">
<label>Status</label>
<div className="checkbox-group">
<label className="checkbox-label">
<input checked="" id="brandActive" name="brandActive" type="checkbox"/>
                                    Active
                                </label>
</div>
</div>
</div>
<div className="form-group full-width">
<label htmlFor="brandImage">Image</label>
<div className="image-upload-section">
<div className="image-preview" id="imagePreview">
<div className="no-image-placeholder">
<div className="image-icon">🖼️</div>
<div>NO IMAGE AVAILABLE</div>
</div>
</div>
<input accept="image/*" id="brandImageInput" onChange="handleImageUpload(event)" style="display: none;" type="file"/>
<button className="upload-btn" onClick="document.getElementById('brandImageInput').click()" type="button">
                                Choose File
                            </button>
</div>
</div>
<div className="form-group full-width">
<label htmlFor="brandDescription">Description</label>
<textarea id="brandDescription" name="brandDescription" placeholder="Enter description" rows="4"></textarea>
</div>
<div className="form-actions">
<button className="btn-cancel" onClick="cancelEdit()" type="button">Cancel</button>
<button className="btn-update" type="submit">Update</button>
</div>
</form>
</div>
</main></div>


<script>


        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }
        let currentBrand = {
            id: 1,
            name: 'ALEPTEX',
            description: 'Premium textile brand',
            image: null,
            status: 'Active'
        };
        function initializeForm() {
            document.getElementById('brandName').value = currentBrand.name;
            document.getElementById('brandDescription').value = currentBrand.description || '';
            document.getElementById('brandActive').checked = currentBrand.status === 'Active';

            // Handle image preview
            const imagePreview = document.getElementById('imagePreview');
            if (currentBrand.image) {
                imagePreview.innerHTML = `<img src="${currentBrand.image}" class="current-image" alt="${currentBrand.name}">`;
            } else {
                imagePreview.innerHTML = `
                    <div class="no-image-placeholder">
                        <div class="image-icon">🖼️</div>
                        <div>NO IMAGE AVAILABLE</div>
                    </div>
                `;
            }
        }
        function handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert('Please select a valid image file.');
                    return;
                }
                if (file.size > 5 * 1024 * 1024) {
                    alert('Image size should be less than 5MB.');
                    return;
                }

                const reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById('imagePreview').innerHTML =
                        `<img src="${e.target.result}" class="current-image" alt="Preview">`;
                };
                reader.readAsDataURL(file);

                currentBrand.newImageFile = file;
            }
        }

        document.getElementById('updateBrandForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('brandName').value.trim();
            const description = document.getElementById('brandDescription').value.trim();
            const isActive = document.getElementById('brandActive').checked;

            if (!name) {
                alert('Brand name is required!');
                document.getElementById('brandName').focus();
                return;
            }
            const updateBtn = document.querySelector('.btn-update');
            const originalText = updateBtn.textContent;
            updateBtn.textContent = 'Updating...';
            updateBtn.disabled = true;

            setTimeout(() => {

                currentBrand.name = name;
                currentBrand.description = description;
                currentBrand.status = isActive ? 'Active' : 'Inactive';

                if (currentBrand.newImageFile) {
                    currentBrand.image = URL.createObjectURL(currentBrand.newImageFile);
                }

                let brands = JSON.parse(localStorage.getItem('brands')) || [];


                const index = brands.findIndex(b => b.id === currentBrand.id);
                if (index !== -1) {
                    brands[index] = currentBrand;
                    localStorage.setItem('brands', JSON.stringify(brands));
                }

                showSuccessMessage(`Brand "${name}" has been updated successfully!`);

                updateBtn.textContent = originalText;
                updateBtn.disabled = false;

                setTimeout(() => {
                    window.location.href = 'category.html';
                }, 2000);
            }, 1000);
        });

        function cancelEdit() {
            if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
                window.location.href = 'category.html';
            }
        }
        function showSuccessMessage(message) {
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.innerHTML = `
                <div class="success-content">
                    <span style="font-size: 18px;">✅</span>
                    <span>${message}</span>
                </div>
            `;

            document.body.appendChild(successDiv);

            setTimeout(() => {
                successDiv.style.animation = 'slideOutRight 0.5s ease-out';
                setTimeout(() => successDiv.remove(), 500);
            }, 3000);
        }
        function toggleSubmenu(submenuId, element) {
            const submenu = document.getElementById(submenuId);
            const chevron = element.querySelector('.nav-chevron');

            submenu.classList.toggle('open');
            chevron.style.transform = submenu.classList.contains('open') ? 'rotate(-90deg)' : 'rotate(0deg)';
        }

        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('open');
        }

        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }



        window.addEventListener('beforeunload', function (e) {
            const form = document.getElementById('updateBrandForm');
            const formData = new FormData(form);
            let hasChanges = false;

            if (document.getElementById('brandName').value !== currentBrand.name ||
                document.getElementById('brandDescription').value !== (currentBrand.description || '') ||
                document.getElementById('brandActive').checked !== (currentBrand.status === 'Active') ||
                currentBrand.newImageFile) {
                hasChanges = true;
            }

        });
    </script>
<script src="../js/script.js"></script>
</body>
</html>
  </>
);

export default Editcategory;
