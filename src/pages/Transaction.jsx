import React from 'react';

const Transaction = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Transactions</title>
<link href="../css/dashboard.css" rel="stylesheet"/>
<style>
    .card {
      background-color: white;
      border-radius: 6px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      margin: 20px auto;
    }

    .card h2 {
      margin-bottom: 20px;
    }

    .transaction-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }

    .transaction-table th,
    .transaction-table td {
      padding: 12px;
      border: 1px solid #dee2e6;
      text-align: left;
    }

    .invoice-btn {
      background-color: #28a745;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .invoice-btn:hover {
      background-color: #218838;
    }

    .main-content {
      padding: 20px;
      background-color: #eaf2ff;
      min-height: 100vh;
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
<div className="card">
<table className="transaction-table">
<thead>
<tr>
<th>#</th>
<th>TransactionId</th>
<th>Amount ₹</th>
<th>Paid By</th>
<th>Created</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td id="transactionId">-</td>
<td id="amount">-</td>
<td id="paidBy">-</td>
<td id="created">-</td>
<td><button className="invoice-btn">Invoice</button></td>
</tr>
</tbody>
</table>
</div>
</main>
</div>
<script>
  
document.addEventListener('DOMContentLoaded', function () {
  const data = JSON.parse(localStorage.getItem('transactionData'));

  if (data) {
 document.getElementById('transactionId').textContent = '#' +  data.saleId;

    document.getElementById('amount').textContent = data.amount;
    document.getElementById('paidBy').textContent = data.paidBy;
    document.getElementById('created').textContent = data.created;
    document.querySelector('.page-title').textContent = 'Transactions Sale #' + data.saleId;

 

  } else {
    alert("No transaction data found!");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("invoice-btn")) {
      const saleData = JSON.parse(e.target.getAttribute("data-sale"));
      localStorage.setItem("invoiceData", JSON.stringify(saleData));
      window.location.href = "collectioninvoice.html";
    }
  });
});

</script>
</body>
</html>

  </>
);

export default Transaction;
