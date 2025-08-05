import React from 'react';

const Supplier = () => (
  <>
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Supplier | salman</title>
<link href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" rel="stylesheet"/>
<link href="../css/dashboard.css" rel="stylesheet"/>
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
<a className="submenu-link" href="#"><span className="dot"></span>Product List</a>
<a className="submenu-link" href="#"><span className="dot"></span>Product Create</a>
<a className="submenu-link" href="#"><span className="dot"></span>Product Import</a>
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
<a className="submenu-link" href="#"><span className="dot"></span>Sale List</a>
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
<h1 className="page-title">Supplier</h1>
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
<div className="datatable-section">
<h2>Suppliers</h2>
<button className="add-button" onClick="showCreateForm()">
            ➕ Add New
          </button>
<table className="display" id="supplierTable" style="width: 100%">
<thead>
<tr>
<th>#</th>
<th>Name</th>
<th>Phone</th>
<th>Address</th>
<th>Created</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Courtney Hettinger</td>
<td>1-772-775-6908</td>
<td>507 Ernser LaneLittleton, SD 68876</td>
<td>19 Mar, 2025</td>
<td>
<select className="action-dropdown" onChange="handleAction(this)">
<option disabled="" selected="">⚙️ Action</option>
<option value="edit">✏️ Edit</option>
<option value="delete">🗑️ Delete</option>
</select>
</td>
</tr>
<tr>
<td>2</td>
<td>Dorothy Schoen</td>
<td>940.360.1600</td>
<td>8893 Hessel Rapid D'Amoreshire, VT 17466</td>
<td>19 Mar, 2025</td>
<td>
<select className="action-dropdown" onChange="handleAction(this)">
<option disabled="" selected="">⚙️ Action</option>
<option value="edit">✏️ Edit</option>
<option value="delete">🗑️ Delete</option>
</select>
</td>
</tr>
<tr>
<td>3</td>
<td>Gabriella Cole</td>
<td>330.896.7720</td>
<td>51734 Marianne Courts West Manley, SD 06568-0606</td>
<td>19 Mar, 2025</td>
<td>
<select className="action-dropdown" onChange="handleAction(this)">
<option disabled="" selected="">⚙️ Action</option>
<option value="edit">✏️ Edit</option>
<option value="delete">🗑️ Delete</option>
</select>
</td>
</tr>
<tr>
<td>4</td>
<td>Hallie Kessler</td>
<td>+1 (351) 831-1906</td>
<td>17902 Dorris Meadow Apt. 889 North Irmafurt, WI 00271</td>
<td>19 Mar, 2025</td>
<td>
<select className="action-dropdown" onChange="handleAction(this)">
<option disabled="" selected="">⚙️ Action</option>
<option value="edit">✏️ Edit</option>
<option value="delete">🗑️ Delete</option>
</select>
</td>
</tr>
<tr>
<td>5</td>
<td>Hello</td>
<td>1234567891</td>
<td>oasd@gmasdf.copm</td>
<td>02 Jul, 2025</td>
<td>
<select className="action-dropdown" onChange="handleAction(this)">
<option disabled="" selected="">⚙️ Action</option>
<option value="edit">✏️ Edit</option>
<option value="delete">🗑️ Delete</option>
</select>
</td>
</tr>
<tr>
<td>6</td>
<td>Hugh Hermann</td>
<td>(915) 812-0523</td>
<td>777 Welch Grove Apt. 135 Okunevafort, CA 55240</td>
<td>19 Mar, 2025</td>
<td>
<select className="action-dropdown" onChange="handleAction(this)">
<option disabled="" selected="">⚙️ Action</option>
<option value="edit">✏️ Edit</option>
<option value="delete">🗑️ Delete</option>
</select>
</td>
</tr>
<tr>
<td>7</td>
<td>Imelda Hartmann</td>
<td>458.361.0065</td>
<td>9074 Sporer Estates Apt. 619 Lake Kellenview, TN 49506</td>
<td>19 Mar, 2025</td>
<td>
<select className="action-dropdown" onChange="handleAction(this)">
<option disabled="" selected="">⚙️ Action</option>
<option value="edit">✏️ Edit</option>
<option value="delete">🗑️ Delete</option>
</select>
</td>
</tr>
<tr>
<td>8</td>
<td>Miss Twila Lindgren</td>
<td>1-689-531-1193</td>
<td>3648 Logan Freeway Dorothyfurt, OR 78257</td>
<td>19 Mar, 2025</td>
<td>
<select className="action-dropdown" onChange="handleAction(this)">
<option disabled="" selected="">⚙️ Action</option>
<option value="edit">✏️ Edit</option>
<option value="delete">🗑️ Delete</option>
</select>
</td>
</tr>
<tr>
<td>9</td>
<td>Own Supplier</td>
<td>012345678</td>
<td></td>
<td>19 Mar, 2025</td>
<td>
<select className="action-dropdown" onChange="handleAction(this)">
<option disabled="" selected="">⚙️ Action</option>
<option value="edit">✏️ Edit</option>
<option value="delete">🗑️ Delete</option>
</select>
</td>
</tr>
<tr>
<td>10</td>
<td>Paris Windler</td>
<td>+13528197706</td>
<td>1108 Dickens Fork Apt. 903 Abshireview, NC 06169-0040</td>
<td>19 Mar, 2025</td>
<td>
<select className="action-dropdown" onChange="handleAction(this)">
<option disabled="" selected="">⚙️ Action</option>
<option value="edit">✏️ Edit</option>
<option value="delete">🗑️ Delete</option>
</select>
</td>
</tr>
</tbody>
</table>
</div>
<div id="editForm" style="display: none">
<h2>Edit Supplier</h2>
<form id="supplierEditForm">
<label>Name *</label>
<input id="editName" required="" type="text"/>
<label>Phone *</label>
<input id="editPhone" required="" type="text"/>
<label>Address</label>
<input id="editAddress" type="text"/>
<button type="submit">Update</button>
</form>
</div>
<div id="createForm" style="
            display: none;
            padding: 20px;
            background: #f9f9f9;
            border: 1px solid #ccc;
            margin-top: 20px;
            border-radius: 8px;
            max-width: 600px;
          ">
<h2>Add New Supplier</h2>
<form id="supplierCreateForm">
<label>Name *</label>
<input id="createName" required="" type="text"/>
<label>Phone *</label>
<input id="createPhone" required="" type="text"/>
<label>Address</label>
<input id="createAddress" type="text"/>
<button type="submit">Create</button>
</form>
</div>
</main>
</div>
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script>
      $(document).ready(function () {
        $("#supplierTable").DataTable({
          pageLength: 10,
          lengthMenu: [10, 25, 50, 100],
        });
      });

      let editingRow = null;

      function handleAction(select) {
        const action = select.value;
        const row = select.closest("tr");

        if (action === "edit") {
          editingRow = row;
          document.getElementById("editForm").style.display = "block";
          document.getElementById("editName").value =
            row.cells[1].textContent.trim();
          document.getElementById("editPhone").value =
            row.cells[2].textContent.trim();
          document.getElementById("editAddress").value =
            row.cells[3].textContent.trim();
          select.selectedIndex = 0;
          document
            .getElementById("editForm")
            .scrollIntoView({ behavior: "smooth" });
        } else if (action === "delete") {
          if (confirm("Are you sure you want to delete this supplier?")) {
            row.remove();
          }
        }
      }

      document
        .getElementById("supplierEditForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          if (editingRow) {
            editingRow.cells[1].textContent = document
              .getElementById("editName")
              .value.trim();
            editingRow.cells[2].textContent = document
              .getElementById("editPhone")
              .value.trim();
            editingRow.cells[3].textContent = document
              .getElementById("editAddress")
              .value.trim();
            document.getElementById("editForm").style.display = "none";
            editingRow = null;
          }
        });

      function showCreateForm() {
        document.getElementById("createForm").style.display = "block";
        document
          .getElementById("createForm")
          .scrollIntoView({ behavior: "smooth" });
      }

      document
        .getElementById("supplierCreateForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const name = document.getElementById("createName").value.trim();
          const phone = document.getElementById("createPhone").value.trim();
          const address = document.getElementById("createAddress").value.trim();

          if (name && phone) {
            const table = $("#supplierTable").DataTable();
            const date = new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });

            table.row
              .add([
                table.rows().count() + 1,
                name,
                phone,
                address,
                date,
                `<select class="action-dropdown" onChange="handleAction(this)">
              <option selected disabled>⚙️ Action</option>
              <option value="edit">✏️ Edit</option>
              <option value="delete">🗑️ Delete</option>
            </select>`,
              ])
              .draw();

            document.getElementById("supplierCreateForm").reset();
            document.getElementById("createForm").style.display = "none";
          }
        });
 
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'customer.html') {
      setActiveSubmenuItem('customer');
    } else if (currentPage === 'supplier.html') {
      setActiveSubmenuItem('supplier');
    }
  });

  function setActiveSubmenuItem(type) {
    const submenu = document.getElementById('peopleSubmenu');
    submenu.style.display = 'block';

    if (type === 'customer') {
      submenu.querySelector('a[href*="customer.html"]').classList.add('active');
    } else if (type === 'supplier') {
      submenu.querySelector('a[href*="supplier.html"]').classList.add('active');
    }
  }
    </script>
<script src="../js/script.js"></script>
</body>
</html>

  </>
);

export default Supplier;
