import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const registrationId = location.state?.registrationId;

  // Premium Dark Theme Styles (matching register page)
  const styles = {
    container: {
      minHeight: "100vh",
      background: "radial-gradient(circle at 10% 20%, rgba(0, 0, 0, 0.95) 0%, rgb(4, 4, 26) 90%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
      position: "relative",
      overflow: "hidden"
    },
    // Animated background elements
    backgroundOrb: {
      position: "fixed",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #ff3366, #6b3bff)",
      filter: "blur(120px)",
      opacity: "0.15",
      top: "-10%",
      right: "-5%",
      zIndex: "0",
      animation: "float 20s infinite alternate"
    },
    backgroundOrb2: {
      position: "fixed",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #3b7bff, #33ffcc)",
      filter: "blur(150px)",
      opacity: "0.1",
      bottom: "-10%",
      left: "-5%",
      zIndex: "0",
      animation: "float 25s infinite alternate-reverse"
    },
    successCard: {
      maxWidth: "600px",
      width: "100%",
      background: "rgba(17, 25, 40, 0.75)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderRadius: "32px",
      border: "1px solid rgba(255, 255, 255, 0.125)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      position: "relative",
      zIndex: "1",
      overflow: "hidden",
      padding: "50px 40px",
      textAlign: "center"
    },
    headerGlow: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "2px",
      background: "linear-gradient(90deg, transparent, #ff3366, #6b3bff, #33ffcc, transparent)",
      animation: "slide 3s linear infinite"
    },
    successIcon: {
      width: "100px",
      height: "100px",
      margin: "0 auto 30px",
      background: "linear-gradient(135deg, rgba(51, 255, 102, 0.2), rgba(51, 204, 255, 0.2))",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "3.5rem",
      border: "2px solid rgba(51, 255, 102, 0.3)",
      boxShadow: "0 0 30px rgba(51, 255, 102, 0.3)",
      animation: "pulse 2s infinite"
    },
    successTitle: {
      fontSize: "2.8rem",
      fontWeight: "700",
      margin: "0 0 15px 0",
      background: "linear-gradient(135deg, #33ff66, #33ccff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "-0.5px",
      textShadow: "0 0 30px rgba(51, 255, 102, 0.2)"
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "rgba(255, 255, 255, 0.6)",
      marginBottom: "40px",
      fontWeight: "300"
    },
    idLabel: {
      fontSize: "1rem",
      color: "rgba(255, 255, 255, 0.5)",
      marginBottom: "10px",
      textTransform: "uppercase",
      letterSpacing: "2px"
    },
    idCard: {
      background: "linear-gradient(135deg, rgba(255, 51, 102, 0.1), rgba(107, 59, 255, 0.1))",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "20px",
      padding: "30px",
      margin: "30px 0",
      position: "relative",
      overflow: "hidden"
    },
    idGlow: {
      position: "absolute",
      top: "-50%",
      left: "-50%",
      right: "-50%",
      bottom: "-50%",
      background: "linear-gradient(45deg, transparent, rgba(255, 51, 102, 0.2), transparent)",
      animation: "rotate 8s linear infinite"
    },
    registrationId: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "white",
      margin: "0",
      position: "relative",
      zIndex: "1",
      fontFamily: "'Courier New', monospace",
      letterSpacing: "4px",
      textShadow: "0 0 20px rgba(255, 51, 102, 0.5)"
    },
    message: {
      fontSize: "1rem",
      color: "rgba(255, 255, 255, 0.7)",
      marginBottom: "40px",
      lineHeight: "1.8"
    },
    highlight: {
      color: "#33ff66",
      fontWeight: "600"
    },
    button: {
      background: "linear-gradient(135deg, #ff3366, #6b3bff)",
      color: "white",
      border: "none",
      padding: "16px 40px",
      fontSize: "1.1rem",
      fontWeight: "600",
      borderRadius: "16px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "20px",
      boxShadow: "0 10px 20px -5px rgba(255, 51, 102, 0.3)",
      textTransform: "uppercase",
      letterSpacing: "1px"
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 20px 30px -5px rgba(255, 51, 102, 0.5)"
    },
    infoBox: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      marginTop: "40px",
      flexWrap: "wrap"
    },
    infoItem: {
      textAlign: "center",
      padding: "15px 25px",
      background: "rgba(255, 255, 255, 0.03)",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      minWidth: "140px"
    },
    infoLabel: {
      fontSize: "0.8rem",
      color: "rgba(255, 255, 255, 0.4)",
      marginBottom: "5px",
      textTransform: "uppercase",
      letterSpacing: "1px"
    },
    infoValue: {
      fontSize: "1.1rem",
      color: "white",
      fontWeight: "500"
    },
    divider: {
      height: "1px",
      background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
      margin: "30px 0"
    }
  };

  // Animation keyframes
  const keyframes = `
    @keyframes float {
      0% { transform: translate(0, 0) rotate(0deg); }
      100% { transform: translate(30px, 30px) rotate(10deg); }
    }
    
    @keyframes slide {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.1); opacity: 0.8; }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  // Current date and time for display
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const currentTime = new Date().toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        {/* Animated background elements */}
        <div style={styles.backgroundOrb}></div>
        <div style={styles.backgroundOrb2}></div>

        {/* Success Card */}
        <div style={styles.successCard}>
          <div style={styles.headerGlow}></div>

          {/* Success Icon with animation */}
          <div style={styles.successIcon}>
            ✓
          </div>

          {/* Success Title */}
          <h1 style={styles.successTitle}>
            Registration Successful!
          </h1>
          
          <p style={styles.subtitle}>
            Your registration has been confirmed
          </p>

          {/* Registration ID Card */}
          <div style={styles.idCard}>
            <div style={styles.idGlow}></div>
            <p style={styles.idLabel}>Registration ID</p>
            <h2 style={styles.registrationId}>
              {registrationId || "TV26-XXXXXXXXXX"}
            </h2>
          </div>

          {/* Important Message */}
          <p style={styles.message}>
            <span style={styles.highlight}>Please save this ID</span> for verification<br />
            at the event entrance and future correspondence.
          </p>

          {/* Additional Info */}
          <div style={styles.infoBox}>
            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Date</div>
              <div style={styles.infoValue}>{currentDate}</div>
            </div>
            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Time</div>
              <div style={styles.infoValue}>{currentTime}</div>
            </div>
            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Status</div>
              <div style={{...styles.infoValue, color: "#33ff66"}}>Confirmed</div>
            </div>
          </div>

          <div style={styles.divider}></div>

          {/* Next Steps */}
          <div style={{marginBottom: "30px"}}>
            <h3 style={{color: "white", marginBottom: "15px", fontSize: "1.2rem"}}>
              📋 Next Steps
            </h3>
            <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start", maxWidth: "300px", margin: "0 auto"}}>
              <div style={{display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.7)"}}>
                <span style={{color: "#33ff66"}}>1.</span> Save your Registration ID
              </div>
              <div style={{display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.7)"}}>
                <span style={{color: "#33ff66"}}>2.</span> Carry ID proof on event day
              </div>
              <div style={{display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.7)"}}>
                <span style={{color: "#33ff66"}}>3.</span> Reach venue 30 mins early
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap"}}>
            <button
              onClick={() => {
                // Download registration ID as image/text
                const element = document.createElement("a");
                const text = `TECHVISHWA 2K26 Registration\nRegistration ID: ${registrationId}\nDate: ${currentDate}\nStatus: Confirmed`;
                const file = new Blob([text], {type: 'text/plain'});
                element.href = URL.createObjectURL(file);
                element.download = `TV26-${registrationId}.txt`;
                document.body.appendChild(element);
                element.click();
              }}
              style={{
                ...styles.button,
                background: "linear-gradient(135deg, #33cc66, #33ff99)",
                padding: "12px 25px",
                fontSize: "0.9rem"
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
            >
              📥 Save ID
            </button>

            <button
              onClick={() => window.print()}
              style={{
                ...styles.button,
                background: "rgba(255,255,255,0.1)",
                padding: "12px 25px",
                fontSize: "0.9rem",
                boxShadow: "none"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.15)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.1)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              🖨️ Print
            </button>
          </div>

          {/* Back to Home Button */}
          <button
            onClick={() => navigate("/")}
            style={{
              ...styles.button,
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.1)",
              marginTop: "20px",
              padding: "12px 30px",
              fontSize: "0.9rem"
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#ff3366";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            ← Back to Home
          </button>

          {/* Footer Note */}
          <p style={{
            fontSize: "0.8rem",
            color: "rgba(255, 255, 255, 0.3)",
            marginTop: "30px"
          }}>
            This is a computer generated receipt. No signature required.
          </p>
        </div>
      </div>
    </>
  );
}

export default Success;