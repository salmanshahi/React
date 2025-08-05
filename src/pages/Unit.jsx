import React from 'react';

const Unit = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Units | salman</title>
<link href="../css/brand.css" rel="stylesheet"/>
<style>
        .header-right {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-left: auto;
        }

        .pos-btn {
            background: #6c7ae0;
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }

        .content {
            padding: 30px;
        }



        .controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .left-controls {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .show-entries select {
            padding: 8px 12px;
            border: 1px solid #ced4da;
            border-radius: 4px;
            background: white;
        }

        .add-new-btn {
            background: #6c7ae0;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .search-box {
            padding: 8px 12px;
            border: 1px solid #ced4da;
            border-radius: 4px;
            width: 250px;
        }

        .table-container {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            background: #f8f9fa;
            padding: 15px;
            text-align: left;
            font-weight: 600;
            color: #495057;
            border-bottom: 1px solid #dee2e6;
        }

        td {
            padding: 15px;
            border-bottom: 1px solid #dee2e6;
            vertical-align: middle;
        }

        tr:hover {
            background: #f8f9fa;
        }

        .action-btn {
            background: #6c7ae0;
            color: white;
            padding: 6px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            position: relative;
        }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background: white;
            min-width: 120px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            border-radius: 4px;
            z-index: 1000;
            top: 100%;
            right: 0;
        }

        .dropdown-content.show {
            display: block;
        }

        .dropdown-item {
            padding: 10px 15px;
            cursor: pointer;
            border-bottom: 1px solid #f1f1f1;
            color: #495057;
            font-size: 14px;
        }

        .dropdown-item:hover {
            background: #f8f9fa;
        }

        .dropdown-item:last-child {
            border-bottom: none;
        }

        .pagination-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: white;
            border-top: 1px solid #dee2e6;
        }

        .pagination-info {
            color: #6c757d;
            font-size: 14px;
        }

        .pagination {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .page-btn {
            padding: 8px 12px;
            border: 1px solid #dee2e6;
            background: white;
            cursor: pointer;
            color: #495057;
            border-radius: 4px;
        }

        .page-btn:hover {
            background: #e9ecef;
        }

        .page-btn.active {
            background: #6c7ae0;
            color: white;
            border-color: #6c7ae0;
        }

        .page-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .edit-form {
            display: none;
            max-width: 600px;
        }

        .edit-form.show {
            display: block;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #495057;
        }

        .form-group input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ced4da;
            border-radius: 4px;
            font-size: 14px;
        }

        .form-actions {
            display: flex;
            gap: 10px;
            padding-top: 20px;
        }

        .btn-primary {
            background: #6c7ae0;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }

        .btn-secondary {
            background: #6c757d;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }

        .required {
            color: #dc3545;
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }

        .modal.show {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background: white;
            padding: 30px;
            border-radius: 8px;
            max-width: 400px;
            width: 90%;
            text-align: center;
        }

        .modal-title {
            font-size: 20px;
            margin-bottom: 15px;
            color: #495057;
        }

        .modal-text {
            color: #6c757d;
            margin-bottom: 25px;
        }

        .modal-actions {
            display: flex;
            gap: 10px;
            justify-content: center;
        }

        .btn-danger {
            background: #dc3545;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .footer {
            text-align: center;
            padding: 20px;
            color: #6c757d;
            font-size: 14px;
            border-top: 1px solid #dee2e6;
            background: white;
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
<a className="submenu-link" href="../html/productlist.html" id="productListLink"><span className="dot"></span>Product List</a>
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
<h1 className="page-title">Unit</h1>
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
<div className="content">
<div id="unitsList">
<div className="controls">
<div className="left-controls">
<span>Show</span>
<div className="show-entries">
<select id="entriesPerPage">
<option value="10">10</option>
<option value="25">25</option>
<option value="50">50</option>
<option value="100">100</option>
</select>
</div>
<span>entries</span>
</div>
<button className="add-new-btn" onClick="showAddNew()">
                            ➕ Add New
                        </button>
<div>
<span>Search:</span>
<input className="search-box" id="searchBox" placeholder="Search units..." type="text"/>
</div>
</div>
<div className="table-container">
<table>
<thead>
<tr>
<th>#</th>
<th>Title <span style="color: #adb5bd;">▲</span></th>
<th>Short Name</th>
<th>Action</th>
</tr>
</thead>
<tbody id="unitsTableBody">
</tbody>
</table>
</div>
<div className="pagination-container">
<div className="pagination-info" id="paginationInfo">
                            Showing 1 to 7 of 7 entries
                        </div>
<div className="pagination" id="pagination">
</div>
</div>
</div>
<div className="edit-form" id="editForm">
<h1 className="page-title" id="formTitle">Update Unit</h1>
<form id="unitForm">
<div className="form-group">
<label htmlFor="unitTitle">Title <span className="required">*</span></label>
<input id="unitTitle" name="title" required="" type="text"/>
</div>
<div className="form-group">
<label htmlFor="unitShortName">Short Name <span className="required">*</span></label>
<input id="unitShortName" name="shortName" required="" type="text"/>
</div>
<div className="form-actions">
<button className="btn-primary" id="submitBtn" type="submit">Update</button>
<button className="btn-secondary" onClick="showUnitsList()" type="button">Cancel</button>
</div>
</form>
</div>
</div>
<div className="modal" id="deleteModal">
<div className="modal-content">
<h3 className="modal-title">Confirm Delete</h3>
<p className="modal-text">Are you sure you want to delete this unit? This action cannot be undone.</p>
<div className="modal-actions">
<button className="btn-danger" onClick="confirmDelete()">Delete</button>
<button className="btn-secondary" onClick="closeDeleteModal()">Cancel</button>
</div>
</div>
</div>
<script>
                let units = [
                    { id: 1, title: 'Dozen', shortName: 'dz' },
                    { id: 2, title: 'kg', shortName: 'kg' },
                    { id: 3, title: 'Kilogram', shortName: 'kg' },
                    { id: 4, title: 'Liter', shortName: 'L' },
                    { id: 5, title: 'Meter', shortName: 'm' },
                    { id: 6, title: 'Piece', shortName: 'pcs' },
                    { id: 7, title: 'set', shortName: 'set' }
                ];

                let currentPage = 1;
                let entriesPerPage = 10;
                let filteredUnits = [...units];
                let editingUnit = null;
                let deleteId = null;

                function init() {
                    renderUnits();
                    setupEventListeners();
                }

                function setupEventListeners() {
                    document.getElementById('entriesPerPage').addEventListener('change', function () {
                        entriesPerPage = parseInt(this.value);
                        currentPage = 1;
                        renderUnits();
                    });

                    document.getElementById('searchBox').addEventListener('input', function () {
                        const searchTerm = this.value.toLowerCase();
                        filteredUnits = units.filter(unit =>
                            unit.title.toLowerCase().includes(searchTerm) ||
                            unit.shortName.toLowerCase().includes(searchTerm)
                        );
                        currentPage = 1;
                        renderUnits();
                    });

                    document.getElementById('unitForm').addEventListener('submit', function (e) {
                        e.preventDefault();
                        saveUnit();
                    });
                    document.addEventListener('click', function (e) {
                        if (!e.target.closest('.dropdown')) {
                            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                                dropdown.classList.remove('show');
                            });
                        }
                    });
                }

                function renderUnits() {
                    const tbody = document.getElementById('unitsTableBody');
                    const startIndex = (currentPage - 1) * entriesPerPage;
                    const endIndex = startIndex + entriesPerPage;
                    const unitsToShow = filteredUnits.slice(startIndex, endIndex);

                    tbody.innerHTML = '';

                    unitsToShow.forEach((unit, index) => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                    <td>${startIndex + index + 1}</td>
                    <td>${unit.title}</td>
                    <td>${unit.shortName}</td>
                    <td>
                        <div class="dropdown">
                            <button class="action-btn" onClick="toggleDropdown(${unit.id})">
                                Action ▼
                            </button>
                            <div class="dropdown-content" id="dropdown-${unit.id}">
                                <div class="dropdown-item" onClick="editUnit(${unit.id})">Edit</div>
                                <div class="dropdown-item" onClick="deleteUnit(${unit.id})">Delete</div>
                            </div>
                        </div>
                    </td>
                `;
                        tbody.appendChild(row);
                    });

                    renderPagination();
                }
                function renderPagination() {
                    const totalPages = Math.ceil(filteredUnits.length / entriesPerPage);
                    const pagination = document.getElementById('pagination');
                    const paginationInfo = document.getElementById('paginationInfo');

                    const startIndex = (currentPage - 1) * entriesPerPage + 1;
                    const endIndex = Math.min(currentPage * entriesPerPage, filteredUnits.length);

                    paginationInfo.textContent = `Showing ${startIndex} to ${endIndex} of ${filteredUnits.length} entries`;

                    pagination.innerHTML = '';
                    const prevBtn = document.createElement('button');
                    prevBtn.className = 'page-btn';
                    prevBtn.textContent = 'Previous';
                    prevBtn.disabled = currentPage === 1;
                    prevBtn.onclick = () => {
                        if (currentPage > 1) {
                            currentPage--;
                            renderUnits();
                        }
                    };
                    pagination.appendChild(prevBtn);

                    for (let i = 1; i <= totalPages; i++) {
                        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                            const pageBtn = document.createElement('button');
                            pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
                            pageBtn.textContent = i;
                            pageBtn.onclick = () => {
                                currentPage = i;
                                renderUnits();
                            };
                            pagination.appendChild(pageBtn);
                        } else if (i === currentPage - 2 || i === currentPage + 2) {
                            const dots = document.createElement('span');
                            dots.textContent = '...';
                            dots.style.padding = '8px';
                            pagination.appendChild(dots);
                        }
                    }

                    const nextBtn = document.createElement('button');
                    nextBtn.className = 'page-btn';
                    nextBtn.textContent = 'Next';
                    nextBtn.disabled = currentPage === totalPages;
                    nextBtn.onclick = () => {
                        if (currentPage < totalPages) {
                            currentPage++;
                            renderUnits();
                        }
                    };
                    pagination.appendChild(nextBtn);
                }


                function toggleDropdown(id) {
                    const dropdown = document.getElementById(`dropdown-${id}`);
                    const allDropdowns = document.querySelectorAll('.dropdown-content');

                    allDropdowns.forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('show');
                        }
                    });

                    dropdown.classList.toggle('show');
                }

                function showUnitsList() {
                    document.getElementById('unitsList').style.display = 'block';
                    document.getElementById('editForm').classList.remove('show');
                    editingUnit = null;
                }

                function showAddNew() {
                    editingUnit = null;
                    document.getElementById('formTitle').textContent = 'Add Unit';
                    document.getElementById('submitBtn').textContent = 'Create';
                    document.getElementById('unitForm').reset();
                    document.getElementById('unitsList').style.display = 'none';
                    document.getElementById('editForm').classList.add('show');
                }
                function editUnit(id) {
                    const unit = units.find(u => u.id === id);
                    if (!unit) return;

                    editingUnit = unit;
                    document.getElementById('formTitle').textContent = 'Update Unit';
                    document.getElementById('submitBtn').textContent = 'Update';

                    document.getElementById('unitTitle').value = unit.title;
                    document.getElementById('unitShortName').value = unit.shortName;

                    document.getElementById('unitsList').style.display = 'none';
                    document.getElementById('editForm').classList.add('show');
                    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                        dropdown.classList.remove('show');
                    });
                }

                function deleteUnit(id) {
                    deleteId = id;
                    document.getElementById('deleteModal').classList.add('show');


                    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                        dropdown.classList.remove('show');
                    });
                }


                function confirmDelete() {
                    if (deleteId) {
                        units = units.filter(u => u.id !== deleteId);
                        filteredUnits = filteredUnits.filter(u => u.id !== deleteId);


                        const totalPages = Math.ceil(filteredUnits.length / entriesPerPage);
                        if (currentPage > totalPages && totalPages > 0) {
                            currentPage = totalPages;
                        }

                        renderUnits();
                        closeDeleteModal();
                    }
                }


                function closeDeleteModal() {
                    document.getElementById('deleteModal').classList.remove('show');
                    deleteId = null;
                }


                function saveUnit() {
                    const title = document.getElementById('unitTitle').value.trim();
                    const shortName = document.getElementById('unitShortName').value.trim();

                    if (!title || !shortName) {
                        alert('Both title and short name are required');
                        return;
                    }

                    const unitData = {
                        title: title,
                        shortName: shortName
                    };

                    if (editingUnit) {

                        const index = units.findIndex(u => u.id === editingUnit.id);
                        if (index !== -1) {
                            units[index] = { ...units[index], ...unitData };
                        }


                        const filteredIndex = filteredUnits.findIndex(u => u.id === editingUnit.id);
                        if (filteredIndex !== -1) {
                            filteredUnits[filteredIndex] = { ...filteredUnits[filteredIndex], ...unitData };
                        }
                    } else {

                        const newId = Math.max(...units.map(u => u.id)) + 1;
                        const newUnit = { id: newId, ...unitData };
                        units.unshift(newUnit);

                        const searchTerm = document.getElementById('searchBox').value.toLowerCase();
                        if (!searchTerm ||
                            title.toLowerCase().includes(searchTerm) ||
                            shortName.toLowerCase().includes(searchTerm)) {
                            filteredUnits.unshift(newUnit);
                        }
                    }

                    renderUnits();
                    showUnitsList();
                }
                document.addEventListener('click', function (e) {
                    if (e.target.classList.contains('modal')) {
                        e.target.classList.remove('show');
                        deleteId = null;
                    }
                });
                document.addEventListener('DOMContentLoaded', init);


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
</main></div></body>
</html>
  </>
);

export default Unit;
