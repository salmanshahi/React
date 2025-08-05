import React from 'react';

const Posinvoice = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>POS Invoice</title>
<link href="../css/dashboard.css" rel="stylesheet"/>
<style>
    @page {
      size: 80mm auto;
      margin: 0;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #fff;
      color: #000;
    }

    .invoice-wrapper {
      width: 80mm;
      margin: auto;
      padding: 10px;
      border: 1px dashed #000;
      box-sizing: border-box;
    }

    .invoice-header {
      text-align: center;
      margin-bottom: 10px;
      border-bottom: 1px dashed #000;
      padding-bottom: 8px;
    }

    .invoice-header img {
      width: 50px;
      margin-bottom: 5px;
    }

    .invoice-header h2 {
      margin: 0;
    }

    .info-block {
      font-size: 12px;
      margin-bottom: 10px;
      border-bottom: 1px dashed #000;
      padding-bottom: 8px;
    }

    .info-block p {
      margin: 0;
      line-height: 1.4;
    }

    table {
      width: 100%;
      font-size: 12px;
      border-collapse: collapse;
      margin-bottom: 10px;
    }

    th, td {
      padding: 4px;
      text-align: left;
      border-bottom: 1px dashed #ccc;
    }

    .totals {
      font-size: 12px;
      text-align: right;
      margin-top: 10px;
      border-top: 1px dashed #000;
      padding-top: 8px;
    }

    .totals p {
      margin: 2px 0;
    }

    .thankyou {
      font-size: 12px;
      text-align: center;
      margin-top: 10px;
      border-top: 1px dashed #000;
      padding-top: 8px;
    }

    .buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 20px 0;
    }

    .buttons button {
      padding: 8px 16px;
      font-size: 14px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
    }

    .print-btn {
      background-color: #28a745;
      color: white;
    }

    .cancel-btn {
      background-color: #dc3545;
      color: white;
    }

    @media print {
      body {
        background: white !important;
        color: black !important;
      }

      .sidebar,
      .top-header,
      .buttons,
      .settings-section,
      .nav-link,
      .submenu,
      .header-left,
      .header-right {
        display: none !important;
      }

      .invoice-wrapper {
        margin: 0 auto !important;
        width: 80mm !important;
        padding: 10px !important;
      }

      .main-content {
        margin: 0 !important;
        padding: 0 !important;
      }

      .container {
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
      }
    }
  </style>
</head>
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
<body>
<div className="invoice-wrapper">
<div className="invoice-header">
<img alt="Logo" src="../images/invoice.png"/>
<h2>saad</h2>
<p>Doha, Qatar<br/>+91454554<br/>qpos@gmail.com</p>
</div>
<div className="info-block">
<p><strong>User:</strong> Mr Admin</p>
<p><strong>Order:</strong> #166</p>
<p><strong>Name:</strong> Walking Customer</p>
<p><strong>Address:</strong> N/A</p>
<p><strong>Phone:</strong> 012345678</p>
<p><strong>Date:</strong> 17-Jul-2025</p>
<p><strong>Time:</strong> 04:35:54 PM</p>
</div>
<table>
<thead>
<tr>
<th>Product</th>
<th style="text-align:right">Total</th>
</tr>
</thead>
<tbody>
<tr>
<td>Product B 1×270.00</td>
<td style="text-align:right">270</td>
</tr>
<tr>
<td>Product B 1×270.00</td>
<td style="text-align:right">270</td>
</tr>
</tbody>
</table>
<div className="totals">
<p><strong>Subtotal:</strong> 540.00</p>
<p><strong>Discount:</strong> 0.00</p>
<p><strong>Total:</strong> 540.00</p>
<p><strong>Paid:</strong> 0.00</p>
<p><strong>Due:</strong> 540.00</p>
</div>
<p className="thankyou">Thank You For Shopping With Us. Please Come Again.</p>
<div className="buttons">
<button className="print-btn" onClick="handlePrint()">Print</button>
</div>
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
</main></div></html>

  </>
);

export default Posinvoice;
