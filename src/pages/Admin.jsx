import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [registrations, setRegistrations] = useState([]);
  const [eventCounts, setEventCounts] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "registrations"));

      const list = [];
      const counts = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        list.push({ id: doc.id, ...data });

        if (counts[data.event]) {
          counts[data.event] += 1;
        } else {
          counts[data.event] = 1;
        }
      });

      setRegistrations(list);
      setEventCounts(counts);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin-login");
    } catch (error) {
      alert("Logout failed");
    }
  };

  const filtered = registrations.filter((item) => {
    return (
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.phone?.includes(search) ||
      item.registrationId?.toLowerCase().includes(search.toLowerCase())
    );
  });

  const downloadCSV = () => {
    let csv = "RegistrationID,Name,Phone,Event,Transaction\n";

    registrations.forEach((item) => {
      csv += `${item.registrationId},${item.name},${item.phone},${item.event},${item.transactionId}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "registrations.csv";
    a.click();
  };

  // Premium Dark Theme Styles
  const styles = {
    container: {
      minHeight: "100vh",
      background: "radial-gradient(circle at 10% 20%, rgba(0, 0, 0, 0.95) 0%, rgb(4, 4, 26) 90%)",
      padding: "30px",
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
      position: "relative",
      color: "white"
    },
    backgroundOrb: {
      position: "fixed",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #ff3366, #6b3bff)",
      filter: "blur(150px)",
      opacity: "0.1",
      top: "-10%",
      right: "-5%",
      zIndex: "0",
      animation: "float 20s infinite alternate"
    },
    backgroundOrb2: {
      position: "fixed",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #3b7bff, #33ffcc)",
      filter: "blur(180px)",
      opacity: "0.08",
      bottom: "-10%",
      left: "-5%",
      zIndex: "0",
      animation: "float 25s infinite alternate-reverse"
    },
    content: {
      position: "relative",
      zIndex: "1"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      flexWrap: "wrap",
      gap: "20px"
    },
    titleSection: {
      flex: "1"
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      margin: "0 0 10px 0",
      background: "linear-gradient(135deg, #fff, #a5b4fc)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "-0.5px"
    },
    statsCard: {
      background: "rgba(17, 25, 40, 0.75)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.125)",
      borderRadius: "20px",
      padding: "20px 30px",
      display: "inline-block"
    },
    statsNumber: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#ff3366",
      marginRight: "10px"
    },
    logoutButton: {
      background: "rgba(255, 255, 255, 0.05)",
      border: "1.5px solid rgba(255, 51, 102, 0.3)",
      color: "#ff3366",
      padding: "12px 30px",
      borderRadius: "16px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },
    eventGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
      margin: "30px 0"
    },
    eventCard: {
      background: "rgba(17, 25, 40, 0.75)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.125)",
      borderRadius: "20px",
      padding: "20px",
      transition: "transform 0.3s ease"
    },
    eventName: {
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "white",
      marginBottom: "10px"
    },
    eventCount: {
      fontSize: "2rem",
      fontWeight: "700",
      background: "linear-gradient(135deg, #ff3366, #6b3bff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "5px"
    },
    eventLabel: {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: "0.85rem"
    },
    searchSection: {
      display: "flex",
      gap: "15px",
      marginBottom: "30px",
      flexWrap: "wrap"
    },
    searchInput: {
      flex: "1",
      minWidth: "300px",
      padding: "15px 20px",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1.5px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "16px",
      color: "white",
      fontSize: "1rem",
      outline: "none",
      transition: "all 0.3s ease"
    },
    downloadButton: {
      background: "linear-gradient(135deg, #33cc66, #33ff99)",
      border: "none",
      color: "white",
      padding: "15px 30px",
      borderRadius: "16px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },
    tableContainer: {
      overflowX: "auto",
      background: "rgba(17, 25, 40, 0.75)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.125)",
      borderRadius: "20px",
      padding: "20px"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      color: "white"
    },
    th: {
      textAlign: "left",
      padding: "15px",
      borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
      color: "rgba(255, 255, 255, 0.7)",
      fontWeight: "600",
      fontSize: "0.9rem",
      textTransform: "uppercase",
      letterSpacing: "1px"
    },
    td: {
      padding: "15px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      color: "rgba(255, 255, 255, 0.9)"
    },
    screenshotLink: {
      display: "inline-block",
      cursor: "pointer"
    },
    screenshotImg: {
      width: "50px",
      height: "50px",
      borderRadius: "10px",
      objectFit: "cover",
      border: "2px solid rgba(255, 255, 255, 0.1)",
      transition: "transform 0.3s ease"
    },
    loadingCard: {
      background: "rgba(17, 25, 40, 0.75)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.125)",
      borderRadius: "20px",
      padding: "50px",
      textAlign: "center"
    },
    noData: {
      textAlign: "center",
      padding: "50px",
      color: "rgba(255, 255, 255, 0.5)"
    }
  };

  const keyframes = `
    @keyframes float {
      0% { transform: translate(0, 0) rotate(0deg); }
      100% { transform: translate(30px, 30px) rotate(10deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        {/* Animated background elements */}
        <div style={styles.backgroundOrb}></div>
        <div style={styles.backgroundOrb2}></div>

        <div style={styles.content}>
          {/* Header with Logout Button */}
          <div style={styles.header}>
            <div style={styles.titleSection}>
              <h1 style={styles.title}>Admin Dashboard</h1>
              <div style={styles.statsCard}>
                <span style={styles.statsNumber}>{registrations.length}</span>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>Total Registrations</span>
              </div>
            </div>
            
            {/* Logout Button */}
            <button 
              onClick={handleLogout}
              style={styles.logoutButton}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 51, 102, 0.1)";
                e.target.style.borderColor = "#ff3366";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.05)";
                e.target.style.borderColor = "rgba(255, 51, 102, 0.3)";
              }}
            >
              <span>🚪</span>
              Logout
            </button>
          </div>

          {/* Event Wise Registrations */}
          <h3 style={{ color: "white", marginBottom: "20px" }}>📊 Event Wise Registrations</h3>
          
          <div style={styles.eventGrid}>
            {Object.keys(eventCounts).map((event, index) => (
              <div 
                key={index} 
                style={styles.eventCard}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={styles.eventName}>{event}</div>
                <div style={styles.eventCount}>{eventCounts[event]}</div>
                <div style={styles.eventLabel}>Registrations</div>
              </div>
            ))}
          </div>

          {/* Search and Download Section */}
          <div style={styles.searchSection}>
            <input
              placeholder="🔍 Search by name / phone / ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.searchInput}
              onFocus={(e) => {
                e.target.style.borderColor = "#ff3366";
                e.target.style.background = "rgba(255, 51, 102, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.background = "rgba(255, 255, 255, 0.05)";
              }}
            />

            <button 
              onClick={downloadCSV} 
              style={styles.downloadButton}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 20px 30px -5px rgba(51, 204, 102, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              <span>📥</span>
              Download Excel
            </button>
          </div>

          {/* Registrations Table */}
          <div style={styles.tableContainer}>
            {loading ? (
              <div style={styles.loadingCard}>
                <div style={{ fontSize: "2rem", marginBottom: "20px" }}>⏳</div>
                <div style={{ color: "rgba(255,255,255,0.7)" }}>Loading registrations...</div>
              </div>
            ) : filtered.length === 0 ? (
              <div style={styles.noData}>
                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📭</div>
                <div style={{ fontSize: "1.2rem", marginBottom: "10px" }}>No registrations found</div>
                <div style={{ color: "rgba(255,255,255,0.3)" }}>Try adjusting your search</div>
              </div>
            ) : (
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>ID</th>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Phone</th>
                    <th style={styles.th}>Event</th>
                    <th style={styles.th}>Transaction</th>
                    <th style={styles.th}>Screenshot</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item) => (
                    <tr key={item.id}>
                      <td style={styles.td}>
                        <span style={{ 
                          background: "rgba(255, 51, 102, 0.1)", 
                          padding: "4px 8px", 
                          borderRadius: "6px",
                          fontSize: "0.85rem",
                          fontFamily: "monospace"
                        }}>
                          {item.registrationId}
                        </span>
                      </td>
                      <td style={styles.td}>{item.name}</td>
                      <td style={styles.td}>{item.phone}</td>
                      <td style={styles.td}>
                        <span style={{ color: "#33ffcc" }}>{item.event}</span>
                      </td>
                      <td style={styles.td}>
                        <span style={{ 
                          background: "rgba(255, 255, 255, 0.05)", 
                          padding: "4px 8px", 
                          borderRadius: "6px",
                          fontSize: "0.85rem"
                        }}>
                          {item.transactionId}
                        </span>
                      </td>
                      <td style={styles.td}>
                        <a 
                          href={item.paymentScreenshot} 
                          target="_blank" 
                          rel="noreferrer"
                          style={styles.screenshotLink}
                        >
                          <img
                            src={item.paymentScreenshot}
                            alt="payment"
                            style={styles.screenshotImg}
                            onMouseEnter={(e) => e.target.style.transform = "scale(1.5)"}
                            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Footer Stats */}
          <div style={{ 
            marginTop: "20px", 
            textAlign: "right", 
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.85rem"
          }}>
            Showing {filtered.length} of {registrations.length} registrations
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;