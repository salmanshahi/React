import React, { useState, useEffect } from 'react';

const Category = () => {
  const [brands, setBrands] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [brandToDelete, setBrandToDelete] = useState(null);

  useEffect(() => {
    // Load brands from localStorage
    let storedBrands = JSON.parse(localStorage.getItem('brands'));
    if (!storedBrands || storedBrands.length === 0) {
      storedBrands = [
        { id: 1, name: 'Snacks', image: 'snacks.png', status: 'Active' },
        { id: 2, name: 'CreamBiscuits', image: 'cream.png', status: 'Active' },
        // Add other brands here...
      ];
      localStorage.setItem('brands', JSON.stringify(storedBrands));
    }
    setBrands(storedBrands);
    setFilteredBrands(storedBrands);
  }, []);

  const renderTable = () => {
    const start = (currentPage - 1) * entriesPerPage;
    const end = start + entriesPerPage;
    const paginatedBrands = filteredBrands.slice(start, end);

    return paginatedBrands.map((brand, index) => (
      <tr key={brand.id}>
        <td>{start + index + 1}</td>
        <td>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {brand.image ? (
              <img src={`../images/${brand.image}`} className="brand-image" alt={brand.name} />
            ) : (
              <div className="no-image">NO IMAGE<br />AVAILABLE</div>
            )}
            <span>{brand.name}</span>
          </div>
        </td>
        <td><span className="status-badge">{brand.status}</span></td>
        <td>
          <div className="action-dropdown">
            <button className="action-btn" onClick={() => toggleDropdown(brand.id)}>
              Action ▼
            </button>
            <div className="dropdown-menu" id={`dropdown-${brand.id}`}>
              <button className="dropdown-item edit" onClick={() => editBrand(brand.id)}>
                Edit
              </button>
              <button className="dropdown-item delete" onClick={() => deleteBrand(brand.id)}>
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    ));
  };

  const toggleDropdown = (brandId) => {
    const dropdown = document.getElementById(`dropdown-${brandId}`);
    dropdown.classList.toggle('show');
  };

  const editBrand = (brandId) => {
    window.location.href = `editcategory.html?id=${brandId}`;
  };

  const deleteBrand = (brandId) => {
    setBrandToDelete(brandId);
    document.getElementById('deleteModal').classList.add('show');
  };

  const closeDeleteModal = () => {
    document.getElementById('deleteModal').classList.remove('show');
    setBrandToDelete(null);
  };

  const confirmDelete = () => {
    if (brandToDelete) {
      const updatedBrands = brands.filter((brand) => brand.id !== brandToDelete);
      setBrands(updatedBrands);
      setFilteredBrands(updatedBrands);
      localStorage.setItem('brands', JSON.stringify(updatedBrands));
      alert('Brand has been deleted successfully.');
    }
    closeDeleteModal();
  };

  const changeEntries = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const searchBrands = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = brands.filter((brand) =>
      brand.name.toLowerCase().includes(searchTerm)
    );
    setFilteredBrands(filtered);
    setCurrentPage(1);
  };

  const changePage = (page) => {
    if (page === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (page === 'next' && currentPage < Math.ceil(filteredBrands.length / entriesPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (typeof page === 'number') {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container">
      <aside className="sidebar">
        {/* Sidebar content here */}
      </aside>
      <main className="main-content">
        <header className="top-header">
          <div className="header-left">
            <button className="hamburger-menu">☰</button>
            <h1 className="page-title">Category</h1>
          </div>
          <div className="header-right">
            <button className="pos-button" onClick={() => window.location.href = 'pos.html'}>
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
          <div className="controls">
            <div className="show-entries">
              <span>Show</span>
              <select id="entriesSelect" onChange={changeEntries}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span>entries</span>
            </div>
            <div className="search-box">
              <span>Search:</span>
              <input id="searchInput" onKeyUp={searchBrands} placeholder="Search..." type="text" />
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th className="sortable" onClick={() => changePage('name')}>Name ⇅</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{renderTable()}</tbody>
            </table>
          </div>

          <div className="pagination-container">
            <div className="pagination-info" id="paginationInfo">
              Showing {currentPage} of {Math.ceil(filteredBrands.length / entriesPerPage)} pages
            </div>
            <div className="pagination">
              <button id="prevBtn" onClick={() => changePage('prev')}>Previous</button>
              <button onClick={() => changePage(1)}>1</button>
              <button onClick={() => changePage(2)}>2</button>
              <button onClick={() => changePage(3)}>3</button>
              <button id="nextBtn" onClick={() => changePage('next')}>Next</button>
            </div>
          </div>
        </div>
      </main>

      {/* Delete Modal */}
      <div className="modal" id="deleteModal">
        <div className="modal-content">
          <h3>Confirm Delete</h3>
          <p>Are you sure you want to delete this brand? This action cannot be undone.</p>
          <div className="modal-buttons">
            <button className="btn-cancel" onClick={closeDeleteModal}>Cancel</button>
            <button className="btn-confirm" onClick={confirmDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
