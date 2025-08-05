import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { useNavigate } from 'react-router-dom';


// Register Chart.js components
Chart.register(...registerables);

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const dailyChartRef = useRef(null);
  const monthlyChartRef = useRef(null);
  const dailyChartInstance = useRef(null);
  const monthlyChartInstance = useRef(null);
   const navigate = useNavigate();


  // Toggle submenu function
  const toggleSubmenu = (submenuId, element) => {
    setExpandedMenus(prev => ({
      ...prev,
      [submenuId]: !prev[submenuId]
    }));
  };

  // Toggle user dropdown
  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // Initialize charts
  useEffect(() => {
    // Daily Chart
    if (dailyChartRef.current) {
      const dailyCtx = dailyChartRef.current.getContext('2d');
      
      if (dailyChartInstance.current) {
        dailyChartInstance.current.destroy();
      }
      
      dailyChartInstance.current = new Chart(dailyCtx, {
        type: 'line',
        data: {
          labels: [
            '2025-07-09', '2025-07-06', '2025-07-07', '2025-07-02',
            '2025-06-28', '2025-06-29', '2025-06-22', '2025-06-27',
            '2025-06-21', '2025-06-18', '2025-06-16', '2025-06-17',
            '2025-06-12', '2025-06-10'
          ],
          datasets: [{
            label: 'Sales',
            data: [7500, 0, 22000, 2000, 1000, 0, 2000, 2000, 4000, 1000, 3000, 2000, 3000, 2000],
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2,
            pointBackgroundColor: '#3B82F6',
            pointBorderColor: '#3B82F6',
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: true,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                boxWidth: 12,
                usePointStyle: true
              }
            }
          },
          scales: {
            x: {
              ticks: {
                font: { size: 10 },
                maxRotation: 45,
                minRotation: 45
              },
              grid: { display: false }
            },
            y: {
              beginAtZero: true,
              max: 25000,
              ticks: {
                stepSize: 5000,
                font: { size: 10 },
                callback: function (value) {
                  return value.toLocaleString();
                }
              },
              grid: { color: 'rgba(0, 0, 0, 0.05)' }
            }
          }
        }
      });
    }

    // Monthly Chart
    if (monthlyChartRef.current) {
      const monthlyCtx = monthlyChartRef.current.getContext('2d');
      
      if (monthlyChartInstance.current) {
        monthlyChartInstance.current.destroy();
      }
      
      monthlyChartInstance.current = new Chart(monthlyCtx, {
        type: 'bar',
        data: {
          labels: [
            '2025-01', '2025-02', '2025-03', '2025-04',
            '2025-05', '2025-06', '2025-07', '2025-08',
            '2025-09', '2025-10', '2025-11', '2025-12'
          ],
          datasets: [{
            label: 'Sales',
            data: [0, 0, 2000, 1000, 0, 28000, 31000, 0, 0, 0, 0, 0],
            backgroundColor: '#3B82F6',
            borderColor: '#3B82F6',
            borderWidth: 1,
            borderRadius: 4,
            borderSkipped: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                boxWidth: 12,
                usePointStyle: true
              }
            }
          },
          scales: {
            x: {
              ticks: { font: { size: 10 } },
              grid: { display: false }
            },
            y: {
              beginAtZero: true,
              max: 35000,
              ticks: {
                stepSize: 5000,
                font: { size: 10 },
                callback: function (value) {
                  return value.toLocaleString();
                }
              },
              grid: { color: 'rgba(0, 0, 0, 0.05)' }
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (dailyChartInstance.current) {
        dailyChartInstance.current.destroy();
      }
      if (monthlyChartInstance.current) {
        monthlyChartInstance.current.destroy();
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownOpen && !event.target.closest('.user-dropdown-container')) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userDropdownOpen]);

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f6f9;
      color: #333;
      overflow-x: hidden;
    }

    .container {
      display: flex;
      min-height: 100vh;
    }

    .sidebar {
      width: 230px;
      background: linear-gradient(135deg, #878787, #26a69a);
      color: black;
      padding: 20px 0;
      position: fixed;
      height: 100vh;
      overflow-y: auto;
      transition: width 0.2s ease;
      z-index: 100;
    }

    .sidebar.collapsed {
      width: 70px;
    }

    .sidebar.collapsed .username,
    .sidebar.collapsed .nav-text,
    .sidebar.collapsed .nav-chevron,
    .sidebar.collapsed .settings-header {
      display: none;
    }

    .sidebar.collapsed .nav-link {
      justify-content: center;
    }

    .user-section {
      display: flex;
      align-items: center;
      padding: 20px 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .user-avatar {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      font-size: 16px;
    }

    .username {
      font-size: 16px;
      font-weight: 500;
    }

    .sidebar-nav {
      padding: 10px 0;
    }

    .nav-link {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      color: black;
      text-decoration: none;
      transition: all 0.2s ease;
      border-left: 3px solid transparent;
      cursor: pointer;
    }

    .nav-link.active {
      background: rgba(255, 255, 255, 0.15);
      color: white;
      border-left-color: white;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .nav-icon {
      margin-right: 12px;
      font-size: 16px;
      width: 20px;
      text-align: center;
    }

    .nav-text {
      flex: 1;
      font-size: 14px;
    }

    .nav-chevron {
      font-size: 12px;
      opacity: 0.6;
      transform: ${props => expandedMenus[props.submenuId] ? 'rotate(270deg)' : 'rotate(180deg)'};
      transition: transform 0.2s ease;
    }

    .submenu {
      display: ${props => expandedMenus[props.submenuId] ? 'block' : 'none'};
      padding-left: 2rem;
    }

    .submenu-link {
      display: flex;
      align-items: center;
      padding: 0.6rem 1rem;
      color: black;
      text-decoration: none;
      font-size: 0.95rem;
      transition: background-color 0.3s ease;
      cursor: pointer;
    }

    .submenu-link:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateX(2px);
    }

    .submenu-link.active {
      background-color: rgba(0, 0, 0, 0.1);
      color: #ffffff;
      font-weight: bold;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    }

    .submenu-link .dot {
      width: 12px;
      height: 12px;
      color: black;
      background-color: black;
      border-radius: 50%;
      display: inline-block;
      margin-right: 10px;
    }

    .settings-section {
      margin-top: 20px;
      padding: 0 20px;
    }

    .settings-header {
      font-size: 11px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 10px;
      letter-spacing: 1px;
    }

    .main-content {
      flex: 1;
      margin-left: 230px;
      background: #f4f6f9;
      transition: margin-left 0.3s ease;
    }

    .main-content.collapsed {
      margin-left: 70px;
    }

    .top-header {
      background: white;
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid #e5e7eb;
    }

    .header-left {
      display: flex;
      align-items: center;
    }

    .hamburger-menu {
      background: none;
      border: none;
      font-size: 18px;
      margin-right: 15px;
      cursor: pointer;
      color: #6b7280;
    }

    .page-title {
      font-size: 24px;
      font-weight: 600;
      color: #1f2937;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .pos-button {
      background: #8b7cf6;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .settings-icon,
    .user-menu {
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      color: #6b7280;
      padding: 8px;
      border-radius: 4px;
    }

    .settings-icon:hover,
    .user-menu:hover {
      background: #f3f4f6;
    }

    .user-dropdown-container {
      position: relative;
      display: inline-block;
    }

    .user-dropdown {
      display: ${props => props.open ? 'block' : 'none'};
      position: absolute;
      right: 0;
      background-color: white;
      min-width: 120px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      border-radius: 5px;
      overflow: hidden;
    }

    .user-dropdown a {
      display: block;
      padding: 10px 16px;
      color: #333;
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
    }

    .user-dropdown a:hover {
      background-color: #f0f0f0;
    }

    .stats-section {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      padding: 20px 30px;
    }

    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      border-left: 4px solid;
    }

    .stat-card.teal-card {
      border-left-color: #14b8a6;
    }

    .stat-card.red-card {
      border-left-color: #ef4444;
    }

    .stat-card.green-card {
      border-left-color: #22c55e;
    }

    .stat-card.yellow-card {
      border-left-color: #f59e0b;
    }

    .stat-icon {
      font-size: 24px;
      margin-right: 15px;
      opacity: 0.8;
    }

    .stat-label {
      font-size: 14px;
      color: #6b7280;
      margin-bottom: 5px;
    }

    .stat-value {
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
    }

    .info-section {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      padding: 0 30px 20px;
    }

    .info-card {
      border-radius: 8px;
      padding: 25px 20px;
      text-align: center;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .info-card.teal-bg {
      background: linear-gradient(135deg, #14b8a6, #0d9488);
    }

    .info-card.green-bg {
      background: linear-gradient(135deg, #22c55e, #16a34a);
    }

    .info-card.yellow-bg {
      background: linear-gradient(135deg, #f59e0b, #d97706);
    }

    .info-card.red-bg {
      background: linear-gradient(135deg, #ef4444, #dc2626);
    }

    .info-number {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 8px;
      line-height: 1;
    }

    .info-label {
      font-size: 16px;
      margin-bottom: 20px;
      opacity: 0.95;
    }

    .more-info {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 13px;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .more-info:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .charts-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      padding: 0 30px 30px;
    }

    .chart-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .chart-header h3 {
      font-size: 16px;
      color: #1f2937;
      font-weight: 600;
    }

    .date-selector {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .date-input {
      border: 1px solid #d1d5db;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 12px;
      background: white;
    }

    .date-separator {
      color: #6b7280;
      font-size: 14px;
    }

    .chart-container {
      position: relative;
      height: 300px;
    }

    .chart-container canvas {
      max-width: 100%;
      height: 100% !important;
    }

    @media (max-width: 1200px) {
      .stats-section,
      .info-section {
        grid-template-columns: repeat(2, 1fr);
      }

      .charts-section {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .sidebar {
        width: 200px;
      }

      .main-content {
        margin-left: 200px;
      }

      .stats-section,
      .info-section {
        grid-template-columns: 1fr;
        padding: 15px 20px;
      }

      .top-header {
        padding: 15px 20px;
      }

      .page-title {
        font-size: 20px;
      }
    }

    @media (max-width: 480px) {
      .sidebar {
        width: 100%;
        position: relative;
        height: auto;
      }

      .main-content {
        margin-left: 0;
      }

      .header-right {
        gap: 10px;
      }

      .pos-button {
        padding: 6px 12px;
        font-size: 12px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="container">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="user-section">
            <div className="user-avatar">
              <span className="avatar-lock">🔒</span>
            </div>
            <span className="username">salman</span>
          </div>

          <nav className="sidebar-nav">
            <div className="nav-link active">
              <span className="nav-icon">📊</span>
              <span className="nav-text">Dashboard</span>
            </div>
            
            <div className="nav-link" onClick={() => navigate('/pos')}>
              <span className="nav-icon">🛒</span>
              <span className="nav-text">POS</span>
            </div>
            
            <div className="nav-link collapsible" onClick={() => toggleSubmenu('peopleSubmenu')}>
              <span className="nav-icon">👤</span>
              <span className="nav-text">People</span>
              <span className="nav-chevron">❮</span>
            </div>
            <div className={`submenu ${expandedMenus['peopleSubmenu'] ? '' : 'hidden'}`} style={{display: expandedMenus['peopleSubmenu'] ? 'block' : 'none'}}>
              <div className="submenu-link" onClick={() => console.log('Navigate to Customer')}>
                <span className="dot"></span>Customer
              </div>
              <div className="submenu-link" onClick={() => console.log('Navigate to Supplier')}>
                <span className="dot"></span>Supplier
              </div>
            </div>

            <div className="nav-link collapsible" onClick={() => toggleSubmenu('productSubmenu')}>
              <span className="nav-icon">📦</span>
              <span className="nav-text">Product</span>
              <span className="nav-chevron">❮</span>
            </div>
            <div className={`submenu ${expandedMenus['productSubmenu'] ? '' : 'hidden'}`} style={{display: expandedMenus['productSubmenu'] ? 'block' : 'none'}}>
              <div className="submenu-link" onClick={() => console.log('Navigate to Product List')}>
                <span className="dot"></span>Product List
              </div>
              <div className="submenu-link" onClick={() => console.log('Navigate to Product Create')}>
                <span className="dot"></span>Product Create
              </div>
              <div className="submenu-link" onClick={() => console.log('Navigate to Product Import')}>
                <span className="dot"></span>Product Import
              </div>
              <div className="submenu-link" onClick={() => console.log('Navigate to Brand')}>
                <span className="dot"></span>Brand
              </div>
              <div className="submenu-link" onClick={() => console.log('Navigate to Category')}>
                <span className="dot"></span>Category
              </div>
              <div className="submenu-link" onClick={() => console.log('Navigate to Unit')}>
                <span className="dot"></span>Unit
              </div>
            </div>

            <div className="nav-link collapsible" onClick={() => toggleSubmenu('saleSubmenu')}>
              <span className="nav-icon">🏷️</span>
              <span className="nav-text">Sale</span>
              <span className="nav-chevron">❮</span>
            </div>
            <div className={`submenu ${expandedMenus['saleSubmenu'] ? '' : 'hidden'}`} style={{display: expandedMenus['saleSubmenu'] ? 'block' : 'none'}}>
              <div className="submenu-link" onClick={() => console.log('Navigate to Sales')}>
                <span className="dot"></span>Sale List
              </div>
            </div>

            <div className="nav-link collapsible" onClick={() => toggleSubmenu('purchaseSubmenu')}>
              <span className="nav-icon">🛍️</span>
              <span className="nav-text">Purchase</span>
              <span className="nav-chevron">❮</span>
            </div>
            <div className={`submenu ${expandedMenus['purchaseSubmenu'] ? '' : 'hidden'}`} style={{display: expandedMenus['purchaseSubmenu'] ? 'block' : 'none'}}>
              <div className="submenu-link" onClick={() => console.log('Navigate to Purchase List')}>
                <span className="dot"></span>Purchase List
              </div>
              <div className="submenu-link" onClick={() => console.log('Navigate to Purchase Create')}>
                <span className="dot"></span>Purchase Create
              </div>
            </div>

            <div className="nav-link collapsible" onClick={() => toggleSubmenu('reportsSubmenu')}>
              <span className="nav-icon">📈</span>
              <span className="nav-text">Reports</span>
              <span className="nav-chevron">❮</span>
            </div>
            <div className={`submenu ${expandedMenus['reportsSubmenu'] ? '' : 'hidden'}`} style={{display: expandedMenus['reportsSubmenu'] ? 'block' : 'none'}}>
              <div className="submenu-link" onClick={() => console.log('Navigate to Sales Summary')}>
                <span className="dot"></span>Sales Summary
              </div>
              <div className="submenu-link" onClick={() => console.log('Navigate to Sales Report')}>
                <span className="dot"></span>Sales
              </div>
              <div className="submenu-link" onClick={() => console.log('Navigate to Inventory')}>
                <span className="dot"></span>Inventory
              </div>
            </div>
          </nav>

          <div className="settings-section">
            <div className="settings-header">SETTINGS</div>
            <div className="nav-link collapsible" onClick={() => toggleSubmenu('websiteSubmenu')}>
              <span className="nav-icon">⚙️</span>
              <span className="nav-text">Website Settings</span>
              <span className="nav-chevron">❮</span>
            </div>
            <div className={`submenu ${expandedMenus['websiteSubmenu'] ? '' : 'hidden'}`} style={{display: expandedMenus['websiteSubmenu'] ? 'block' : 'none'}}>
              <div className="submenu-link" onClick={() => console.log('Navigate to General Settings')}>
                <span>⚙️</span>General Setting
              </div>
              <div className="submenu-link" onClick={() => console.log('Navigate to Currency')}>
                <span className="coin-icon">💵</span>Currency
              </div>
              <div className="nav-link collapsible inner" onClick={() => toggleSubmenu('rulesSubmenu')}>
                <span>🛡️</span>
                <span className="nav-text">Rules & Permission</span>
                <span className="nav-chevron">❮</span>
              </div>
              <div className={`submenu ${expandedMenus['rulesSubmenu'] ? '' : 'hidden'}`} style={{display: expandedMenus['rulesSubmenu'] ? 'block' : 'none'}}>
                <div className="submenu-link" onClick={() => console.log('Navigate to Rules')}>
                  <span>📜</span>Rules
                </div>
                <div className="submenu-link" onClick={() => console.log('Navigate to Permission')}>
                  <span>🔐</span>Permission
                </div>
              </div>
              <div className="submenu-link" onClick={() => console.log('Navigate to User Management')}>
                <span>👥</span>User Management
              </div>
            </div>
          </div>
        </aside>
        <main className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <header className="top-header">
            <div className="header-left">
              <button className="hamburger-menu" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>☰</button>
              <h1 className="page-title">Dashboard</h1>
            </div>
            <div className="header-right">
              <button className="pos-button" onClick={() => console.log('Navigate to POS')}>🛒 POS</button>
              <button className="settings-icon" onClick={toggleFullscreen}>⛶</button>
              <div className="user-dropdown-container">
                <button className="user-menu" onClick={toggleUserDropdown}>👤 ▼</button>
                <div className="user-dropdown" style={{display: userDropdownOpen ? 'block' : 'none'}}>
                  <a onClick={() => console.log('Navigate to Profile')}>Profile</a>
                  <a onClick={() => console.log('Logout')}>Logout</a>
                </div>
              </div>
            </div>
          </header>

          {/* Stats Section */}
          <section className="stats-section">
            <div className="stat-card teal-card">
              <div className="stat-icon">⚙️</div>
              <div className="stat-info">
                <div className="stat-label">Sale SubTotal</div>
                <div className="stat-value">₹ 202,879.11</div>
              </div>
            </div>

            <div className="stat-card red-card">
              <div className="stat-icon">👍</div>
              <div className="stat-info">
                <div className="stat-label">Sale Discount</div>
                <div className="stat-value">₹ 3,232.39</div>
              </div>
            </div>

            <div className="stat-card green-card">
              <div className="stat-icon">🛒</div>
              <div className="stat-info">
                <div className="stat-label">Sale</div>
                <div className="stat-value">₹ 199,646.72</div>
              </div>
            </div>

            <div className="stat-card yellow-card">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <div className="stat-label">Sale Due</div>
                <div className="stat-value">₹ 137,250.79</div>
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="info-section">
            <div className="info-card teal-bg">
              <div className="info-number">22</div>
              <div className="info-label">Customers</div>
              <button className="more-info" onClick={() => console.log('More info - Customers')}>More info ➤</button>
            </div>

            <div className="info-card green-bg">
              <div className="info-number">46</div>
              <div className="info-label">Products</div>
              <button className="more-info" onClick={() => console.log('More info - Products')}>More info ➤</button>
            </div>

            <div className="info-card yellow-bg">
              <div className="info-number">140</div>
              <div className="info-label">Sale</div>
              <button className="more-info" onClick={() => console.log('More info - Sale')}>More info ➤</button>
            </div>

            <div className="info-card red-bg">
              <div className="info-number">663</div>
              <div className="info-label">Sale Item</div>
              <button className="more-info" onClick={() => console.log('More info - Sale Item')}>More info ➤</button>
            </div>
          </section>

          {/* Charts Section */}
          <section className="charts-section">
            <div className="chart-card">
              <div className="chart-header">
                <h3>Daily Total Sales from 2025-06-10 to 2025-07-10</h3>
                <div className="date-selector">
                  <input type="date" defaultValue="2025-07-10" className="date-input" />
                  <span className="date-separator">-</span>
                  <input type="date" defaultValue="2025-07-10" className="date-input" />
                </div>
              </div>
              <div className="chart-container">
                <canvas ref={dailyChartRef} id="dailyChart"></canvas>
              </div>
            </div>

            <div className="chart-card">
              <div className="chart-header">
                <h3>Monthly Total Sales for 2025</h3>
              </div>
              <div className="chart-container">
                <canvas ref={monthlyChartRef} id="monthlyChart"></canvas>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;