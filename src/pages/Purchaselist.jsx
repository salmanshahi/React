import React from 'react';

const Purchaselist = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Purchase List</title>
<link href="../css/purchaselist.css" rel="stylesheet"/>
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
<h1 className="page-title">Purchase List</h1>
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
<div className="table-controls">
<div className="show-entries">
<span>Show</span>
<select>
<option value="10">10</option>
<option value="25">25</option>
<option value="50">50</option>
<option value="100">100</option>
</select>
<span>entries</span>
</div>
<button className="add-new-button">
                        ➕ Add New
                    </button>
<div className="search-box">
<span>Search:</span>
<input placeholder="" type="text"/>
</div>
</div>
<div className="table-container">
<table>
<thead>
<tr>
<th className="sortable">#</th>
<th className="sortable">Supplier</th>
<th>ID</th>
<th>Total $</th>
<th>Date</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Own Supplier</td>
<td>#26</td>
<td>15000.00</td>
<td>09 Jul, 2025</td>
<td>
<div className="action-dropdown">
<button className="action-button">Action</button>
<div className="dropdown-menu">
<button className="dropdown-item">
<span>✏️</span>
<span>Edit</span>
</button>
<button className="dropdown-item">
<span>👁️</span>
<span>View</span>
</button>
</div>
</div>
</td>
</tr>
<tr>
<td>2</td>
<td>Own Supplier</td>
<td>#27</td>
<td>12500.00</td>
<td>09 Jul, 2025</td>
<td>
<div className="action-dropdown">
<button className="action-button">Action</button>
<div className="dropdown-menu">
<button className="dropdown-item">
<span>✏️</span>
<span>Edit</span>
</button>
<button className="dropdown-item">
<span>👁️</span>
<span>View</span>
</button>
</div>
</div>
</td>
</tr>
<tr>
<td>3</td>
<td>Own Supplier</td>
<td>#28</td>
<td>12000.00</td>
<td>09 Jul, 2025</td>
<td>
<div className="action-dropdown">
<button className="action-button">Action</button>
<div className="dropdown-menu">
<button className="dropdown-item">
<span>✏️</span>
<span>Edit</span>
</button>
<button className="dropdown-item">
<span>👁️</span>
<span>View</span>
</button>
</div>
</div>
</td>
</tr>
<tr>
<td>4</td>
<td>Own Supplier</td>
<td>#29</td>
<td>8000.00</td>
<td>09 Jul, 2025</td>
<td>
<div className="action-dropdown">
<button className="action-button">Action</button>
<div className="dropdown-menu">
<button className="dropdown-item">
<span>✏️</span>
<span>Edit</span>
</button>
<button className="dropdown-item">
<span>👁️</span>
<span>View</span>
</button>
</div>
</div>
</td>
</tr>
<tr>
<td>5</td>
<td>Own Supplier</td>
<td>#30</td>
<td>13500.00</td>
<td>09 Jul, 2025</td>
<td>
<div className="action-dropdown">
<button className="action-button">Action</button>
<div className="dropdown-menu">
<button className="dropdown-item">
<span>✏️</span>
<span>Edit</span>
</button>
<button className="dropdown-item">
<span>👁️</span>
<span>View</span>
</button>
</div>
</div>
</td>
</tr>
<tr>
<td>6</td>
<td>Own Supplier</td>
<td>#21</td>
<td>15000.00</td>
<td>27 Jun, 2025</td>
<td>
<div className="action-dropdown">
<button className="action-button">Action</button>
<div className="dropdown-menu">
<button className="dropdown-item">
<span>✏️</span>
<span>Edit</span>
</button>
<button className="dropdown-item">
<span>👁️</span>
<span>View</span>
</button>
</div>
</div>
</td>
</tr>
<tr>
<td>7</td>
<td>Own Supplier</td>
<td>#22</td>
<td>12500.00</td>
<td>27 Jun, 2025</td>
<td>
<div className="action-dropdown">
<button className="action-button">Action</button>
<div className="dropdown-menu">
<button className="dropdown-item">
<span>✏️</span>
<span>Edit</span>
</button>
<button className="dropdown-item">
<span>👁️</span>
<span>View</span>
</button>
</div>
</div>
</td>
</tr>
<tr>
<td>8</td>
<td>Own Supplier</td>
<td>#23</td>
<td>12000.00</td>
<td>27 Jun, 2025</td>
<td>
<div className="action-dropdown">
<button className="action-button">Action</button>
<div className="dropdown-menu">
<button className="dropdown-item">
<span>✏️</span>
<span>Edit</span>
</button>
<button className="dropdown-item">
<span>👁️</span>
<span>View</span>
</button>
</div>
</div>
</td>
</tr>
<tr>
<td>9</td>
<td>Own Supplier</td>
<td>#24</td>
<td>8000.00</td>
<td>27 Jun, 2025</td>
<td>
<div className="action-dropdown">
<button className="action-button">Action</button>
<div className="dropdown-menu">
<button className="dropdown-item">
<span>✏️</span>
<span>Edit</span>
</button>
<button className="dropdown-item">
<span>👁️</span>
<span>View</span>
</button>
</div>
</div>
</td>
</tr>
<tr>
<td>10</td>
<td>Own Supplier</td>
<td>#25</td>
<td>13500.00</td>
<td>27 Jun, 2025</td>
<td>
<div className="action-dropdown">
<button className="action-button">Action</button>
<div className="dropdown-menu">
<button className="dropdown-item">
<span>✏️</span>
<span>Edit</span>
</button>
<button className="dropdown-item">
<span>👁️</span>
<span>View</span>
</button>
</div>
</div>
</td>
</tr>
</tbody>
</table>
<div className="pagination-container">
<div className="pagination-info">
                            Showing 1 to 10 of 27 entries
                        </div>
<div className="pagination">
<button disabled="">Previous</button>
<button className="active">1</button>
<button>2</button>
<button>3</button>
<button>Next</button>
</div>
</div>
</div>
</div>
</main></div>
<script>
        const allData = [
            { id: 1, supplier: "Own Supplier", orderID: "#26", total: "15000.00", date: "09 Jul, 2025" },
            { id: 2, supplier: "Own Supplier", orderID: "#27", total: "12500.00", date: "09 Jul, 2025" },
            { id: 3, supplier: "Own Supplier", orderID: "#28", total: "12000.00", date: "09 Jul, 2025" },
            { id: 4, supplier: "Own Supplier", orderID: "#29", total: "8000.00", date: "09 Jul, 2025" },
            { id: 5, supplier: "Own Supplier", orderID: "#30", total: "13500.00", date: "09 Jul, 2025" },
            { id: 6, supplier: "Own Supplier", orderID: "#21", total: "15000.00", date: "27 Jun, 2025" },
            { id: 7, supplier: "Own Supplier", orderID: "#22", total: "12500.00", date: "27 Jun, 2025" },
            { id: 8, supplier: "Own Supplier", orderID: "#23", total: "12000.00", date: "27 Jun, 2025" },
            { id: 9, supplier: "Own Supplier", orderID: "#24", total: "8000.00", date: "27 Jun, 2025" },
            { id: 10, supplier: "Own Supplier", orderID: "#25", total: "13500.00", date: "27 Jun, 2025" },
            { id: 11, supplier: "Own Supplier", orderID: "#31", total: "9500.00", date: "15 Jun, 2025" },
            { id: 12, supplier: "Own Supplier", orderID: "#32", total: "11000.00", date: "15 Jun, 2025" },
            { id: 13, supplier: "Own Supplier", orderID: "#33", total: "14500.00", date: "15 Jun, 2025" },
            { id: 14, supplier: "Own Supplier", orderID: "#34", total: "7500.00", date: "15 Jun, 2025" },
            { id: 15, supplier: "Own Supplier", orderID: "#35", total: "16000.00", date: "15 Jun, 2025" },
            { id: 16, supplier: "Own Supplier", orderID: "#36", total: "10500.00", date: "10 Jun, 2025" },
            { id: 17, supplier: "Own Supplier", orderID: "#37", total: "13000.00", date: "10 Jun, 2025" },
            { id: 18, supplier: "Own Supplier", orderID: "#38", total: "8500.00", date: "10 Jun, 2025" },
            { id: 19, supplier: "Own Supplier", orderID: "#39", total: "12000.00", date: "10 Jun, 2025" },
            { id: 20, supplier: "Own Supplier", orderID: "#40", total: "14000.00", date: "10 Jun, 2025" },
            { id: 21, supplier: "Own Supplier", orderID: "#41", total: "9000.00", date: "05 Jun, 2025" },
            { id: 22, supplier: "Own Supplier", orderID: "#42", total: "11500.00", date: "05 Jun, 2025" },
            { id: 23, supplier: "Own Supplier", orderID: "#43", total: "13500.00", date: "05 Jun, 2025" },
            { id: 24, supplier: "Own Supplier", orderID: "#44", total: "8000.00", date: "05 Jun, 2025" },
            { id: 25, supplier: "Own Supplier", orderID: "#45", total: "15500.00", date: "05 Jun, 2025" },
            { id: 26, supplier: "Own Supplier", orderID: "#46", total: "10000.00", date: "01 Jun, 2025" },
            { id: 27, supplier: "Own Supplier", orderID: "#47", total: "12500.00", date: "01 Jun, 2025" }
        ];

        let currentPage = 1;
        const itemsPerPage = 10;
        const totalItems = allData.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        function renderTable(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageData = allData.slice(startIndex, endIndex);

            const tbody = document.querySelector('tbody');
            tbody.innerHTML = '';

            pageData.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.supplier}</td>
                    <td>${item.orderID}</td>
                    <td>${item.total}</td>
                    <td>${item.date}</td>
                    <td><button class="action-button">Action</button></td>
                `;
                tbody.appendChild(row);
            });
            document.querySelectorAll('.action-button').forEach(button => {
                button.addEventListener('click', function () {
                    alert('Action menu would open here');
                });
            });
        }

        function updatePaginationInfo() {
            const startItem = (currentPage - 1) * itemsPerPage + 1;
            const endItem = Math.min(currentPage * itemsPerPage, totalItems);

            document.querySelector('.pagination-info').textContent =
                `Showing ${startItem} to ${endItem} of ${totalItems} entries`;
        }

        function updatePaginationButtons() {
            const pagination = document.querySelector('.pagination');
            pagination.innerHTML = '';
            const prevBtn = document.createElement('button');
            prevBtn.textContent = 'Previous';
            if (currentPage === 1) {
                prevBtn.disabled = true;
                prevBtn.style.opacity = '0.5';
                prevBtn.style.cursor = 'not-allowed';
            } else {
                prevBtn.disabled = false;
                prevBtn.style.opacity = '1';
                prevBtn.style.cursor = 'pointer';
            }
            prevBtn.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    updatePage();
                }
            });
            pagination.appendChild(prevBtn);
            for (let i = 1; i <= totalPages; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.textContent = i;
                pageBtn.classList.toggle('active', i === currentPage);
                pageBtn.addEventListener('click', () => {
                    currentPage = i;
                    updatePage();
                });
                pagination.appendChild(pageBtn);
            }
            const nextBtn = document.createElement('button');
            nextBtn.textContent = 'Next';
            if (currentPage === totalPages) {
                nextBtn.disabled = true;
                nextBtn.style.opacity = '0.5';
                nextBtn.style.cursor = 'not-allowed';
            } else {
                nextBtn.disabled = false;
                nextBtn.style.opacity = '1';
                nextBtn.style.cursor = 'pointer';
            }
            nextBtn.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    updatePage();
                }
            });
            pagination.appendChild(nextBtn);
        }

        function updatePage() {
            renderTable(currentPage);
            updatePaginationInfo();
            updatePaginationButtons();
        }
        updatePage();
        document.querySelectorAll('.menu-item.expandable').forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                this.classList.toggle('expanded');
            });
        });
        document.querySelector('.add-new-button').addEventListener('click', function () {
           
        });
        document.querySelector('.search-box input').addEventListener('input', function () {
            console.log('Searching for:', this.value);
        });

        document.querySelector('.show-entries select').addEventListener('change', function () {
            console.log('Items per page changed to:', this.value);
        });
        function renderTable(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageData = allData.slice(startIndex, endIndex);

            const tbody = document.querySelector('tbody');
            tbody.innerHTML = '';

            pageData.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.supplier}</td>
            <td>${item.orderID}</td>
            <td>${item.total}</td>
            <td>${item.date}</td>
            <td>
                <div class="action-dropdown">
                    <button class="action-button">Action</button>
                    <div class="dropdown-menu">
                        <button class="dropdown-item">
                            <span>✏️</span>
                            <span>Edit</span>
                        </button>
                        <button class="dropdown-item">
                            <span>👁️</span>
                            <span>View</span>
                        </button>
                    </div>
                </div>
            </td>
        `;
                tbody.appendChild(row);
            });
            document.querySelectorAll('.action-button').forEach(button => {
                button.addEventListener('click', function (e) {
                    e.stopPropagation();
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        if (menu !== this.nextElementSibling) {
                            menu.classList.remove('show');
                        }
                    });
                    const dropdown = this.nextElementSibling;
                    dropdown.classList.toggle('show');
                });
            });
            document.querySelectorAll('.dropdown-item').forEach(item => {
                item.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const action = this.textContent.trim();
                    const rowData = this.closest('tr').children;
                    const id = rowData[0].textContent;
                    const orderID = rowData[2].textContent;

                    if (action === 'Edit') {
                        alert(`Edit purchase ${orderID} (ID: ${id})`);
                    } else if (action === 'View') {
                        alert(`View purchase ${orderID} (ID: ${id})`);
                    }
                    this.closest('.dropdown-menu').classList.remove('show');
                });
            });
        }
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.action-dropdown')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });





    </script>
<script src="../js/script.js"></script>
</body>
</html>
  </>
);

export default Purchaselist;
