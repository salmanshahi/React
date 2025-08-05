import React from 'react';

const View = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Purchase View</title>
<link href="../css/dashboard.css" rel="stylesheet"/>
<style>
        .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .top-header {
            background: white;
            padding: 15px 30px;
            border-bottom: 1px solid #e0e6ed;
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
            color: #666;
        }

        .page-title {
            font-size: 24px;
            font-weight: 600;
            color: #333;
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .pos-button {
            background: #28a745;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 500;
            transition: background 0.3s ease;
        }

        .pos-button:hover {
            background: #218838;
        }

        .settings-icon {
            background: none;
            border: none;
            font-size: 18px;
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
            cursor: pointer;
            padding: 8px 12px;
            border-radius: 5px;
            transition: background 0.3s ease;
        }

        .user-menu:hover {
            background: #f8f9fa;
        }

        .user-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            display: none;
            min-width: 120px;
            z-index: 1000;
        }

        .user-dropdown.show {
            display: block;
        }

        .user-dropdown a {
            display: block;
            padding: 10px 15px;
            text-decoration: none;
            color: #333;
            transition: background 0.3s ease;
        }

        .user-dropdown a:hover {
            background: #f8f9fa;
        }
        .content-area {
            padding: 30px;
            flex: 1;
        }

        .purchase-header {
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
        }

        .purchase-title {
            font-size: 28px;
            font-weight: 600;
            color: #333;
            margin-bottom: 5px;
        }

        .supplier-info {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
        }

        .supplier-name {
            font-weight: 600;
            color: #333;
        }
        .product-table-container {
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .product-table {
            width: 100%;
            border-collapse: collapse;
        }

        .product-table th {
            background: #f8f9fa;
            padding: 15px;
            text-align: left;
            font-weight: 600;
            color: #333;
            border-bottom: 2px solid #e9ecef;
        }

        .product-table td {
            padding: 15px;
            border-bottom: 1px solid #e9ecef;
            color: #555;
        }

        .product-table tr:hover {
            background-color: #f8f9fa;
        }

        .product-table th:first-child,
        .product-table td:first-child {
            text-align: center;
            width: 60px;
        }

        .product-table th:nth-child(3),
        .product-table td:nth-child(3),
        .product-table th:nth-child(4),
        .product-table td:nth-child(4),
        .product-table th:nth-child(5),
        .product-table td:nth-child(5) {
            text-align: right;
        }

        .price {
            font-weight: 600;
        }

        .summary-section {
            padding: 25px;
            background: #f8f9fa;
            border-top: 1px solid #e9ecef;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            font-size: 16px;
        }

        .summary-row.total {
            border-top: 2px solid #dee2e6;
            margin-top: 10px;
            padding-top: 15px;
            font-weight: 600;
            font-size: 18px;
            color: #333;
        }

        .summary-label {
            color: #666;
        }

        .summary-value {
            font-weight: 600;
            color: #333;
        }

        .back-button {
            background: #6c757d;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 500;
            transition: background 0.3s ease;
            margin-bottom: 20px;
        }

        .back-button:hover {
            background: #5a6268;
        }

        @media (max-width: 768px) {
            .sidebar {
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }
            
            .sidebar.mobile-open {
                transform: translateX(0);
            }
            
            .main-content {
                margin-left: 0;
            }
            
            .content-area {
                padding: 15px;
            }
            
            .product-table {
                font-size: 14px;
            }
            
            .product-table th,
            .product-table td {
                padding: 10px 8px;
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
<a className="nav-link active" href="#">
<span className="nav-icon">📊</span>
<span className="nav-text">Dashboard</span>
</a>
<a className="nav-link" href="../html/pos.html" id="posLink">
<span className="nav-icon">🛒</span>
<span className="nav-text">POS</span>
</a>
<div className="nav-link collapsible" onClick="toggleSubmenu('peopleSubmenu', this)">
<span className="nav-icon">👤</span>
<span className="nav-text">People</span>
<span className="nav-chevron">❮</span>
</div>
<div className="submenu" id="peopleSubmenu">
<a className="submenu-link" href="../html/customer.html">
<span className="dot"></span>Customer
                    </a>
<a className="submenu-link" href="../html/supplier.html">
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
<a className="submenu-link" href="sales.html"><span className="dot"></span>Sale List</a>
</div>
<div className="nav-link collapsible" onClick="toggleSubmenu('purchaseSubmenu', this)">
<span className="nav-icon">🛍️</span>
<span className="nav-text">Purchase</span>
<span className="nav-chevron">❮</span>
</div>
<div className="submenu" id="purchaseSubmenu">
<a className="submenu-link" href="#"><span className="dot"></span>Purchase List</a>
<a className="submenu-link" href="#"><span className="dot"></span>Purchase Create</a>
</div>
<div className="nav-link collapsible" onClick="toggleSubmenu('reportsSubmenu', this)">
<span className="nav-icon">📈</span>
<span className="nav-text">Reports</span>
<span className="nav-chevron">❮</span>
</div>
<div className="submenu" id="reportsSubmenu">
<a className="submenu-link" href="#"><span className="dot"></span>Sales Summary</a>
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
<span>🛡️
                        </span>
<span className="nav-text">Rules &amp; Permission</span>
<span className="nav-chevron">❮</span>
</div>
<div className="submenu" id="rulesSubmenu">
<a className="submenu-link" href="#">
<span>📜</span>Rules
                        </a>
<a className="submenu-link" href="#">
<span>🔐</span>Permission
                        </a>
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
<h1 className="page-title">Dashboard</h1>
</div>
<div className="header-right">
<button className="pos-button" onClick="window.location.href='pos.html'">🛒 POS</button>
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
<button className="back-button" onClick="goBack()">← Back to Purchase List</button>
<div className="purchase-header">
<h2 className="purchase-title">Purchase Details</h2>
<div className="supplier-info">
                        Supplier: <span className="supplier-name" id="supplierName">Own Supplier</span>
</div>
</div>
<div className="product-table-container">
<table className="product-table">
<thead>
<tr>
<th>#</th>
<th>Product</th>
<th>Purchase Price$</th>
<th>Quantity</th>
<th>Sub Totals</th>
</tr>
</thead>
<tbody id="productTableBody">
</tbody>
</table>
<div className="summary-section">
<div className="summary-row">
<span className="summary-label">Subtotal:</span>
<span className="summary-value" id="subtotal">15,000.00</span>
</div>
<div className="summary-row">
<span className="summary-label">Tax:</span>
<span className="summary-value" id="tax">0.00</span>
</div>
<div className="summary-row">
<span className="summary-label">Discount:</span>
<span className="summary-value" id="discount">0.00</span>
</div>
<div className="summary-row">
<span className="summary-label">Shipping:</span>
<span className="summary-value" id="shipping">0.00</span>
</div>
<div className="summary-row total">
<span className="summary-label">Total:</span>
<span className="summary-value" id="total">15,000.00</span>
</div>
</div>
</div>
</div>
</main>
</div>
<script>
        const purchaseData = {
            "#26": {
                supplier: "Own Supplier",
                total: "15000.00",
                date: "09 Jul, 2025",
                products: [
                    { id: 1, name: "Product A", price: "150.00", quantity: "100 pcs", subtotal: "15,000.00" }
                ]
            },
            "#27": {
                supplier: "Own Supplier",
                total: "12500.00",
                date: "09 Jul, 2025",
                products: [
                    { id: 1, name: "Product B", price: "125.00", quantity: "100 pcs", subtotal: "12,500.00" }
                ]
            },
            "#28": {
                supplier: "Own Supplier",
                total: "12000.00",
                date: "09 Jul, 2025",
                products: [
                    { id: 1, name: "Product C", price: "120.00", quantity: "100 pcs", subtotal: "12,000.00" }
                ]
            },
            "#29": {
                supplier: "Own Supplier",
                total: "8000.00",
                date: "09 Jul, 2025",
                products: [
                    { id: 1, name: "Product D", price: "80.00", quantity: "100 pcs", subtotal: "8,000.00" }
                ]
            },
            "#30": {
                supplier: "Own Supplier",
                total: "13500.00",
                date: "09 Jul, 2025",
                products: [
                    { id: 1, name: "Product E", price: "135.00", quantity: "100 pcs", subtotal: "13,500.00" }
                ]
            }
        };
        function getPurchaseIdFromUrl() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('id') || '#26';
        }
        function loadPurchaseData(purchaseId) {
            const data = purchaseData[purchaseId];
            if (!data) {
                console.error('Purchase not found:', purchaseId);
                return;
            }
            document.getElementById('supplierName').textContent = data.supplier;
            const tbody = document.getElementById('productTableBody');
            tbody.innerHTML = '';

            data.products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td class="price">${product.price}</td>
                    <td>${product.quantity}</td>
                    <td class="price">${product.subtotal}</td>
                `;
                tbody.appendChild(row);
            });
            const totalAmount = parseFloat(data.total);
            document.getElementById('subtotal').textContent = totalAmount.toLocaleString('en-US', {minimumFractionDigits: 2});
            document.getElementById('tax').textContent = '0.00';
            document.getElementById('discount').textContent = '0.00';
            document.getElementById('shipping').textContent = '0.00';
            document.getElementById('total').textContent = totalAmount.toLocaleString('en-US', {minimumFractionDigits: 2});
        }

        function toggleSubmenu(submenuId, element) {
            const submenu = document.getElementById(submenuId);
            const isExpanded = submenu.classList.contains('show');
            
            document.querySelectorAll('.submenu').forEach(menu => {
                menu.classList.remove('show');
            });
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('expanded');
            });
            if (!isExpanded) {
                submenu.classList.add('show');
                element.classList.add('expanded');
            }
        }

        function toggleMobileSidebar() {
            document.querySelector('.sidebar').classList.toggle('mobile-open');
        }

        function toggleUserDropdown() {
            document.getElementById('userDropdown').classList.toggle('show');
        }

        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }

        function goBack() {
            window.history.back();
        }
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.user-dropdown-container')) {
                document.getElementById('userDropdown').classList.remove('show');
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            const purchaseId = getPurchaseIdFromUrl();
            loadPurchaseData(purchaseId);
        });

        function viewPurchase(purchaseId) {
            const url = new URL(window.location);
            url.searchParams.set('id', purchaseId);
            window.location.href = url.toString();
        }
        window.viewPurchase = viewPurchase;
    </script>
</body>
</html>
  </>
);

export default View;
