import React from 'react';

const Sales = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Sales | Customer</title>
<link href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" rel="stylesheet"/>
<link href="../css/dashboard.css" rel="stylesheet"/>
<style>
    .status-label {
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      color: white;
    }

    .status-due {
      background-color: #dc3545;
    }

    .status-paid {
      background-color: #28a745;
    }

    .action-buttons button {
      margin: 2px;
      padding: 3px 8px;
      font-size: 12px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }

    .invoice-btn {
      background-color: #28a745;
      color: white;
    }

    .pos-invoice-btn {
      background-color: #6c757d;
      color: white;
    }

    .due-collection-btn {
      background-color: #ffc107;
      color: black;
    }

    .transactions-btn {
      background-color: #007bff;
      color: white;
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
<a className="submenu-link" href="sales.html" id="saleLink"><span className="dot"></span>Sale
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
<div className="datatable-section">
<h2>Customer Sales</h2>
<table className="display" id="salesTable" style="width: 100%">
<thead>
<tr>
<th>#</th>
<th>SaleId</th>
<th>Customer</th>
<th>Item</th>
<th>Sub Total Rs</th>
<th>Discount Rs</th>
<th>Total Rs</th>
<th>Paid Rs</th>
<th>Due Rs</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>#164</td><td>Nisar</td><td>2</td><td>450.00</td><td>0.00</td><td>450.00</td><td>0.00</td><td>450.00</td><td><span className="status-label status-due">Due</span></td><td className="action-buttons"><button className="invoice-btn">📄 Invoice</button><button className="pos-invoice-btn">🧾 Pos Invoice</button><button className="due-collection-btn">💰 Due Collection</button><button className="transactions-btn">🔁 Transactions</button></td></tr>
<tr><td>2</td><td>#163</td><td>Salman</td><td>2</td><td>360.00</td><td>0.00</td><td>360.00</td><td>0.00</td><td>360.00</td><td><span className="status-label status-due">Due</span></td><td className="action-buttons"><button className="invoice-btn">📄 Invoice</button><button className="pos-invoice-btn">🧾 Pos Invoice</button><button className="due-collection-btn">💰 Due Collection</button><button className="transactions-btn">🔁 Transactions</button></td></tr>
<tr><td>3</td><td>#162</td><td>Nadeem</td><td>17</td><td>1,125.00</td><td>0.00</td><td>1,125.00</td><td>0.00</td><td>1,125.00</td><td><span className="status-label status-due">Due</span></td><td className="action-buttons"><button className="invoice-btn">📄 Invoice</button><button className="pos-invoice-btn">🧾 Pos Invoice</button><button className="due-collection-btn">💰 Due Collection</button><button className="transactions-btn">🔁 Transactions</button></td></tr>
<tr><td>4</td><td>#161</td><td>Ali</td><td>3</td><td>540.00</td><td>0.00</td><td>540.00</td><td>0.00</td><td>540.00</td><td><span className="status-label status-due">Due</span></td><td className="action-buttons"><button className="invoice-btn">📄 Invoice</button><button className="pos-invoice-btn">🧾 Pos Invoice</button><button className="due-collection-btn">💰 Due Collection</button><button className="transactions-btn">🔁 Transactions</button></td></tr>
<tr><td>5</td><td>#160</td><td>Hassan</td><td>3</td><td>439.00</td><td>0.00</td><td>439.00</td><td>0.00</td><td>439.00</td><td><span className="status-label status-due">Due</span></td><td className="action-buttons"><button className="invoice-btn">📄 Invoice</button><button className="pos-invoice-btn">🧾 Pos Invoice</button><button className="due-collection-btn">💰 Due Collection</button><button className="transactions-btn">🔁 Transactions</button></td></tr>
<tr><td>6</td><td>#159</td><td>Umer</td><td>1</td><td>180.00</td><td>0.00</td><td>180.00</td><td>0.00</td><td>180.00</td><td><span className="status-label status-paid">Paid</span></td><td className="action-buttons"><button className="invoice-btn">📄 Invoice</button><button className="pos-invoice-btn">🧾 Pos Invoice</button><button className="transactions-btn">🔁 Transactions</button></td></tr>
<tr><td>7</td><td>#158</td><td>Abdullah</td><td>4</td><td>1,579.00</td><td>0.00</td><td>1,579.00</td><td>0.00</td><td>1,579.00</td><td><span className="status-label status-due">Due</span></td><td className="action-buttons"><button className="invoice-btn">📄 Invoice</button><button className="pos-invoice-btn">🧾 Pos Invoice</button><button className="due-collection-btn">💰 Due Collection</button><button className="transactions-btn">🔁 Transactions</button></td></tr>
<tr><td>8</td><td>#157</td><td>Abdullah</td><td>3</td><td>585.00</td><td>0.00</td><td>585.00</td><td>0.00</td><td>585.00</td><td><span className="status-label status-due">Due</span></td><td className="action-buttons"><button className="invoice-btn">📄 Invoice</button><button className="pos-invoice-btn">🧾 Pos Invoice</button><button className="due-collection-btn">💰 Due Collection</button><button className="transactions-btn">🔁 Transactions</button></td></tr>
<tr><td>9</td><td>#156</td><td>nisar</td><td>2</td><td>1,140.00</td><td>50.00</td><td>1,090.00</td><td>1,090.00</td><td>0.00</td><td><span className="status-label status-paid">Paid</span></td><td className="action-buttons"><button className="invoice-btn">📄 Invoice</button><button className="pos-invoice-btn">🧾 Pos Invoice</button><button className="transactions-btn">🔁 Transactions</button></td></tr>
<tr><td>10</td><td>#155</td><td>nisar</td><td>4</td><td>2,979.00</td><td>50.00</td><td>2,929.00</td><td>400.00</td><td>2,529.00</td><td><span className="status-label status-due">Due</span></td><td className="action-buttons"><button className="invoice-btn">📄 Invoice</button><button className="pos-invoice-btn">🧾 Pos Invoice</button><button className="due-collection-btn">💰 Due Collection</button><button className="transactions-btn">🔁 Transactions</button></td></tr>
</tbody>
</table>
</div>
</main>
</div>
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script>
$(document).ready(function () {
  $('#salesTable').DataTable({
    pageLength: 10,
    lengthMenu: [10, 25, 50, 100]
  });

  $(document).on('click', '.invoice-btn', function () {
    const row = $(this).closest('tr');
    const saleId = row.find('td:eq(1)').text().replace(/[^\d]/g, '');
    window.location.href = `../html/invoice.html?saleId=${saleId}`;
  });

  $(document).on('click', '.pos-invoice-btn', function () {
    const row = $(this).closest('tr');
    const saleId = row.find('td:eq(1)').text().replace(/[^\d]/g, '');
    window.location.href = `../html/posinvoice.html?saleId=${saleId}`;
  });
  $(document).on('click', '.due-collection-btn', function () {
    const row = $(this).closest('tr');
    const saleId = row.find('td:eq(1)').text().replace(/[^\d]/g, '');
    window.location.href = `../html/collection.html?saleId=${saleId}`;
  });

});
$(document).on('click', '.transactions-btn', function () {
  const row = $(this).closest('tr');
  const saleId = row.find('td:eq(1)').text().replace(/[^\d]/g, '');
  const amount = row.find('td:eq(6)').text().trim(); 
  const paid = row.find('td:eq(7)').text().trim();   
  const status = row.find('td:eq(9)').text().trim();
  const transactionData = {
    saleId,
    transactionId: "#" + (100 + parseInt(saleId)), 
    amount,
    paidBy: paid > 0 ? 'cash' : 'unpaid',
    created: new Date().toLocaleString(),
  };
  localStorage.setItem('transactionData', JSON.stringify(transactionData));
  window.location.href = '../html/transaction.html';
});









  document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const saleLink = document.getElementById("saleLink");
    const saleSubmenu = document.getElementById("saleSubmenu");

    if (currentPath.includes("sales.html")) {
      // Highlight the link
      saleLink.classList.add("active");

      // Show the submenu
      saleSubmenu.style.display = "block";

      // Optional: Add a class to the parent to show it's expanded
      const saleParent = saleSubmenu.previousElementSibling;
      if (saleParent && saleParent.classList.contains("collapsible")) {
        saleParent.classList.add("expanded");
      }
    }
  });


</script>
<script src="../js/script.js"></script>
</body>
</html>

  </>
);

export default Sales;
