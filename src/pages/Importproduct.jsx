import React from 'react';

const Importproduct = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Import Product | salman</title>
<link href="../css/dashboard.css" rel="stylesheet"/>
<style>
       

        .menu-toggle {
            width: 24px;
            height: 24px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .menu-toggle span {
            width: 100%;
            height: 3px;
            background-color: #666;
            border-radius: 2px;
        }

        .top-bar-right {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .pos-button {
            background-color: #6366f1;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .pos-button:hover {
            background-color: #5856eb;
        }

        .content-area {
            flex: 1;
            padding: 32px;
            background-color: #f8f9fa;
        }
        .import-card {
            background-color: white;
            border-radius: 12px;
            padding: 32px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            max-width: 600px;
        }

        .file-input-section {
            margin-bottom: 32px;
        }

        .section-title {
            font-size: 16px;
            font-weight: 500;
            color: #333;
            margin-bottom: 16px;
        }

        .file-input-container {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .file-input {
            flex: 1;
            padding: 12px 16px;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            font-size: 14px;
            color: #666;
            background-color: #f9fafb;
            cursor: pointer;
        }

        .file-input:focus {
            outline: none;
            border-color: #6366f1;
        }

        .browse-button {
            background-color: #6b7280;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .browse-button:hover {
            background-color: #5b6570;
        }

        .demo-button {
            background-color: transparent;
            color: #6b7280;
            border: 2px solid #e5e7eb;
            padding: 10px 16px;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s;
        }

        .demo-button:hover {
            border-color: #6366f1;
            color: #6366f1;
        }

        .save-button {
            width: 100%;
            background-color: #6366f1;
            color: white;
            border: none;
            padding: 16px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .save-button:hover {
            background-color: #5856eb;
        }

        .save-button:disabled {
            background-color: #9ca3af;
            cursor: not-allowed;
        }

        .hidden-file-input {
            display: none;
        }

        .file-info {
            margin-top: 12px;
            padding: 12px;
            background-color: #f0f9ff;
            border: 1px solid #bae6fd;
            border-radius: 6px;
            font-size: 14px;
            color: #0369a1;
        }

        .success-message {
            margin-top: 16px;
            padding: 12px;
            background-color: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 6px;
            color: #166534;
            font-size: 14px;
        }

        .error-message {
            margin-top: 16px;
            padding: 12px;
            background-color: #fef2f2;
            border: 1px solid #fecaca;
            border-radius: 6px;
            color: #dc2626;
            font-size: 14px;
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
<h1 className="page-title">Product</h1>
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
<h1 className="page-title"></h1>
<div className="import-card">
<div className="file-input-section">
<label className="section-title">File input</label>
<div className="file-input-container">
<input className="file-input" id="fileDisplay" placeholder="Choose file" readonly="" type="text"/>
<button className="browse-button" onClick="document.getElementById('fileInput').click()">Browse</button>
<button className="demo-button" onClick="downloadDemo()">
                  ⬇️ Demo
                </button>
</div>
<input accept=".csv,.xlsx,.xls" className="hidden-file-input" id="fileInput" onChange="handleFileSelect(this)" type="file"/>
<div className="file-info" id="fileInfo" style="display: none;"></div>
</div>
<button className="save-button" disabled="" id="saveButton" onClick="handleSave()">
              Save
            </button>
<div id="message" style="display: none;"></div>
</div>
</div>
</main></div>
<script>
        let selectedFile = null;

        function toggleSubmenu(element) {
            element.classList.toggle('expanded');
            const submenu = element.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('show');
            }
        }

        function handleFileSelect(input) {
            const file = input.files[0];
            if (file) {
                selectedFile = file;
                document.getElementById('fileDisplay').value = file.name;
                document.getElementById('saveButton').disabled = false;
                
                // Show file info
                const fileInfo = document.getElementById('fileInfo');
                fileInfo.innerHTML = `
                    <strong>Selected file:</strong> ${file.name}<br>
                    <strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB<br>
                    <strong>Type:</strong> ${file.type || 'Unknown'}
                `;
                fileInfo.style.display = 'block';
                
                // Hide any previous messages
                document.getElementById('message').style.display = 'none';
            }
        }

        function downloadDemo() {
            // Create a demo CSV file
            const csvContent = `Name,SKU,Price,Category,Brand,Unit,Description
"Sample Product 1","SKU001",29.99,"Electronics","BrandA","piece","Sample product description"
"Sample Product 2","SKU002",19.99,"Clothing","BrandB","piece","Another sample product"
"Sample Product 3","SKU003",39.99,"Home & Garden","BrandC","piece","Third sample product"`;
            
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'product_import_demo.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            showMessage('Demo file downloaded successfully!', 'success');
        }

        function handleSave() {
            if (!selectedFile) {
                showMessage('Please select a file first.', 'error');
                return;
            }

            // Simulate file processing
            const saveButton = document.getElementById('saveButton');
            saveButton.disabled = true;
            saveButton.textContent = 'Processing...';

            setTimeout(() => {
                // Simulate successful import
                showMessage(`File "${selectedFile.name}" has been processed successfully! Products have been imported.`, 'success');
                
                // Reset form
                selectedFile = null;
                document.getElementById('fileDisplay').value = '';
                document.getElementById('fileInput').value = '';
                document.getElementById('fileInfo').style.display = 'none';
                saveButton.textContent = 'Save';
                saveButton.disabled = true;
            }, 2000);
        }

        function showMessage(text, type) {
            const messageDiv = document.getElementById('message');
            messageDiv.textContent = text;
            messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
            messageDiv.style.display = 'block';
        }

        // Navigation functionality
        document.querySelectorAll('.nav-item:not(.has-submenu)').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all nav items
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
            });
        });

        // File drag and drop functionality
        const fileInput = document.getElementById('fileDisplay');
        
        fileInput.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.borderColor = '#6366f1';
            this.style.backgroundColor = '#f0f9ff';
        });
        
        fileInput.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.style.borderColor = '#e5e7eb';
            this.style.backgroundColor = '#f9fafb';
        });
        
        fileInput.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.borderColor = '#e5e7eb';
            this.style.backgroundColor = '#f9fafb';
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                if (file.type === 'text/csv' || file.name.endsWith('.csv') || 
                    file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                    file.type === 'application/vnd.ms-excel') {
                    selectedFile = file;
                    this.value = file.name;
                    document.getElementById('saveButton').disabled = false;
                    
                    const fileInfo = document.getElementById('fileInfo');
                    fileInfo.innerHTML = `
                        <strong>Selected file:</strong> ${file.name}<br>
                        <strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB<br>
                        <strong>Type:</strong> ${file.type || 'Unknown'}
                    `;
                    fileInfo.style.display = 'block';
                } else {
                    showMessage('Please select a valid CSV or Excel file.', 'error');
                }
            }
        });
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

export default Importproduct;
