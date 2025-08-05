import React from 'react';

const Edit = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Update Product</title>
<link href="../css/dashboard.css" rel="stylesheet"/>
<style>

    .main-content {
      margin-left: 240px;
      flex: 1;
      background: white;
    }

    .top-header {
      background: white;
      padding: 20px 30px;
      border-bottom: 1px solid #e1e5e9;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .hamburger-menu {
      display: none;
      background: none;
      border: none;
      font-size: 18px;
      cursor: pointer;
      color: #666;
    }

    .page-title {
      font-size: 28px;
      font-weight: 600;
      color: #333;
      margin: 0;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .pos-button {
      background: #6c7ae0;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }

    .pos-button:hover {
      background: #5a67d8;
    }

    .settings-icon {
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      color: #666;
      padding: 8px;
    }

    .user-dropdown-container {
      position: relative;
    }

    .user-menu {
      background: none;
      border: none;
      font-size: 14px;
      cursor: pointer;
      color: #666;
      padding: 8px 12px;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }

    .user-menu:hover {
      background: #f8f9fa;
    }

    .user-dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      min-width: 120px;
      display: none;
      z-index: 1000;
    }

    .user-dropdown.show {
      display: block;
    }

    .user-dropdown a {
      display: block;
      padding: 10px 15px;
      color: #333;
      text-decoration: none;
      font-size: 14px;
      transition: background-color 0.3s ease;
    }

    .user-dropdown a:hover {
      background: #f8f9fa;
    }

    .content-area {
      padding: 30px;
      background: white;
      min-height: calc(100vh - 80px);
    }

    .form-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-bottom: 25px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-group.full-width {
      grid-column: 1 / -1;
    }

    .form-group label {
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
      font-size: 14px;
    }

    .required {
      color: #e74c3c;
    }

    .form-group input[type="text"],
    .form-group input[type="number"],
    .form-group input[type="date"],
    .form-group select,
    .form-group textarea {
      padding: 12px 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      transition: all 0.3s ease;
      background: white;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #6c7ae0;
      box-shadow: 0 0 0 3px rgba(108, 122, 224, 0.1);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 100px;
      font-family: inherit;
    }

    .image-upload-area {
      border: 2px dashed #ddd;
      border-radius: 8px;
      padding: 40px 20px;
      text-align: center;
      background: #fafafa;
      position: relative;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .image-upload-area:hover {
      border-color: #6c7ae0;
      background: #f8f9ff;
    }

    .image-upload-area.has-image {
      border-color: #6c7ae0;
      background: #f8f9ff;
    }

    .image-preview {
      max-width: 150px;
      max-height: 150px;
      border-radius: 8px;
      margin-bottom: 10px;
      object-fit: cover;
      display: none;
    }

    .image-preview.show {
      display: block;
    }

    .upload-text {
      color: #666;
      font-size: 14px;
    }

    .file-input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    .checkbox-container {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;
    }

    .checkbox-container input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: #6c7ae0;
    }

    .checkbox-container label {
      margin: 0;
      color: #333;
      font-weight: 500;
      cursor: pointer;
    }

    .update-btn {
      background: #6c7ae0;
      color: white;
      padding: 14px 35px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(108, 122, 224, 0.2);
    }

    .update-btn:hover {
      background: #5a67d8;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(108, 122, 224, 0.3);
    }

    .update-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    .success-message, .error-message {
      padding: 12px 15px;
      border-radius: 6px;
      margin-bottom: 20px;
      display: none;
    }

    .success-message {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .error-message {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    .success-message.show, .error-message.show {
      display: block;
    }

    .footer {
      padding: 20px 30px;
      color: #999;
      font-size: 12px;
      background: #f8f9fa;
      border-top: 1px solid #e1e5e9;
      text-align: center;
      margin-top: auto;
    }

    .remove-image {
      position: absolute;
      top: 5px;
      right: 5px;
      background: #e74c3c;
      color: white;
      border: none;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      cursor: pointer;
      font-size: 14px;
      display: none;
    }

    .remove-image.show {
      display: block;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .sidebar {
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
      
      .sidebar.show {
        transform: translateX(0);
      }
      
      .main-content {
        margin-left: 0;
        width: 100%;
      }
      
      .hamburger-menu {
        display: block;
      }
      
      .form-row {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      .content-area {
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
<h1 className="page-title">Transactions Sale</h1>
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
<div className="content-area">
<div className="form-container">
<div className="success-message" id="successMessage">
            Product updated successfully!
          </div>
<div className="error-message" id="errorMessage">
            Please fill in all required fields correctly.
          </div>
<form id="productUpdateForm">
<div className="form-row">
<div className="form-group">
<label htmlFor="productName">Name <span className="required">*</span></label>
<input id="productName" name="name" required="" type="text" value="Box"/>
</div>
<div className="form-group">
<label htmlFor="productSku">Sku <span className="required">*</span></label>
<input id="productSku" name="sku" required="" type="text" value="4509"/>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="productBrand">Brand <span className="required">*</span></label>
<select id="productBrand" name="brand" required="">
<option value="">Select Brand</option>
<option selected="" value="cream-biscuits">Cream Biscuits</option>
<option value="other-brand">Other Brand</option>
</select>
</div>
<div className="form-group">
<label htmlFor="productCategory">Category <span className="required">*</span></label>
<select id="productCategory" name="category" required="">
<option value="">Select Category</option>
<option selected="" value="meat-fish">Meat &amp; Fish</option>
<option value="other-category">Other Category</option>
</select>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="productPrice">Price <span className="required">*</span></label>
<input id="productPrice" name="price" required="" step="0.01" type="number" value="4000.00"/>
</div>
<div className="form-group">
<label htmlFor="productUnit">Unit <span className="required">*</span></label>
<select id="productUnit" name="unit" required="">
<option value="">Select Unit</option>
<option selected="" value="piece">Piece (pcs)</option>
<option value="kg">Kilogram (kg)</option>
<option value="set">Set</option>
</select>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="discountType">Discount Type</label>
<select id="discountType" name="discountType">
<option selected="" value="percentage">Percentage</option>
<option value="fixed">Fixed Amount</option>
</select>
</div>
<div className="form-group">
<label htmlFor="discountAmount">Discount Amount</label>
<input id="discountAmount" name="discountAmount" step="0.01" type="number" value="2.00"/>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="purchasePrice">Purchase Price <span className="required">*</span></label>
<input id="purchasePrice" name="purchasePrice" required="" step="0.01" type="number" value="4000.00"/>
</div>
<div className="form-group">
<label htmlFor="productImage">Image</label>
<div className="image-upload-area" id="imageUploadArea">
<img alt="Preview" className="image-preview" id="imagePreview" src=""/>
<button className="remove-image" id="removeImageBtn" type="button">×</button>
<div className="upload-text" id="uploadText">
                    📷<br/>
                    Click to upload image or drag and drop
                  </div>
<input accept="image/*" className="file-input" id="imageInput" type="file"/>
</div>
</div>
</div>
<div className="form-row">
<div className="form-group full-width">
<label htmlFor="description">Description</label>
<textarea id="description" name="description" placeholder="Enter product description...">Xjjshsk</textarea>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="expireDate">Expire Date</label>
<input id="expireDate" name="expireDate" type="date" value="2025-07-16"/>
</div>
<div className="form-group">
<!-- Empty column for layout -->
</div>
</div>
<div className="checkbox-container">
<input checked="" id="activeStatus" name="active" type="checkbox"/>
<label htmlFor="activeStatus">Active</label>
</div>
<button className="update-btn" id="updateBtn" type="submit">
              Update Product
            </button>
</form>
</div>
</div>
<div className="footer">
        © 2025 saad All rights reserved.
      </div>
</main>
</div>
<script>
    // Sidebar functionality
    document.addEventListener('DOMContentLoaded', function() {
      // Sidebar collapsible functionality
      const collapsibleLinks = document.querySelectorAll('.nav-link.collapsible');
      collapsibleLinks.forEach(link => {
        link.addEventListener('click', function() {
          const targetId = this.getAttribute('data-target');
          const submenu = document.getElementById(targetId);
          
          if (submenu) {
            submenu.classList.toggle('show');
            this.classList.toggle('open');
          }
        });
      });

      // Hamburger menu
      const hamburgerBtn = document.getElementById('hamburgerBtn');
      const sidebar = document.getElementById('sidebar');
      hamburgerBtn?.addEventListener('click', function() {
        sidebar.classList.toggle('show');
      });

      // User dropdown
      const userMenuBtn = document.getElementById('userMenuBtn');
      const userDropdown = document.getElementById('userDropdown');
      userMenuBtn?.addEventListener('click', function(e) {
        e.stopPropagation();
        userDropdown.classList.toggle('show');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function() {
        userDropdown?.classList.remove('show');
      });

      // Fullscreen button
      const fullscreenBtn = document.getElementById('fullscreenBtn');
      fullscreenBtn?.addEventListener('click', function() {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      });

      // Image upload functionality
      const imageInput = document.getElementById('imageInput');
      const imagePreview = document.getElementById('imagePreview');
      const imageUploadArea = document.getElementById('imageUploadArea');
      const uploadText = document.getElementById('uploadText');
      const removeImageBtn = document.getElementById('removeImageBtn');

      imageInput?.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.classList.add('show');
            uploadText.style.display = 'none';
            removeImageBtn.classList.add('show');
            imageUploadArea.classList.add('has-image');
          };
          reader.readAsDataURL(file);
        }
      });

      removeImageBtn?.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        imagePreview.src = '';
        imagePreview.classList.remove('show');
        uploadText.style.display = 'block';
        removeImageBtn.classList.remove('show');
        imageUploadArea.classList.remove('has-image');
        imageInput.value = '';
      });

      // Drag and drop functionality
      imageUploadArea?.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.borderColor = '#6c7ae0';
        this.style.background = '#f8f9ff';
      });

      imageUploadArea?.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.style.borderColor = '#ddd';
        this.style.background = '#fafafa';
      });

      imageUploadArea?.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.borderColor = '#ddd';
        this.style.background = '#fafafa';
        
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('image/')) {
          imageInput.files = files;
          const event = new Event('change', { bubbles: true });
          imageInput.dispatchEvent(event);
        }
      });

      // Form validation and submission
      const form = document.getElementById('productUpdateForm');
      const updateBtn = document.getElementById('updateBtn');
      const successMessage = document.getElementById('successMessage');
      const errorMessage = document.getElementById('errorMessage');

      form?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Hide previous messages
        successMessage?.classList.remove('show');
        errorMessage?.classList.remove('show');

        // Basic validation
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            field.style.borderColor = '#e74c3c';
            isValid = false;
          } else {
            field.style.borderColor = '#ddd';
          }
        });

        if (!isValid) {
          errorMessage?.classList.add('show');
          errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }

        // Simulate form submission
        updateBtn.disabled = true;
        updateBtn.textContent = 'Updating...';

        setTimeout(() => {
          updateBtn.disabled = false;
          updateBtn.textContent = 'Update Product';
          successMessage?.classList.add('show');
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Auto-hide success message after 5 seconds
          setTimeout(() => {
            successMessage?.classList.remove('show');
          }, 5000);
        }, 2000);
      });
  });
  </script>
<script src="../js/script.js"></script>
</body>
</html>
  </>
);

export default Edit;
