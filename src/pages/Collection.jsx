import React from 'react';

const Collection = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Collection</title>
<link href="../css/dashboard.css" rel="stylesheet"/>
<style>
.header h2 {
  font-size: 28px;
  margin-bottom: 1rem;
  color: #333;
}

.collection-box {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
}

.collection-row {
  margin-bottom: 1rem;
  font-size: 16px;
}

.collection-row strong {
  width: 100px;
  display: inline-block;
  color: #333;
}

#collectionForm label {
  display: block;
  margin: 1rem 0 0.5rem;
  font-weight: 600;
}

.required {
  color: red;
}

#collectionInput {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.submit-btn {
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: #8e9ff9;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #7486e0;
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
<h1 className="page-title">Invoice Receipt</h1>
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
<div className="main-content">
<div className="header">
<h2>Collection</h2>
</div>
<div className="collection-box">
<div className="collection-row">
<strong>Name</strong> <span id="customerName">Walking Customer</span>
</div>
<div className="collection-row">
<strong>Order</strong> <span id="orderId">#166</span>
</div>
<div className="collection-row">
<strong>Total</strong> <span id="totalAmount">540</span>
</div>
<div className="collection-row">
<strong>Due</strong> <span id="dueAmount">540</span>
</div>
<form id="collectionForm">
<label htmlFor="collectionInput">Collection Amount <span className="required">*</span></label>
<input id="collectionInput" required="" type="number"/>
<button className="submit-btn" type="submit">Submit</button>
</form>
</div>
</div>
<script>
  document.getElementById('collectionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const customerName = document.getElementById('customerName').textContent.trim();
    const orderId = document.getElementById('orderId').textContent.trim().replace('#', '');
    const totalAmount = document.getElementById('totalAmount').textContent.trim();
    const dueAmount = document.getElementById('dueAmount').textContent.trim();
    const collectionAmount = document.getElementById('collectionInput').value.trim();

    if (collectionAmount === '' || isNaN(collectionAmount) || Number(collectionAmount) <= 0) {
      alert('Please enter a valid collection amount.');
      return;
    }
    const params = new URLSearchParams({
      customer: customerName,
      saleId: orderId,
      total: totalAmount,
      due: dueAmount,
      collected: collectionAmount
    });

    window.location.href = `collectioninvoice.html?${params.toString()}`;
  });
</script>
<script src="../js/script.js"></script>
</main></div></body>
</html>
  </>
);

export default Collection;
