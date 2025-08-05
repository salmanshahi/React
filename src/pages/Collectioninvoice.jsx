import React from 'react';

const Collectioninvoice = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<title>Collection Invoice</title>
<link href="style.css" rel="stylesheet"/>
<link href="../css/dashboard.css" rel="stylesheet"/>
<style>
  .print-btn {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #6d7fcc;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

.invoice-wrapper {
  width: 800px;
  margin: auto;
  padding: 40px;
  background: white;
}

.details {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
}

table th, table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.summary p {
  text-align: right;
  margin: 5px 0;
}

.thanks {
  text-align: center;
  margin-top: 30px;
  font-style: italic;
}
  @media print {
      body {
        background: white !important;
        color: black !important;
      }
.print-btn {
  display: none !important;
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
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
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
<h1 className="page-title">Customer</h1>
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
<body onload="window.print();">
<div className="invoice-wrapper">
<h2>Collection Invoice</h2>
<div className="company">
<h3>salman</h3>
</div>
<div className="details">
<div>
<strong>To</strong><br/>
        Name: Walking Customer<br/>
        Address: N/A<br/>
        Phone: 012345678
      </div>
<div>
<strong>From</strong><br/>
        Name: saad<br/>
        Address: Doha, qatar<br/>
        Phone: +94154554<br/>
        Email: qpos@gmail.com
      </div>
<div>
<strong>Info</strong><br/>
        Invoice ID: #59<br/>
        Sale ID: #166<br/>
        Sale Date: 16/07/2025<br/>
        Collection Date: 17/07/2025
      </div>
</div>
<table>
<thead>
<tr>
<th>SN</th>
<th>Product</th>
<th>Quantity</th>
<th>Price Ksh</th>
<th>Subtotal Ksh</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Product B</td>
<td>1 pcs</td>
<td>270.00</td>
<td>270.00</td>
</tr>
<tr>
<td>2</td>
<td>Product B</td>
<td>1 pcs</td>
<td>270.00</td>
<td>270.00</td>
</tr>
</tbody>
</table>
<div className="summary">
<p>Subtotal: <strong>Ksh 540.00</strong></p>
<p>Discount: <strong>Ksh 0.00</strong></p>
<p>Total: <strong>Ksh 540.00</strong></p>
<p>Previously Paid: <strong>Ksh 537.00</strong></p>
<p>Collection Amount: <strong>Ksh 537.00</strong></p>
<p>Due: <strong>Ksh -534.00</strong></p>
</div>
<p className="thanks">Thank You For Shopping With Us. Please Come Again.</p>
<button className="print-btn" onClick="window.print()">🖨️ Print</button>
</div>
<script src="../js/script.js"></script>
</body>
</main></div></html>

  </>
);

export default Collectioninvoice;
