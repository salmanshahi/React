import React from 'react';

const Createproduct = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Create Product | salman</title>
<link href="../css/dashboard.css" rel="stylesheet"/>
<style>
    .main-content {
      margin-left: 240px;
      flex: 1;
      background-color: #f8f9fa;
    }

    .header-bar {
      background: white;
      padding: 15px 30px;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header-left {
      display: flex;
      align-items: center;
    }

    .menu-toggle {
      background: none;
      border: none;
      font-size: 18px;
      color: #4a5568;
      cursor: pointer;
      margin-right: 15px;
    }

    .page-title {
      font-size: 24px;
      font-weight: 600;
      color: #2d3748;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .pos-button {
      background: #667eea;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .pos-button:hover {
      background: #5a67d8;
    }

    .header-icons {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-icon {
      width: 32px;
      height: 32px;
      border: none;
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #4a5568;
      border-radius: 4px;
    }

    .header-icon:hover {
      background: #f7fafc;
    }

    .notification-popup {
      position: absolute;
      top: 60px;
      right: 30px;
      background: #2d3748;
      color: white;
      padding: 12px 16px;
      border-radius: 6px;
      font-size: 14px;
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .notification-popup::before {
      content: '';
      position: absolute;
      top: -6px;
      right: 20px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #2d3748;
    }

    .form-container {
      background: white;
      margin: 0;
      padding: 30px;
      min-height: calc(100vh - 70px);
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

    label {
      font-weight: 500;
      color: #2d3748;
      margin-bottom: 8px;
      font-size: 14px;
    }

    .required {
      color: #e53e3e;
    }

    input[type="text"],
    input[type="number"],
    input[type="date"],
    select,
    textarea {
      padding: 12px 16px;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      font-size: 14px;
      transition: border-color 0.2s;
      background: white;
    }

    input[type="text"]:focus,
    input[type="number"]:focus,
    input[type="date"]:focus,
    select:focus,
    textarea:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    input::placeholder,
    textarea::placeholder {
      color: #a0aec0;
    }

    select {
      cursor: pointer;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
      background-position: right 12px center;
      background-repeat: no-repeat;
      background-size: 16px;
      padding-right: 40px;
      appearance: none;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    .image-upload {
      border: 2px dashed #e2e8f0;
      border-radius: 8px;
      padding: 60px 20px;
      text-align: center;
      background: #f8f9fa;
      cursor: pointer;
      transition: all 0.2s;
    }

    .image-upload:hover {
      border-color: #667eea;
      background: #f0f4ff;
    }

    .upload-icon {
      width: 48px;
      height: 48px;
      background: #667eea;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
      color: white;
      font-size: 20px;
    }

    .upload-text {
      color: #667eea;
      font-weight: 500;
      font-size: 14px;
    }

    .checkbox-group {
      display: flex;
      align-items: center;
      margin: 20px 0;
    }

    .checkbox-group input[type="checkbox"] {
      width: 18px;
      height: 18px;
      margin-right: 8px;
      cursor: pointer;
    }

    .checkbox-group label {
      margin: 0;
      cursor: pointer;
      font-weight: normal;
    }

    .btn-create {
      background: #667eea;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .btn-create:hover {
      background: #5a67d8;
    }

    .footer {
      margin-top: 40px;
      text-align: center;
      color: #718096;
      font-size: 12px;
    }

    .settings-section {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      margin-top: 20px;
      padding-top: 20px;
    }

    .settings-title {
      color: #4a5568;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 0 20px;
      margin-bottom: 10px;
    }

    .date-input-container {
      position: relative;
    }

    .date-icon {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #718096;
      pointer-events: none;
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
<a className="submenu-link" href="../html/productlist.html" id="productListLink"><span className="dot"></span>Product
            List</a>
<a className="submenu-link" href="../html/createproduct.html" id="productCreateLink"><span className="dot"></span>Product Create</a>
<a className="submenu-link" href="../html/importproduct.html" id="importProductLink"><span className="dot"></span>Product Import</a>
<a className="submenu-link" href="../html/brand.html" id="brandLink"><span className="dot"></span>Brand</a>
<a className="submenu-link" href="../html/category.html" id="categoryLink"><span className="dot"></span>Category</a>
<a className="submenu-link" href="../html/unit.html" id="unitLink"><span className="dot"></span>Unit</a>
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
<h1 className="page-title">Create Product</h1>
</div>
<div className="header-right">
<button className="pos-button" onClick="window.location.href='../html/pos.html'">
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
<form id="productForm">
<div className="form-row">
<div className="form-group">
<label htmlFor="name">Name <span className="required">*</span></label>
<input id="name" name="name" required="" type="text" value="Box"/>
</div>
<div className="form-group">
<label htmlFor="sku">Sku <span className="required">*</span></label>
<input id="sku" name="sku" required="" type="text" value="4509"/>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="brand">Brand <span className="required">*</span></label>
<select id="brand" name="brand" required="">
<option selected="" value="Chicken &amp; Poultry">Chicken &amp; Poultry</option>
<option value="Meat &amp; Fish">Meat &amp; Fish</option>
<option value="Dairy Products">Dairy Products</option>
<option value="Beverages">Beverages</option>
</select>
</div>
<div className="form-group">
<label htmlFor="category">Category <span className="required">*</span></label>
<select id="category" name="category" required="">
<option selected="" value="Meat &amp; Fish">Meat &amp; Fish</option>
<option value="Chicken &amp; Poultry">Chicken &amp; Poultry</option>
<option value="Dairy Products">Dairy Products</option>
<option value="Beverages">Beverages</option>
</select>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="price">Price <span className="required">*</span></label>
<input id="price" name="price" required="" type="text" value="63497"/>
</div>
<div className="form-group">
<label htmlFor="unit">Unit <span className="required">*</span></label>
<select id="unit" name="unit" required="">
<option selected="" value="Piece (pcs)">Piece (pcs)</option>
<option value="Kilogram (kg)">Kilogram (kg)</option>
<option value="Liter (l)">Liter (l)</option>
<option value="Gram (g)">Gram (g)</option>
</select>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="discountType">Discount Type</label>
<select id="discountType" name="discountType">
<option selected="" value="Fixed">Fixed</option>
<option value="Percentage">Percentage</option>
<option value="None">None</option>
</select>
</div>
<div className="form-group">
<label htmlFor="purchasePrice">Purchase Price <span className="required">*</span></label>
<input id="purchasePrice" name="purchasePrice" required="" type="text" value="234"/>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="discountAmount">Discount Amount</label>
<input id="discountAmount" name="discountAmount" type="text" value="234"/>
</div>
<div className="form-group">
<label htmlFor="image">Image</label>
<div className="image-upload" onClick="document.getElementById('imageFile').click()">
<div className="upload-icon">+</div>
<div className="upload-text">Upload Image</div>
</div>
<input accept="image/*" id="imageFile" name="imageFile" style="display: none;" type="file"/>
</div>
</div>
<div className="form-row">
<div className="form-group full-width">
<label htmlFor="description">Description</label>
<textarea id="description" name="description" placeholder="Enter description"></textarea>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="expireDate">Expire date</label>
<div className="date-input-container">
<input id="expireDate" name="expireDate" type="date" value="2025-07-10"/>
</div>
</div>
</div>
<div className="checkbox-group">
<input checked="" id="active" name="active" type="checkbox"/>
<label htmlFor="active">Active</label>
</div>
<button className="btn-create" type="submit">Create</button>
</form>
</div>
</main>
<script>
      function toggleNotification() {
        const notification = document.getElementById('notification');
        if (notification.style.display === 'none') {
          notification.style.display = 'block';
          setTimeout(() => {
            notification.style.display = 'none';
          }, 3000);
        } else {
          notification.style.display = 'none';
        }
      }
      document.getElementById('productForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const productData = {};

        for (let [key, value] of formData.entries()) {
          productData[key] = value;
        }
        productData.active = document.getElementById('active').checked;

        console.log('Product Created:', productData);
        alert('Product created successfully!');


      });
      document.getElementById('imageFile').addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const uploadArea = document.querySelector('.image-upload');
            uploadArea.innerHTML = `
                        <img src="${e.target.result}" style="max-width: 100%; max-height: 200px; border-radius: 4px;">
                        <div class="upload-text" style="margin-top: 10px;">Image uploaded</div>
                    `;
          };
          reader.readAsDataURL(file);
        }
      });
      document.getElementById('expireDate').addEventListener('focus', function () {
        this.type = 'date';
      });

      document.getElementById('expireDate').addEventListener('blur', function () {
        if (!this.value) {
          this.type = 'text';
        }
      });
      document.addEventListener('DOMContentLoaded', function () {
        const toggleBtn = document.querySelector('.menu-toggle');
        if (toggleBtn) {
          toggleBtn.addEventListener('click', function () {
            console.log('Menu toggle clicked');
          });
        } else {
          console.warn('Menu toggle button not found');
        }
      });

      document.addEventListener('DOMContentLoaded', function () {
        const path = window.location.pathname.toLowerCase();
        console.log('Current Path:', path);

        const productSubmenu = document.getElementById('productSubmenu');
        const links = {
          'productlist.html': document.getElementById('productListLink'),
          'createproduct.html': document.getElementById('productCreateLink'),
          'importproduct.html': document.getElementById('importProductLink'),
          'brand.html': document.getElementById('brandLink'),
          'category.html': document.getElementById('categoryLink'),
          'unit.html': document.getElementById('unitLink')
        };

        for (const [file, link] of Object.entries(links)) {
          if (path.includes(file)) {
            link?.classList.add('active');
            productSubmenu?.style.setProperty('display', 'block');
          }
        }
        Object.values(links).forEach(link => {
          link?.addEventListener('click', function () {
            Object.values(links).forEach(l => l?.classList.remove('active'));
            this.classList.add('active');
          });
        });
      });

    </script>
</div></body>
</html>
  </>
);

export default Createproduct;
