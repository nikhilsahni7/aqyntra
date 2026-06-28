"use client";

import { useState, useEffect } from "react";
import { 
  Building, Globe2, User, Mail, Tag, MessageSquare, 
  Calendar, Search, Filter, LogOut, Key, BarChart3, 
  TrendingUp, RefreshCw, X, ChevronRight, Download
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Inquiry {
  id: string;
  companyName: string;
  country: string;
  contactPerson: string;
  email: string;
  quantity: number;
  productType: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Login form state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  // Dashboard filter & view states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductFilter, setSelectedProductFilter] = useState("All");
  const [selectedCountryFilter, setSelectedCountryFilter] = useState("All");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  // Load inquiries / check auth on mount
  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const res = await fetch("/api/admin/inquiries");
      if (res.status === 401) {
        setIsAuthenticated(false);
      } else if (res.ok) {
        const result = await res.json();
        setInquiries(result.data || []);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error("Failed to load inquiries:", err);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoggingIn(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        fetchInquiries();
      } else {
        setLoginError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setLoginError("Failed to connect to the server. Please check your internet connection.");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      setIsAuthenticated(false);
      setInquiries([]);
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Metrics calculations
  const totalInquiries = inquiries.length;
  
  const averageQuantity = totalInquiries > 0 
    ? Math.round(inquiries.reduce((acc, curr) => acc + curr.quantity, 0) / totalInquiries) 
    : 0;

  const topProduct = (() => {
    if (totalInquiries === 0) return "N/A";
    const counts: Record<string, number> = {};
    inquiries.forEach((inq) => {
      counts[inq.productType] = (counts[inq.productType] || 0) + 1;
    });
    return Object.entries(counts).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  })();

  const topCountry = (() => {
    if (totalInquiries === 0) return "N/A";
    const counts: Record<string, number> = {};
    inquiries.forEach((inq) => {
      counts[inq.country] = (counts[inq.country] || 0) + 1;
    });
    return Object.entries(counts).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  })();

  // Filter products and countries for filter options
  const productOptions = ["All", ...Array.from(new Set(inquiries.map((inq) => inq.productType)))];
  const countryOptions = ["All", ...Array.from(new Set(inquiries.map((inq) => inq.country)))];

  // Filter inquiries based on filters & search
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch = 
      inq.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.country.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesProduct = selectedProductFilter === "All" || inq.productType === selectedProductFilter;
    const matchesCountry = selectedCountryFilter === "All" || inq.country === selectedCountryFilter;

    return matchesSearch && matchesProduct && matchesCountry;
  });

  const exportToCSV = () => {
    if (filteredInquiries.length === 0) return;
    
    const headers = ["ID", "Company Name", "Country", "Contact Person", "Email", "Product Type", "Quantity", "Message", "Created At"];
    const rows = filteredInquiries.map((inq) => [
      inq.id,
      `"${inq.companyName.replace(/"/g, '""')}"`,
      `"${inq.country.replace(/"/g, '""')}"`,
      `"${inq.contactPerson.replace(/"/g, '""')}"`,
      inq.email,
      `"${inq.productType.replace(/"/g, '""')}"`,
      inq.quantity,
      `"${inq.message.replace(/"/g, '""')}"`,
      new Date(inq.createdAt).toLocaleString(),
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `aqyntra_inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Loading Screen
  if (loading && inquiries.length === 0) {
    return (
      <div className="min-h-screen bg-mist flex flex-col items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-spring border-t-deep rounded-full mb-4"
        />
        <p className="text-deep font-display font-semibold tracking-wide text-sm">LOADING SECURE SESSION...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mist text-deep relative overflow-hidden font-sans">
      {/* Background ambient elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-spring/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-dew/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* 1. LOGIN SCREEN */}
      {isAuthenticated === false && (
        <div className="min-h-screen flex items-center justify-center px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md"
          >
            {/* Brand Logo Header */}
            <div className="text-center mb-8">
              <span className="text-[11px] font-semibold text-spring uppercase tracking-[0.2em]">ADMIN PORTAL</span>
              <h1 className="font-display font-extrabold text-3xl text-deep tracking-tight mt-1">AQYNTRA</h1>
              <p className="text-lichen text-xs mt-2">Sign in to manage global export inquiries</p>
            </div>

            {/* Login Card */}
            <div className="bg-petal/90 border border-deep/[0.04] rounded-2xl p-8 shadow-sm backdrop-blur-md">
              <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-lichen uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-spring" />
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter admin username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-cloud border border-deep/[0.06] rounded-xl text-deep text-sm focus:outline-none focus:ring-2 focus:ring-spring/20 focus:border-spring transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-lichen uppercase tracking-wider flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-spring" />
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Enter security password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-cloud border border-deep/[0.06] rounded-xl text-deep text-sm focus:outline-none focus:ring-2 focus:ring-spring/20 focus:border-spring transition-all"
                  />
                </div>

                {loginError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs font-semibold bg-red-50 border border-red-100 p-3 rounded-lg"
                  >
                    {loginError}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={loggingIn}
                  className="w-full py-3.5 bg-deep hover:bg-forest disabled:bg-deep/60 text-petal font-semibold rounded-xl text-sm transition-colors cursor-pointer shadow-md hover:shadow-lg mt-2 flex items-center justify-center gap-2"
                >
                  {loggingIn ? (
                    <>
                      Verifying...
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    "Authorize Access"
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* 2. AUTHENTICATED DASHBOARD */}
      {isAuthenticated === true && (
        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          {/* Dashboard Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-deep/[0.04] pb-6">
            <div>
              <span className="text-[10px] font-bold text-spring uppercase tracking-[0.2em] block mb-1">MANAGEMENT PANEL</span>
              <h1 className="font-display font-bold text-3xl text-deep tracking-tight">Inquiries Dashboard</h1>
              <p className="text-lichen text-sm mt-1">Monitor, search, and analyze global client requests in real-time.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => fetchInquiries(true)}
                disabled={refreshing}
                className="p-2.5 bg-petal hover:bg-cloud border border-deep/[0.06] rounded-xl text-lichen hover:text-deep transition-all cursor-pointer flex items-center justify-center disabled:opacity-50"
                title="Refresh inquiries"
              >
                <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
              </button>
              <button
                onClick={exportToCSV}
                disabled={filteredInquiries.length === 0}
                className="px-4 py-2.5 bg-petal hover:bg-cloud border border-deep/[0.06] rounded-xl text-lichen hover:text-deep transition-all cursor-pointer flex items-center gap-2 font-medium text-xs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 rounded-xl transition-all cursor-pointer flex items-center gap-2 font-medium text-xs"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </header>

          {/* Metric Overview Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                title: "Total Inquiries",
                value: totalInquiries,
                icon: BarChart3,
                color: "bg-deep/10 text-deep",
                description: "Global requests received",
              },
              {
                title: "Avg. Order Quantity",
                value: averageQuantity.toLocaleString() + " units",
                icon: TrendingUp,
                color: "bg-spring/10 text-spring",
                description: "Minimum threshold 1,000",
              },
              {
                title: "Top Product Demand",
                value: topProduct,
                icon: Tag,
                color: "bg-dew/20 text-forest",
                description: "Highest inquiry count",
              },
              {
                title: "Top Target Market",
                value: topCountry,
                icon: Globe2,
                color: "bg-mist border border-deep/[0.04] text-lichen",
                description: "Highest geographic lead",
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-petal border border-deep/[0.04] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-lichen uppercase tracking-wider">{card.title}</span>
                    <div className={`w-8 h-8 rounded-lg ${card.color} flex items-center justify-center`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-deep tracking-tight mb-1">{card.value}</h3>
                  <span className="text-[11px] text-lichen/70">{card.description}</span>
                </motion.div>
              );
            })}
          </section>

          {/* Filtering and Table Area */}
          <section className="bg-petal border border-deep/[0.04] rounded-2xl p-6 shadow-sm">
            {/* Search & Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-lichen/50" />
                <input
                  type="text"
                  placeholder="Search by company, person, email or message..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-cloud border border-deep/[0.06] rounded-xl text-deep text-sm focus:outline-none focus:ring-2 focus:ring-spring/20 focus:border-spring transition-all placeholder:text-lichen/40"
                />
              </div>

              {/* Filters dropdowns */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-lichen" />
                  <span className="text-xs font-semibold text-lichen uppercase">Filters:</span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Product Type Filter */}
                  <select
                    value={selectedProductFilter}
                    onChange={(e) => setSelectedProductFilter(e.target.value)}
                    className="px-3.5 py-2.5 bg-cloud border border-deep/[0.06] rounded-xl text-deep text-xs font-medium focus:outline-none focus:ring-2 focus:ring-spring/20 appearance-none cursor-pointer pr-8 relative"
                  >
                    <option value="All">All Products</option>
                    {productOptions.filter(o => o !== "All").map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>

                  {/* Country Filter */}
                  <select
                    value={selectedCountryFilter}
                    onChange={(e) => setSelectedCountryFilter(e.target.value)}
                    className="px-3.5 py-2.5 bg-cloud border border-deep/[0.06] rounded-xl text-deep text-xs font-medium focus:outline-none focus:ring-2 focus:ring-spring/20 appearance-none cursor-pointer pr-8"
                  >
                    <option value="All">All Countries</option>
                    {countryOptions.filter(o => o !== "All").map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Inquiries Table */}
            <div className="overflow-x-auto rounded-xl border border-deep/[0.04]">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-cloud text-lichen font-semibold border-b border-deep/[0.04]">
                    <th className="py-4 px-5 text-[11px] uppercase tracking-wider">Company</th>
                    <th className="py-4 px-5 text-[11px] uppercase tracking-wider">Contact Person</th>
                    <th className="py-4 px-5 text-[11px] uppercase tracking-wider">Country</th>
                    <th className="py-4 px-5 text-[11px] uppercase tracking-wider">Product Type</th>
                    <th className="py-4 px-5 text-[11px] uppercase tracking-wider text-right">Quantity</th>
                    <th className="py-4 px-5 text-[11px] uppercase tracking-wider">Submitted</th>
                    <th className="py-4 px-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-deep/[0.03]">
                  {filteredInquiries.length > 0 ? (
                    filteredInquiries.map((inq) => (
                      <tr 
                        key={inq.id}
                        onClick={() => setSelectedInquiry(inq)}
                        className="hover:bg-mist/30 transition-colors duration-150 cursor-pointer group"
                      >
                        <td className="py-4.5 px-5">
                          <div className="font-semibold text-deep group-hover:text-forest transition-colors flex items-center gap-2">
                            <Building className="w-4 h-4 text-lichen/40 group-hover:text-spring transition-colors" />
                            {inq.companyName}
                          </div>
                        </td>
                        <td className="py-4.5 px-5 text-lichen font-medium">{inq.contactPerson}</td>
                        <td className="py-4.5 px-5">
                          <div className="flex items-center gap-1.5">
                            <Globe2 className="w-3.5 h-3.5 text-lichen/30" />
                            <span className="font-medium text-lichen">{inq.country}</span>
                          </div>
                        </td>
                        <td className="py-4.5 px-5">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-mist text-forest border border-deep/[0.04]">
                            {inq.productType}
                          </span>
                        </td>
                        <td className="py-4.5 px-5 text-right font-display font-semibold text-deep">{inq.quantity.toLocaleString()}</td>
                        <td className="py-4.5 px-5 text-lichen/70 text-xs">
                          {new Date(inq.createdAt).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </td>
                        <td className="py-4.5 px-5 text-right">
                          <ChevronRight className="w-4 h-4 text-lichen/30 group-hover:text-deep group-hover:translate-x-0.5 transition-all" />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-lichen/50 text-sm">
                        No inquiries matched your criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}

      {/* 3. DETAILS DRAWER / MODAL */}
      <AnimatePresence>
        {selectedInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInquiry(null)}
              className="absolute inset-0 bg-deep/40 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-lg h-screen bg-petal shadow-2xl border-l border-deep/[0.04] p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-deep/[0.04] pb-5 mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-spring uppercase tracking-wider block mb-1">INQUIRY DETAIL</span>
                    <h2 className="font-display font-bold text-2xl text-deep tracking-tight">{selectedInquiry.companyName}</h2>
                    <span className="text-xs text-lichen flex items-center gap-1.5 mt-1">
                      <Globe2 className="w-3.5 h-3.5 text-spring" />
                      {selectedInquiry.country}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedInquiry(null)}
                    className="w-9 h-9 bg-mist hover:bg-cloud text-lichen hover:text-deep flex items-center justify-center rounded-xl cursor-pointer transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Details list */}
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-lichen uppercase tracking-wider">Contact Person</span>
                      <div className="flex items-center gap-2 text-sm font-semibold text-deep mt-1">
                        <User className="w-4 h-4 text-spring" />
                        {selectedInquiry.contactPerson}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-lichen uppercase tracking-wider">Email Address</span>
                      <a 
                        href={`mailto:${selectedInquiry.email}`}
                        className="flex items-center gap-2 text-sm font-semibold text-spring hover:underline mt-1"
                      >
                        <Mail className="w-4 h-4" />
                        {selectedInquiry.email}
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5 border-t border-deep/[0.03] pt-5">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-lichen uppercase tracking-wider">Product Type</span>
                      <div className="flex items-center gap-2 text-sm font-semibold text-deep mt-1">
                        <Tag className="w-4 h-4 text-spring" />
                        {selectedInquiry.productType}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-lichen uppercase tracking-wider">Order Quantity</span>
                      <div className="text-sm font-display font-bold text-deep mt-1">
                        {selectedInquiry.quantity.toLocaleString()} units
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-deep/[0.03] pt-5">
                    <span className="text-[10px] font-bold text-lichen uppercase tracking-wider flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-spring" />
                      Message Details
                    </span>
                    {selectedInquiry.message ? (
                      <p className="text-[13px] text-lichen leading-relaxed bg-mist/40 p-4 border border-deep/[0.03] rounded-xl italic font-medium whitespace-pre-line max-h-[180px] overflow-y-auto">
                        "{selectedInquiry.message}"
                      </p>
                    ) : (
                      <p className="text-[13px] text-lichen/50 leading-relaxed italic bg-mist/20 p-4 border border-deep/[0.03] rounded-xl">
                        No additional message provided.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Timestamp Footer */}
              <div className="border-t border-deep/[0.04] pt-5 mt-6 flex items-center justify-between text-lichen/60 text-xs">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Received {new Date(selectedInquiry.createdAt).toLocaleString()}
                </span>
                <span className="text-[10px] font-semibold tracking-wider font-mono text-lichen/30">ID: {selectedInquiry.id.substring(0, 8)}...</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
