import React from 'react';

const Invoice = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Invoice #164</title>
<link href="../css/dashboard.css" rel="stylesheet"/>
<style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: white;
      color: #000;
    }

    .invoice-wrapper {
      padding: 30px;
      background: white;
    }

    .invoice-header,
    .invoice-footer {
      text-align: center;
    }

    .invoice-details {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }

    table,
    th,
    td {
      border: 1px solid #000;
    }

    th,
    td {
      padding: 10px;
      text-align: center;
    }

    .totals {
      float: right;
      width: 300px;
    }

    .totals table {
      border: none;
    }

    .totals td {
      border: none;
      text-align: right;
      padding: 4px 0;
    }

    .thankyou {
      margin-top: 30px;
      font-size: 14px;
    }

    .print-button {
      display: block;
      margin: 30px auto;
      padding: 10px 20px;
      background-color: #28a745;
      color: white;
      border: none;
      font-size: 16px;
      cursor: pointer;
    }

    @media print {
      .print-button,
      .sidebar,
      .top-header {
        display: none !important;
      }

      .main-content {
        margin-left: 0;
        padding: 0;
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
<h1 className="page-title">Invoice</h1>
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
<div className="invoice-wrapper">
<div className="invoice-header">
<img alt="Logo" src="../images/invoice.png" width="50"/>
<h2>Invoice</h2>
<p>Date: 16/07/2025</p>
</div>
<div className="invoice-details">
<div>
<strong>To:</strong><br/>
<strong>Name:</strong> Walking Customer<br/>
            Address: N/A<br/>
            Phone: 012345678
          </div>
<div>
<strong>From:</strong><br/>
<strong>Name:</strong> saad<br/>
            Address: Doha, Qatar<br/>
            Phone: +91454554<br/>
            Email: qpos@gmail.com
          </div>
<div>
<strong>Info:</strong><br/>
            Sale ID: #164<br/>
            Sale Date: 16/07/2025
          </div>
</div>
<table>
<thead>
<tr>
<th>SN</th>
<th>Product</th>
<th>Quantity</th>
<th>Price Rs</th>
<th>Subtotal Rs</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Product A</td>
<td>1 pcs</td>
<td>
                180.00<br/>
<del>200</del>
</td>
<td>180</td>
</tr>
<tr>
<td>2</td>
<td>Product B</td>
<td>1 pcs</td>
<td>
                270.00<br/>
<del>300</del>
</td>
<td>270</td>
</tr>
</tbody>
</table>
<div className="totals">
<table>
<tr>
<td><strong>Subtotal:</strong></td>
<td>Rs 450.00</td>
</tr>
<tr>
<td><strong>Discount:</strong></td>
<td>Rs 0.00</td>
</tr>
<tr>
<td><strong>Total:</strong></td>
<td>Rs 450.00</td>
</tr>
<tr>
<td><strong>Paid:</strong></td>
<td>Rs 0.00</td>
</tr>
<tr>
<td><strong>Due:</strong></td>
<td>Rs 450.00</td>
</tr>
</table>
</div>
<p className="thankyou">Thank You For Shopping With Us. Please Come Again.</p>
<button className="print-button" onClick="handlePrint()">Print</button>
</div>
</main>
</div>
<script>
    function handlePrint() {
      window.onafterprint = () => {
        window.close();
      };
      window.print();
    }

    window.onload = () => {
      setTimeout(() => {
        handlePrint();
      }, 500);
    };
  </script>
<script src="../js/script.js"></script>
</body>
</html>
  </>
);

export default Invoice;
