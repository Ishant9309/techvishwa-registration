import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (error) {
      alert("Invalid Login Credentials");
      setLoading(false);
    }
  };

  // Premium Dark Theme Styles (matching register and success pages)
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
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #ff3366, #6b3bff)",
      filter: "blur(150px)",
      opacity: "0.12",
      top: "-20%",
      right: "-10%",
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
      bottom: "-20%",
      left: "-10%",
      zIndex: "0",
      animation: "float 25s infinite alternate-reverse"
    },
    loginCard: {
      maxWidth: "450px",
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
      padding: "50px 40px"
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
    lockIcon: {
      width: "80px",
      height: "80px",
      margin: "0 auto 25px",
      background: "linear-gradient(135deg, rgba(255, 51, 102, 0.15), rgba(107, 59, 255, 0.15))",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2.5rem",
      border: "2px solid rgba(255, 51, 102, 0.3)",
      boxShadow: "0 0 30px rgba(255, 51, 102, 0.2)",
      animation: "pulse 2s infinite"
    },
    title: {
      fontSize: "2.2rem",
      fontWeight: "700",
      margin: "0 0 10px 0",
      background: "linear-gradient(135deg, #fff, #a5b4fc)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "-0.5px",
      textAlign: "center"
    },
    subtitle: {
      fontSize: "0.95rem",
      color: "rgba(255, 255, 255, 0.5)",
      marginBottom: "35px",
      textAlign: "center",
      letterSpacing: "1px",
      textTransform: "uppercase"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    },
    inputGroup: {
      position: "relative"
    },
    inputIcon: {
      position: "absolute",
      left: "16px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "rgba(255, 255, 255, 0.4)",
      fontSize: "1.2rem",
      zIndex: "1"
    },
    input: {
      width: "100%",
      padding: "16px 16px 16px 50px",
      fontSize: "1rem",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1.5px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "16px",
      transition: "all 0.3s ease",
      outline: "none",
      boxSizing: "border-box",
      color: "white",
      fontFamily: "'Poppins', sans-serif"
    },
    inputFocus: {
      borderColor: "#ff3366",
      background: "rgba(255, 51, 102, 0.1)",
      boxShadow: "0 0 20px rgba(255, 51, 102, 0.2)"
    },
    passwordToggle: {
      position: "absolute",
      right: "16px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "rgba(255, 255, 255, 0.4)",
      cursor: "pointer",
      fontSize: "1.2rem",
      transition: "color 0.3s ease",
      background: "none",
      border: "none",
      padding: "5px"
    },
    forgotPassword: {
      textAlign: "right",
      marginTop: "5px"
    },
    forgotLink: {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: "0.85rem",
      textDecoration: "none",
      transition: "color 0.3s ease",
      cursor: "pointer"
    },
    button: {
      width: "100%",
      padding: "16px",
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "white",
      background: "linear-gradient(135deg, #ff3366, #6b3bff)",
      border: "none",
      borderRadius: "16px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginTop: "20px",
      boxShadow: "0 10px 20px -5px rgba(255, 51, 102, 0.3)"
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 20px 30px -5px rgba(255, 51, 102, 0.5)"
    },
    buttonDisabled: {
      opacity: 0.6,
      cursor: "not-allowed"
    },
    footer: {
      marginTop: "30px",
      textAlign: "center",
      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      paddingTop: "20px"
    },
    footerText: {
      color: "rgba(255, 255, 255, 0.3)",
      fontSize: "0.8rem"
    },
    adminBadge: {
      display: "inline-block",
      padding: "6px 15px",
      background: "rgba(255, 51, 102, 0.1)",
      border: "1px solid rgba(255, 51, 102, 0.3)",
      borderRadius: "30px",
      color: "#ff3366",
      fontSize: "0.8rem",
      marginBottom: "20px"
    },
    errorMessage: {
      color: "#ff3366",
      fontSize: "0.85rem",
      marginTop: "5px",
      textAlign: "left"
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
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.8; }
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        {/* Animated background elements */}
        <div style={styles.backgroundOrb}></div>
        <div style={styles.backgroundOrb2}></div>

        {/* Login Card */}
        <div style={styles.loginCard}>
          <div style={styles.headerGlow}></div>

          {/* Lock Icon with animation */}
          <div style={styles.lockIcon}>
            🔒
          </div>

          {/* Admin Badge */}
          <div style={{textAlign: "center"}}>
            <span style={styles.adminBadge}>Administrator Access</span>
          </div>

          {/* Title */}
          <h1 style={styles.title}>Admin Login</h1>
          <p style={styles.subtitle}>Secure Dashboard Access</p>

          {/* Login Form */}
          <form onSubmit={handleLogin} style={styles.form}>
            {/* Email Input */}
            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>📧</span>
              <input
                type="email"
                placeholder="Admin Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              />
            </div>

            {/* Password Input */}
            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>🔑</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              />
              <button
                type="button"
                style={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
                onMouseEnter={(e) => e.target.style.color = "#ff3366"}
                onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.4)"}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>

            {/* Forgot Password Link */}
            <div style={styles.forgotPassword}>
              <a 
                <a href="/admin-login">Back</a> 
                style={styles.forgotLink}
                onMouseEnter={(e) => e.target.style.color = "#ff3366"}
                onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.5)"}
                onClick={(e) => {
                  e.preventDefault();
                  alert("Please contact super admin for password reset");
                }}
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                ...styles.button,
                ...(loading ? styles.buttonDisabled : {}),
                ...(loading ? {} : {})
              }}
              onMouseEnter={(e) => !loading && Object.assign(e.target.style, styles.buttonHover)}
              onMouseLeave={(e) => !loading && Object.assign(e.target.style, styles.button)}
            >
              {loading ? (
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"}}>
                  <span style={{
                    width: "20px",
                    height: "20px",
                    border: "3px solid rgba(255,255,255,0.3)",
                    borderTopColor: "white",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite"
                  }}></span>
                  Authenticating...
                </span>
              ) : "Login to Dashboard"}
            </button>
          </form>

          {/* Footer */}
          <div style={styles.footer}>
            <p style={styles.footerText}>
              ⚡ Secure Admin Access Only ⚡
            </p>
            <p style={{...styles.footerText, fontSize: "0.7rem", marginTop: "5px"}}>
              Unauthorized access is prohibited
            </p>
          </div>
        </div>
      </div>

      {/* Add spin animation for loading */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}

export default AdminLogin;
