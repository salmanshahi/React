import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const POSSystem = () => {
  // State management
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [fractionalDiscount, setFractionalDiscount] = useState(false);
  const [customer, setCustomer] = useState('Walking Customer');
  const [barcodeInput, setBarcodeInput] = useState('');
  const [productNameInput, setProductNameInput] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeSubmenus, setActiveSubmenus] = useState({});
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState('');
  const navigate = useNavigate();

  // Audio reference for beep sound
  const beepSoundRef = useRef(null);

  // Products data from the original JavaScript
  const products = [
    {
      id: 1,
      name: "Kinder Joy (Boys)",
      price: 109,
      image: "🍫", // Using emoji instead of image path
      code: "915",
    },
    {
      id: 2,
      name: "Ferrero Rocher Premium Chocolates",
      price: 1100,
      image: "🍫",
      code: "85",
    },
    {
      id: 3,
      name: "Dan Cake Classic Brownies",
      price: 140,
      image: "🧁",
      code: "76",
    },
    {
      id: 4,
      name: "Chicken Keema",
      price: 699,
      image: "🥩",
      code: "88",
    },
    {
      id: 5,
      name: "Chicken Eggs",
      price: 105,
      image: "🥚",
      code: "74",
    },
    {
      id: 6,
      name: "Dairy Milk Silk",
      price: 190,
      image: "🍫",
      code: "81",
    },
    {
      id: 7,
      name: "Chicken Drumsticks",
      price: 269,
      image: "🍗",
      code: "193",
    },
    {
      id: 8,
      name: "Bounty Chocolate",
      price: 105,
      image: "🥥",
      code: "79",
    },
    {
      id: 9,
      name: "Purnava Omega 3 Enriched Eggs",
      price: 280,
      image: "🥚",
      code: "89",
    },
    {
      id: 10,
      name: "Pran Potato Cracker",
      price: 9.9,
      image: "🥔",
      code: "87",
    },
    {
      id: 11,
      name: "Oreo Original Cream Biscuit",
      price: 150,
      image: "🍪",
      code: "89",
    },
    {
      id: 12,
      name: "Nestle Maggi 2-Minute Masala Instant Noodles",
      price: 174,
      image: "🍜",
      code: "93",
    },
  ];

  // Initialize beep sound
  useEffect(() => {
    // Create audio element for beep sound (using a data URL for a simple beep)
    beepSoundRef.current = new Audio();
    beepSoundRef.current.preload = 'auto';
  }, []);

  // Play beep sound
  const playBeep = () => {
    try {
      // Create a simple beep using Web Audio API
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.log('Audio not available');
    }
  };

  // Add to cart function
  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart(prevCart => [...prevCart, {
        id: product.id,
        name: product.name,
        price: parseFloat(product.price),
        quantity: 1,
      }]);
    }
    playBeep();
  };

  // Update quantity function
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
    playBeep();
  };

  // Remove from cart function
  const removeFromCart = (productId) => {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    setConfirmMessage(`Are you sure you want to delete "${item.name}" from cart?`);
    setConfirmAction(() => () => {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
      setShowConfirmDialog(false);
      playBeep();
    });
    setShowConfirmDialog(true);
  };

  // Clear cart function
  const clearCart = () => {
    setConfirmMessage('Are you sure you want to clear the cart?');
    setConfirmAction(() => () => {
      setCart([]);
      setDiscount(0);
      setShowConfirmDialog(false);
      playBeep();
    });
    setShowConfirmDialog(true);
  };

  // Checkout function
  const checkoutCart = () => {
    if (cart.length === 0) {
      alert('Cart is empty!');
      return;
    }
    alert('Checkout functionality coming soon!');
  };

  // Delete customer function
  const deleteCustomer = () => {
    setConfirmMessage('Are you sure you want to delete "Walking Customer"?');
    setConfirmAction(() => () => {
      setCustomer('');
      setShowConfirmDialog(false);
      playBeep();
    });
    setShowConfirmDialog(true);
  };

  // Search functions
  const searchByBarcode = () => {
    const product = products.find(p => p.code === barcodeInput);
    if (product) {
      addToCart(product.id);
      setBarcodeInput('');
    } else {
      alert('Product not found!');
    }
  };

  const searchByName = () => {
    const product = products.find(p => 
      p.name.toLowerCase().includes(productNameInput.toLowerCase())
    );
    if (product) {
      addToCart(product.id);
      setProductNameInput('');
    } else {
      alert('Product not found!');
    }
  };

  // Calculate totals
  const subTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = fractionalDiscount ? (subTotal * discount / 100) : discount;
  const finalTotal = Math.max(0, subTotal - discountAmount);

  // Toggle functions
  const toggleSubmenu = (submenuId) => {
    setActiveSubmenus(prev => ({
      ...prev,
      [submenuId]: !prev[submenuId]
    }));
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleLogout = () => {
    // Remove from localStorage (simulated)
    alert('Logging out...');
    // window.location.href = '../html/log-in.html';
  };

  // Handle Enter key for search inputs
  const handleBarcodeKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchByBarcode();
    }
  };

  const handleNameKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchByName();
    }
  };

  // Click outside handler for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownOpen) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [userDropdownOpen]);

  // Render submenu helper
  const renderSubmenu = (submenuId, items) => {
    if (!activeSubmenus[submenuId] || sidebarCollapsed) return null;
    
    return (
      <div style={{ paddingLeft: '2rem' }}>
        {items.map((item, index) => (
          <a 
            key={index} 
            href={item.href || "#"} 
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.6rem 1rem',
              color: 'black',
              textDecoration: 'none',
              fontSize: '0.95rem'
            }}
          >
            <span style={{
              width: '12px',
              height: '12px',
              backgroundColor: 'black',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '10px'
            }}></span>
            {item.label}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div style={{ 
      padding: 0, 
      margin: 0, 
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f4f6f9',
      color: '#333',
      overflowX: 'hidden'
    }}>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar */}
        <aside style={{
          width: sidebarCollapsed ? '70px' : '230px',
          background: 'linear-gradient(135deg, #878787, #26a69a)',
          color: 'black',
          padding: '20px 0',
          position: 'fixed',
          height: '100vh',
          overflowY: 'auto',
          transition: 'width 0.2s ease',
          zIndex: 100
        }}>
          {/* User Section */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '20px 15px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              fontSize: '16px'
            }}>
              🔒
            </div>
            {!sidebarCollapsed && <span style={{ fontSize: '16px', fontWeight: '500' }}>salman</span>}
          </div>

          {/* Navigation */}
          <nav style={{ padding: '10px 0' }}>
            {/* Dashboard */}
            <a href="#" onClick={() => navigate('/dashboard')} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              color: 'black',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              borderLeft: '3px solid transparent'
            }}>
              <span style={{ marginRight: '12px', fontSize: '16px', width: '20px', textAlign: 'center' }}>📊</span>
              {!sidebarCollapsed && <span style={{ flex: 1, fontSize: '14px' }}>Dashboard</span>}
            </a>

            {/* POS (Active) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              borderLeft: '3px solid white',
              background: 'rgba(255, 255, 255, 0.15)'
            }}>
              <span style={{ marginRight: '12px', fontSize: '16px', width: '20px', textAlign: 'center' }}>🛒</span>
              {!sidebarCollapsed && <span style={{ flex: 1, fontSize: '14px' }}>POS</span>}
            </div>

            {/* People */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 20px',
                color: 'black',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderLeft: '3px solid transparent'
              }}
              onClick={() => toggleSubmenu('peopleSubmenu')}
            >
              <span style={{ marginRight: '12px', fontSize: '16px', width: '20px', textAlign: 'center' }}>👤</span>
              {!sidebarCollapsed && (
                <>
                  <span style={{ flex: 1, fontSize: '14px' }}>People</span>
                  <span style={{ 
                    fontSize: '12px', 
                    opacity: 0.6,
                    transform: activeSubmenus.peopleSubmenu ? 'rotate(-90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}>❮</span>
                </>
              )}
            </div>
            {renderSubmenu('peopleSubmenu', [
              { label: 'Customer', href: '../html/customer.html' },
              { label: 'Supplier', href: '../html/supplier.html' }
            ])}

            {/* Product */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 20px',
                color: 'black',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderLeft: '3px solid transparent'
              }}
              onClick={() => toggleSubmenu('productSubmenu')}
            >
              <span style={{ marginRight: '12px', fontSize: '16px', width: '20px', textAlign: 'center' }}>📦</span>
              {!sidebarCollapsed && (
                <>
                  <span style={{ flex: 1, fontSize: '14px' }}>Product</span>
                  <span style={{ 
                    fontSize: '12px', 
                    opacity: 0.6,
                    transform: activeSubmenus.productSubmenu ? 'rotate(-90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}>❮</span>
                </>
              )}
            </div>
            {renderSubmenu('productSubmenu', [
              { label: 'Product List' },
              { label: 'Product Create' },
              { label: 'Product Import' },
              { label: 'Brand' },
              { label: 'Category' },
              { label: 'Unit' }
            ])}

            {/* Sale */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 20px',
                color: 'black',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderLeft: '3px solid transparent'
              }}
              onClick={() => toggleSubmenu('saleSubmenu')}
            >
              <span style={{ marginRight: '12px', fontSize: '16px', width: '20px', textAlign: 'center' }}>🏷️</span>
              {!sidebarCollapsed && (
                <>
                  <span style={{ flex: 1, fontSize: '14px' }}>Sale</span>
                  <span style={{ 
                    fontSize: '12px', 
                    opacity: 0.6,
                    transform: activeSubmenus.saleSubmenu ? 'rotate(-90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}>❮</span>
                </>
              )}
            </div>
            {renderSubmenu('saleSubmenu', [
              { label: 'Sale List' }
            ])}

            {/* Purchase */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 20px',
                color: 'black',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderLeft: '3px solid transparent'
              }}
              onClick={() => toggleSubmenu('purchaseSubmenu')}
            >
              <span style={{ marginRight: '12px', fontSize: '16px', width: '20px', textAlign: 'center' }}>🛍️</span>
              {!sidebarCollapsed && (
                <>
                  <span style={{ flex: 1, fontSize: '14px' }}>Purchase</span>
                  <span style={{ 
                    fontSize: '12px', 
                    opacity: 0.6,
                    transform: activeSubmenus.purchaseSubmenu ? 'rotate(-90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}>❮</span>
                </>
              )}
            </div>
            {renderSubmenu('purchaseSubmenu', [
              { label: 'Purchase List' },
              { label: 'Purchase Create' }
            ])}

            {/* Reports */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 20px',
                color: 'black',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderLeft: '3px solid transparent'
              }}
              onClick={() => toggleSubmenu('reportsSubmenu')}
            >
              <span style={{ marginRight: '12px', fontSize: '16px', width: '20px', textAlign: 'center' }}>📈</span>
              {!sidebarCollapsed && (
                <>
                  <span style={{ flex: 1, fontSize: '14px' }}>Reports</span>
                  <span style={{ 
                    fontSize: '12px', 
                    opacity: 0.6,
                    transform: activeSubmenus.reportsSubmenu ? 'rotate(-90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}>❮</span>
                </>
              )}
            </div>
            {renderSubmenu('reportsSubmenu', [
              { label: 'Sales Summary' },
              { label: 'Sales' },
              { label: 'Inventory' }
            ])}
          </nav>

          {/* Settings Section */}
          <div style={{ marginTop: '20px', padding: '0 20px' }}>
            {!sidebarCollapsed && (
              <div style={{
                fontSize: '11px',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '10px',
                letterSpacing: '1px'
              }}>
                SETTINGS
              </div>
            )}
            
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 20px',
                color: 'black',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderLeft: '3px solid transparent'
              }}
              onClick={() => toggleSubmenu('websiteSubmenu')}
            >
              <span style={{ marginRight: '12px', fontSize: '16px', width: '20px', textAlign: 'center' }}>⚙️</span>
              {!sidebarCollapsed && (
                <>
                  <span style={{ flex: 1, fontSize: '14px' }}>Website Settings</span>
                  <span style={{ 
                    fontSize: '12px', 
                    opacity: 0.6,
                    transform: activeSubmenus.websiteSubmenu ? 'rotate(-90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}>❮</span>
                </>
              )}
            </div>
            {activeSubmenus.websiteSubmenu && !sidebarCollapsed && (
              <div style={{ paddingLeft: '2rem' }}>
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.6rem 1rem',
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}>
                  <span style={{ marginRight: '10px' }}>⚙️</span>General Setting
                </a>
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.6rem 1rem',
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}>
                  <span style={{ marginRight: '10px' }}>💵</span>Currency
                </a>
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.6rem 1rem',
                    color: 'black',
                    cursor: 'pointer',
                    fontSize: '0.95rem'
                  }}
                  onClick={() => toggleSubmenu('rulesSubmenu')}
                >
                  <span style={{ marginRight: '10px' }}>🛡️</span>
                  <span style={{ flex: 1 }}>Rules & Permission</span>
                  <span style={{ 
                    fontSize: '12px', 
                    opacity: 0.6,
                    transform: activeSubmenus.rulesSubmenu ? 'rotate(-90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}>❮</span>
                </div>
                {activeSubmenus.rulesSubmenu && (
                  <div style={{ paddingLeft: '1rem' }}>
                    <a href="#" style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.6rem 1rem',
                      color: 'black',
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}>
                      <span style={{ marginRight: '10px' }}>📜</span>Rules
                    </a>
                    <a href="#" style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.6rem 1rem',
                      color: 'black',
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}>
                      <span style={{ marginRight: '10px' }}>🔐</span>Permission
                    </a>
                  </div>
                )}
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.6rem 1rem',
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}>
                  <span style={{ marginRight: '10px' }}>👥</span>User Management
                </a>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main style={{
          flex: 1,
          marginLeft: sidebarCollapsed ? '70px' : '240px',
          background: '#f4f6f9',
          transition: 'margin-left 0.3s ease'
        }}>
          {/* Header */}
          <header style={{
            background: 'white',
            padding: '15px 30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button 
                onClick={toggleSidebar}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  marginRight: '15px',
                  cursor: 'pointer',
                  color: '#6b7280'
                }}
              >
                ☰
              </button>
              <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#1f2937' }}>POS</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button style={{
                background: '#8b7cf6',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                🛒 POS
              </button>
              <button 
                onClick={toggleFullscreen}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  cursor: 'pointer',
                  color: '#6b7280',
                  padding: '8px',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => e.target.style.background = '#f3f4f6'}
                onMouseLeave={(e) => e.target.style.background = 'none'}
              >
                ⛶
              </button>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setUserDropdownOpen(!userDropdownOpen);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '16px',
                    cursor: 'pointer',
                    color: '#6b7280',
                    padding: '8px',
                    borderRadius: '4px'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#f3f4f6'}
                  onMouseLeave={(e) => e.target.style.background = 'none'}
                >
                  👤 ▼
                </button>
                {userDropdownOpen && (
                  <div style={{
                    display: 'block',
                    position: 'absolute',
                    right: 0,
                    backgroundColor: 'white',
                    minWidth: '120px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                    borderRadius: '5px',
                    overflow: 'hidden'
                  }}>
                    <a 
                      href="#" 
                      onClick={toggleFullscreen}
                      style={{
                        display: 'block',
                        padding: '10px 16px',
                        color: '#333',
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      Profile
                    </a>
                    <a 
                      href="#" 
                      onClick={handleLogout}
                      style={{
                        display: 'block',
                        padding: '10px 16px',
                        color: '#333',
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* POS Section */}
          <section style={{
            padding: '20px 30px',
            display: 'flex',
            gap: '20px',
            height: 'calc(100vh - 80px)'
          }}>
            {/* Left Panel */}
            <div style={{
              flex: 1,
              background: 'white',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              {/* Customer Section */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px'
              }}>
                <input
                  type="text"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  placeholder="Walking Customer"
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
                <button 
                  onClick={deleteCustomer}
                  style={{
                    background: '#8b7cf6',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  ❌
                </button>
              </div>

              {/* Search Section */}
              <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '20px'
              }}>
                <button 
                  onClick={searchByBarcode}
                  style={{
                    background: '#8b7cf6',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  📱
                </button>
                <input
                  type="text"
                  placeholder="Enter Product Barcode"
                  value={barcodeInput}
                  onChange={(e) => setBarcodeInput(e.target.value)}
                  onKeyPress={handleBarcodeKeyPress}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  value={productNameInput}
                  onChange={(e) => setProductNameInput(e.target.value)}
                  onKeyPress={handleNameKeyPress}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>

              {/* Products Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                gap: '15px',
                maxHeight: '500px',
                overflowY: 'auto'
              }}>
                {products.map(product => (
                  <div
                    key={product.id}
                    onClick={() => addToCart(product.id)}
                    style={{
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '15px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      background: 'white'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      width: '100%',
                      height: '80px',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '10px',
                      fontSize: '24px'
                    }}>
                      {product.image}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '500',
                      marginBottom: '5px',
                      color: '#1f2937'
                    }}>
                      {product.name} ({product.code})
                    </div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#059669'
                    }}>
                      Price: {product.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Cart */}
            <div style={{
              width: '400px',
              background: 'white',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '15px'
              }}>
                Cart Items
              </div>

              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginBottom: '20px'
              }}>
                <thead>
                  <tr style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
                    <th style={{
                      background: '#f9fafb',
                      padding: '10px 8px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      borderBottom: '1px solid #e5e7eb',
                      width: '28%'
                    }}>Name</th>
                    <th style={{
                      background: '#f9fafb',
                      padding: '10px 8px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      borderBottom: '1px solid #e5e7eb',
                      width: '30%'
                    }}>Quantity</th>
                    <th style={{
                      background: '#f9fafb',
                      padding: '10px 8px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      borderBottom: '1px solid #e5e7eb',
                      width: '14%'
                    }}>Price</th>
                    <th style={{
                      background: '#f9fafb',
                      padding: '10px 8px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      borderBottom: '1px solid #e5e7eb',
                      width: '18%'
                    }}>Total</th>
                    <th style={{
                      background: '#f9fafb',
                      padding: '10px 8px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      borderBottom: '1px solid #e5e7eb',
                      width: '10%'
                    }}></th>
                  </tr>
                </thead>
                <tbody style={{
                  display: 'block',
                  maxHeight: '250px',
                  overflowY: 'auto'
                }}>
                  {cart.map(item => (
                    <tr key={item.id} style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
                      <td style={{
                        padding: '10px 8px',
                        borderBottom: '1px solid #f3f4f6',
                        fontSize: '12px',
                        width: '28%'
                      }}>
                        {item.name}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderBottom: '1px solid #f3f4f6',
                        fontSize: '12px',
                        width: '30%'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            style={{
                              backgroundColor: '#4CAF50',
                              border: 'none',
                              padding: '4px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              height: '28px',
                              width: '28px',
                              color: 'white'
                            }}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            style={{
                              width: '40px',
                              textAlign: 'center',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              padding: '2px 4px',
                              fontSize: '12px',
                              height: '28px'
                            }}
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{
                              backgroundColor: '#4CAF50',
                              border: 'none',
                              padding: '4px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              height: '28px',
                              width: '28px',
                              color: 'white'
                            }}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderBottom: '1px solid #f3f4f6',
                        fontSize: '12px',
                        width: '14%'
                      }}>
                        RS {item.price}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderBottom: '1px solid #f3f4f6',
                        fontSize: '12px',
                        width: '18%'
                      }}>
                        RS {(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderBottom: '1px solid #f3f4f6',
                        fontSize: '12px',
                        width: '10%'
                      }}>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: '#ef4444',
                            color: 'white',
                            border: 'none',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '10px'
                          }}
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* Action buttons row */}
                  <tr style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
                    <td colSpan="5" style={{ textAlign: 'right', paddingTop: '15px' }}>
                      <button 
                        onClick={clearCart}
                        style={{
                          backgroundColor: '#dc3545',
                          color: 'white',
                          marginRight: '10px',
                          padding: '8px 16px',
                          borderRadius: '5px',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        🗑️ Clear Cart
                      </button>
                      <button 
                        onClick={checkoutCart}
                        style={{
                          backgroundColor: '#28a745',
                          color: 'white',
                          padding: '8px 16px',
                          borderRadius: '5px',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        ✅ Checkout
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Cart Totals */}
              <div style={{
                borderTop: '2px solid #e5e7eb',
                paddingTop: '15px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                  fontSize: '14px'
                }}>
                  <span>Sub Total:</span>
                  <span>RS {subTotal.toFixed(2)}</span>
                </div>

                <div style={{ margin: '15px 0' }}>
                  <input
                    type="number"
                    placeholder="Discount"
                    value={discount}
                    onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                    style={{
                      width: '100%',
                      padding: '8px',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      fontSize: '14px',
                      marginBottom: '10px'
                    }}
                  />
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px'
                  }}>
                    <input
                      type="checkbox"
                      id="fractionalDiscount"
                      checked={fractionalDiscount}
                      onChange={(e) => setFractionalDiscount(e.target.checked)}
                    />
                    <label htmlFor="fractionalDiscount">Apply Fractional Discount</label>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1f2937'
                }}>
                  <span>Total:</span>
                  <span>RS {finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: '#fff',
            padding: '20px 30px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)'
          }}>
            <p style={{ marginBottom: '20px', fontSize: '16px' }}>{confirmMessage}</p>
            <div>
              <button
                onClick={() => setShowConfirmDialog(false)}
                style={{
                  margin: '10px',
                  padding: '8px 16px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f8f9fa'
                }}
              >
                No
              </button>
              <button
                onClick={confirmAction}
                style={{
                  margin: '10px',
                  padding: '8px 16px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  borderRadius: '5px',
                  border: 'none',
                  backgroundColor: '#dc3545',
                  color: 'white'
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default POSSystem;