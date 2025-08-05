import React from 'react';

const Productlist = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Product Management</title>
<link href="../css/dashboard.css" rel="stylesheet"/>
<style>
    .action-container {
      position: relative;
    }

    .dropdown-menu {
      display: none;
      position: absolute;
      left: 0;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
      z-index: 999;
      min-width: 100px;
      padding: 5px 0;
    }

    .dropdown-menu button {
      display: block;
      width: 100%;
      padding: 8px 12px;
      background: none;
      border: none;
      text-align: left;
      font-size: 14px;
      color: #333;
      cursor: pointer;
    }

    .dropdown-menu button:hover {
      background-color: #f0f0f0;
    }

    .main-content {
      margin-left: 240px;
      flex: 1;
      padding: 0;
    }

    .header {
      background: white;
      padding: 20px 30px;
      border-bottom: 1px solid #e1e5e9;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header h1 {
      font-size: 28px;
      font-weight: 600;
      color: #333;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .pos-btn {
      background: #6c7ae0;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      cursor: pointer;
    }

    .add-btn {
      background: #6c7ae0;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .content-area {
      padding: 30px;
      background: white;
      margin: 0;
      min-height: calc(100vh - 80px);
    }

    .table-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .show-entries {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    }

    .show-entries select {
      padding: 5px 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .search-box {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    }

    .search-box input {
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 200px;
    }

    .product-table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 8px;
      overflow: scroll;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .product-table th {
      background: #f8f9fa;
      padding: 15px 12px;
      text-align: left;
      font-weight: 600;
      color: #555;
      font-size: 14px;
      border-bottom: 1px solid #e1e5e9;
    }

    .product-table td {
      padding: 15px 12px;
      border-bottom: 1px solid #f1f3f4;
      font-size: 14px;
    }

    .product-table tr:hover {
      background: #f8f9fa;
    }

    .product-image {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 4px;
    }

    .placeholder-img {
      width: 40px;
      height: 40px;
      background: #f0f0f0;
      border: 1px solid #ddd;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      color: #999;
      text-align: center;
    }

    .price {
      font-weight: 500;
    }

    .original-price {
      color: #999;
      text-decoration: line-through;
      font-size: 12px;
      display: block;
    }

    .status {
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
    }

    .status.active {
      background: #e3f2fd;
      color: #1976d2;
    }

    .status.inactive {
      background: #ffebee;
      color: #d32f2f;
    }

    .action-btn {
      background: #6c7ae0;
      color: white;
      padding: 6px 16px;
      border: none;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
    }

    .pagination {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #e1e5e9;
    }

    .pagination-info {
      font-size: 14px;
      color: #666;
    }

    .pagination-nav {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .page-btn {
      padding: 8px 12px;
      border: 1px solid #ddd;
      background: white;
      cursor: pointer;
      border-radius: 4px;
      font-size: 14px;
    }

    .page-btn.active {
      background: #6c7ae0;
      color: white;
      border-color: #6c7ae0;
    }

    .page-btn:hover {
      background: #f0f0f0;
    }

    .page-btn.active:hover {
      background: #5a67d8;
    }

    .footer {
      padding: 20px 30px;
      color: #999;
      font-size: 12px;
      background: white;
      border-top: 1px solid #e1e5e9;
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
<div className="table-controls">
<div className="show-entries">
            Show
            <select>
<option>10</option>
<option>25</option>
<option>50</option>
</select>
            entries
          </div>
<div className="search-box">
            Search: <input placeholder="" type="text"/>
</div>
</div>
<table className="product-table">
<thead>
<tr>
<th>#</th>
<th></th>
<th>Name</th>
<th>Price</th>
<th>Stock</th>
<th>Created</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>
<tbody id="customerTableBody">
<tr>
<td>1</td>
<td>
<div style="width:40px;height:40px;background:#ff6b6b;border-radius:4px;"></div>
</td>
<td>Box</td>
<td>
<div className="price">3920</div>
<span className="original-price">4000.00</span>
</td>
<td>0 pcs</td>
<td>17 Jul, 2025</td>
<td><span className="status active">Active</span></td>
<td className="action-container">
<button className="action-btn" onClick="toggleDropdown(this)">Action ▼</button>
<div className="dropdown-menu">
<button onClick="handleEdit()">Edit</button>
<button onClick="handleDelete(this)">Delete</button>
<button onClick="handlePurchase()">Purchase</button>
</div>
</td>
</tr>
<tr>
<td>2</td>
<td>
<div className="placeholder-img">NO IMAGE AVAILABLE</div>
</td>
<td>yoooh</td>
<td>500</td>
<td>0 pcs</td>
<td>16 Jul, 2025</td>
<td><span className="status active">Active</span></td>
<td className="action-container">
<button className="action-btn" onClick="toggleDropdown(this)">Action ▼</button>
<div className="dropdown-menu">
<button onClick="handleEdit()">Edit</button>
<button onClick="handleDelete(this)">Delete</button>
<button onClick="handlePurchase()">Purchase</button>
</div>
</td>
</tr>
<tr>
<td>3</td>
<td>
<div className="placeholder-img">NO IMAGE AVAILABLE</div>
</td>
<td>vivo y 20</td>
<td>
<div className="price">19000</div>
<span className="original-price">20000.00</span>
</td>
<td>0 pcs</td>
<td>13 Jul, 2025</td>
<td><span className="status active">Active</span></td>
<td className="action-container">
<button className="action-btn" onClick="toggleDropdown(this)">Action ▼</button>
<div className="dropdown-menu">
<button onClick="handleEdit()">Edit</button>
<button onClick="handleDelete(this)">Delete</button>
<button onClick="handlePurchase()">Purchase</button>
</div>
</td>
</tr>
<tr>
<td>4</td>
<td>
<div style="width:40px;height:40px;background:black;border-radius:4px;"></div>
</td>
<td>vivo y 20</td>
<td>
<div className="price">19000</div>
<span className="original-price">20000.00</span>
</td>
<td>0 pcs</td>
<td>13 Jul, 2025</td>
<td><span className="status active">Active</span></td>
<td className="action-container">
<button className="action-btn" onClick="toggleDropdown(this)">Action ▼</button>
<div className="dropdown-menu">
<button onClick="handleEdit()">Edit</button>
<button onClick="handleDelete(this)">Delete</button>
<button onClick="handlePurchase()">Purchase</button>
</div>
</td>
</tr>
<tr>
<td>5</td>
<td>
<div className="placeholder-img">NO IMAGE AVAILABLE</div>
</td>
<td>acer travelmate</td>
<td>
<div className="price">12500</div>
<span className="original-price">25000.00</span>
</td>
<td>0 pcs</td>
<td>11 Jul, 2025</td>
<td><span className="status active">Active</span></td>
<td className="action-container">
<button className="action-btn" onClick="toggleDropdown(this)">Action ▼</button>
<div className="dropdown-menu">
<button onClick="handleEdit()">Edit</button>
<button onClick="handleDelete(this)">Delete</button>
<button onClick="handlePurchase()">Purchase</button>
</div>
</td>
</tr>
<tr>
<td>6</td>
<td>
<div className="placeholder-img">NO IMAGE AVAILABLE</div>
</td>
<td>Product A</td>
<td>
<div className="price">180</div>
<span className="original-price">200.00</span>
</td>
<td>73 pcs</td>
<td>09 Jul, 2025</td>
<td><span className="status active">Active</span></td>
<td className="action-container">
<button className="action-btn" onClick="toggleDropdown(this)">Action ▼</button>
<div className="dropdown-menu">
<button onClick="handleEdit()">Edit</button>
<button onClick="handleDelete(this)">Delete</button>
<button onClick="handlePurchase()">Purchase</button>
</div>
</td>
</tr>
<tr>
<td>7</td>
<td>
<div className="placeholder-img">NO IMAGE AVAILABLE</div>
</td>
<td>Product B</td>
<td>
<div className="price">270</div>
<span className="original-price">300.00</span>
</td>
<td>31 pcs</td>
<td>09 Jul, 2025</td>
<td><span className="status active">Active</span></td>
<td className="action-container">
<button className="action-btn" onClick="toggleDropdown(this)">Action ▼</button>
<div className="dropdown-menu">
<button onClick="handleEdit()">Edit</button>
<button onClick="handleDelete(this)">Delete</button>
<button onClick="handlePurchase()">Purchase</button>
</div>
</td>
</tr>
<tr>
<td>8</td>
<td>
<div className="placeholder-img">NO IMAGE AVAILABLE</div>
</td>
<td>Product C</td>
<td>
<div className="price">450</div>
<span className="original-price">500.00</span>
</td>
<td>30 set</td>
<td>09 Jul, 2025</td>
<td><span className="status inactive">Inactive</span></td>
<td className="action-container">
<button className="action-btn" onClick="toggleDropdown(this)">Action ▼</button>
<div className="dropdown-menu">
<button onClick="handleEdit()">Edit</button>
<button onClick="handleDelete(this)">Delete</button>
<button onClick="handlePurchase()">Purchase</button>
</div>
</td>
</tr>
<tr>
<td>9</td>
<td>
<div className="placeholder-img">NO IMAGE AVAILABLE</div>
</td>
<td>Product D</td>
<td>
<div className="price">45</div>
<span className="original-price">50.00</span>
</td>
<td>197 kg</td>
<td>09 Jul, 2025</td>
<td><span className="status active">Active</span></td>
<td className="action-container">
<button className="action-btn" onClick="toggleDropdown(this)">Action ▼</button>
<div className="dropdown-menu">
<button onClick="handleEdit()">Edit</button>
<button onClick="handleDelete(this)">Delete</button>
<button onClick="handlePurchase()">Purchase</button>
</div>
</td>
</tr>
<tr>
<td>10</td>
<td>
<div className="placeholder-img">NO IMAGE AVAILABLE</div>
</td>
<td>Product E</td>
<td>
<div className="price">102</div>
<span className="original-price">120.00</span>
</td>
<td>148 pcs</td>
<td>09 Jul, 2025</td>
<td><span className="status active">Active</span></td>
<td className="action-container">
<button className="action-btn" onClick="toggleDropdown(this)">Action ▼</button>
<div className="dropdown-menu">
<button onClick="handleEdit()">Edit</button>
<button onClick="handleDelete(this)">Delete</button>
<button onClick="handlePurchase()">Purchase</button>
</div>
</td>
</tr>
</tbody>
</table>
<div className="pagination">
<div className="pagination-info" id="pagination-info">
            Showing 1 to 10 of 51 entries
          </div>
<div className="pagination-nav" id="pagination-nav">
<button className="page-btn">Previous</button>
<button className="page-btn active">1</button>
<button className="page-btn">2</button>
<button className="page-btn">3</button>
<button className="page-btn">4</button>
<button className="page-btn">5</button>
<button className="page-btn">6</button>
<button className="page-btn">Next</button>
</div>
</div>
</div>
</main></div>
<script>



    function toggleDropdown(button) {
      const dropdown = button.nextElementSibling;

      // Close other open dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== dropdown) {
          menu.style.display = 'none';
        }
      });
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.action-container')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.style.display = 'none';
        });
      }
    });

    function handleEdit() {
      window.location.href = 'edit.html';
    }

    function handleDelete(btn) {
      const row = btn.closest("tr");
      if (row) {
        const confirmed = confirm("Are you sure you want to delete this customer?");
        if (confirmed) {
          row.remove();
          updateTableInfo();
        }
      }

      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = "none";
      });
    }

    function handlePurchase() {
      alert("Purchase clicked");
    }

    function updateTableInfo() {
      const rows = document.querySelectorAll("tbody tr").length;
      const info = document.querySelector(".pagination-info");
      if (info) {
        info.textContent = `Showing 1 to ${Math.min(10, rows)} of ${rows} entries`;
      }
    }
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
<script src="../js/script.js"></script>
</body>
</html>
  </>
);

export default Productlist;
