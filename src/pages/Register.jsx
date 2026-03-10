import React, { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import qrImage from "../assets/WhatsApp Image 2026-03-10 at 9.09.06 PM.jpeg";

const events = {
  Civil: {
    title: "Civista 2K26",
    events: [
      "Poster Presentations",
      "Alternative Building Material",
      "Technical Rangoli"
    ],
    coordinator: "Ms. Tuppekar R.G - 8625820923",
    studentCoordinator: "Rudraj Kakde - 8975422141"
  },

  Computer: {
    title: "Coding Hackathon 2K26",
    events: [
      "Blind Coding",
      "LAN Quiz Competition"
    ],
    coordinator: "Miss Mankod P.S - 7208875760",
    studentCoordinator: "Masum Shaikh - 9834313374"
  },

  Electrical: {
    title: "Electrika 2K26",
    events: [
      "Technical Mini Project Exhibition",
      "Opposite Hand Mehndi Competition"
    ],
    coordinator: "Mr. Shingarpurtale B.G - 9011962541",
    studentCoordinator: "Kamble Pravin - 8459216890"
  },

  Mechanical: {
    title: "Mechano 2K26",
    events: [
      "Quiz Competition",
      "Paper Presentation"
    ],
    coordinator: "Mr. Rathak A.A - 8080662001",
    studentCoordinator: "Pandit Vedant - 9309754250"
  },

  Electronics: {
    title: "Electro Influez 2K26",
    events: [
      "Poster Presentation",
      "Microcontroller & Embedded System",
      "Internet Of Things",
      "Artificial Intelligence Quiz"
    ],
    coordinator: "Mrs. Dawkar C.K - 9960531196",
    studentCoordinator: "Shriyush Yekare - 8658333832"
  }
};

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    college: "",
    year: "",
    yourDepartment: "",
    customDepartment: "",
    eventDepartment: "",
    event: "",
    transactionId: ""
  });

  const [screenshot, setScreenshot] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", screenshot);
    data.append("upload_preset", "event_upload");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dj7zswsko/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();
    return file.secure_url;
  };

  const sendEmail = (registrationId) => {
    emailjs.send(
      "service_ozjaoab",
      "template_3gnoi1p",
      {
        name: form.name,
        email: form.email,
        registrationId: registrationId,
        event: form.event
      },
      "1MtWEIWGnMEN2F6B1"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!screenshot) {
      alert("Please upload payment screenshot");
      return;
    }

    setLoading(true);

    try {
      const registrationId = "TV26-" + Date.now();
      const imageUrl = await uploadImage();

      await addDoc(collection(db, "registrations"), {
        ...form,
        registrationId,
        paymentScreenshot: imageUrl,
        createdAt: new Date()
      });

      sendEmail(registrationId);
      navigate("/success", { state: { registrationId } });
    } catch (error) {
      alert("Registration failed. Please try again.");
      setLoading(false);
    }
  };

  // Premium Dark Theme Styles
  const styles = {
    container: {
      minHeight: "100vh",
      background: "radial-gradient(circle at 10% 20%, rgba(0, 0, 0, 0.95) 0%, rgb(4, 4, 26) 90%)",
      padding: "40px 20px",
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
      position: "relative",
      overflow: "hidden"
    },
    // Animated background elements
    backgroundOrb: {
      position: "fixed",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #ff3366, #6b3bff)",
      filter: "blur(100px)",
      opacity: "0.15",
      top: "10%",
      right: "5%",
      zIndex: "0",
      animation: "float 20s infinite alternate"
    },
    backgroundOrb2: {
      position: "fixed",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #3b7bff, #33ffcc)",
      filter: "blur(120px)",
      opacity: "0.1",
      bottom: "5%",
      left: "5%",
      zIndex: "0",
      animation: "float 25s infinite alternate-reverse"
    },
    formCard: {
      maxWidth: "900px",
      margin: "0 auto",
      background: "rgba(17, 25, 40, 0.75)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderRadius: "32px",
      border: "1px solid rgba(255, 255, 255, 0.125)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      position: "relative",
      zIndex: "1",
      overflow: "hidden"
    },
    header: {
      background: "linear-gradient(135deg, rgba(255, 51, 102, 0.1) 0%, rgba(107, 59, 255, 0.1) 100%)",
      padding: "50px 40px",
      textAlign: "center",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      position: "relative"
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
    headerTitle: {
      fontSize: "3.5rem",
      fontWeight: "700",
      margin: "0 0 8px 0",
      background: "linear-gradient(135deg, #fff 0%, #a5b4fc 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "-1px",
      textShadow: "0 0 30px rgba(255,255,255,0.15)"
    },
    headerSubtitle: {
      fontSize: "1rem",
      color: "rgba(255, 255, 255, 0.6)",
      margin: "0",
      fontWeight: "300",
      letterSpacing: "2px",
      textTransform: "uppercase"
    },
    formContent: {
      padding: "40px"
    },
    section: {
      marginBottom: "40px",
      position: "relative"
    },
    sectionTitle: {
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "rgba(255, 255, 255, 0.9)",
      marginBottom: "24px",
      paddingBottom: "12px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },
    sectionIcon: {
      fontSize: "1.3rem",
      background: "linear-gradient(135deg, #ff3366, #6b3bff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    grid2: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px"
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px"
    },
    inputGroup: {
      marginBottom: "20px"
    },
    label: {
      display: "block",
      fontSize: "0.85rem",
      fontWeight: "500",
      color: "rgba(255, 255, 255, 0.7)",
      marginBottom: "8px",
      letterSpacing: "0.5px",
      textTransform: "uppercase"
    },
    input: {
      width: "100%",
      padding: "14px 18px",
      fontSize: "0.95rem",
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
    select: {
      width: "100%",
      padding: "14px 18px",
      fontSize: "0.95rem",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1.5px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "16px",
      color: "white",
      cursor: "pointer",
      outline: "none",
      transition: "all 0.3s ease",
      fontFamily: "'Poppins', sans-serif"
    },
    coordinatorCard: {
      background: "rgba(255, 255, 255, 0.03)",
      borderRadius: "24px",
      padding: "24px",
      marginTop: "20px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(10px)"
    },
    coordinatorItem: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "12px 0",
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
    },
    coordinatorIcon: {
      width: "45px",
      height: "45px",
      background: "linear-gradient(135deg, rgba(255, 51, 102, 0.2), rgba(107, 59, 255, 0.2))",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.3rem",
      border: "1px solid rgba(255, 255, 255, 0.1)"
    },
    coordinatorText: {
      margin: "0",
      fontSize: "0.95rem",
      color: "rgba(255, 255, 255, 0.8)",
      lineHeight: "1.6"
    },
    coordinatorHighlight: {
      color: "#ff3366",
      fontWeight: "600"
    },
    paymentSection: {
      background: "linear-gradient(135deg, rgba(255, 51, 102, 0.1) 0%, rgba(107, 59, 255, 0.1) 100%)",
      borderRadius: "24px",
      padding: "30px",
      marginBottom: "30px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)"
    },
    paymentHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "30px",
      flexWrap: "wrap",
      gap: "15px"
    },
    feeBadge: {
      background: "linear-gradient(135deg, #ff3366, #6b3bff)",
      color: "white",
      padding: "10px 25px",
      borderRadius: "30px",
      fontWeight: "600",
      fontSize: "1.2rem",
      boxShadow: "0 10px 20px -5px rgba(255, 51, 102, 0.3)"
    },
    qrContainer: {
      display: "flex",
      justifyContent: "center",
      margin: "30px 0",
      position: "relative"
    },
    qrWrapper: {
      padding: "15px",
      background: "rgba(255, 255, 255, 0.95)",
      borderRadius: "20px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      position: "relative",
      overflow: "hidden"
    },
    qrGlow: {
      position: "absolute",
      top: "-50%",
      left: "-50%",
      right: "-50%",
      bottom: "-50%",
      background: "linear-gradient(45deg, transparent, rgba(255, 51, 102, 0.3), transparent)",
      animation: "rotate 8s linear infinite"
    },
    qrImage: {
      width: "300px",
      height: "400px",
      borderRadius: "12px",
      position: "relative",
      zIndex: "1"
    },
    fileInput: {
      width: "100%",
      padding: "14px",
      background: "rgba(255, 255, 255, 0.05)",
      border: "2px dashed rgba(255, 255, 255, 0.2)",
      borderRadius: "16px",
      color: "rgba(255, 255, 255, 0.7)",
      cursor: "pointer",
      transition: "all 0.3s ease"
    },
    button: {
      width: "100%",
      padding: "18px",
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
      boxShadow: "0 10px 20px -5px rgba(255, 51, 102, 0.3)"
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 20px 30px -5px rgba(255, 51, 102, 0.5)"
    },
    buttonDisabled: {
      opacity: 0.5,
      cursor: "not-allowed"
    },
    progressBar: {
      height: "4px",
      background: "linear-gradient(90deg, #ff3366, #6b3bff, #33ffcc)",
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      zIndex: "1000",
      animation: "progress 2s ease-in-out infinite"
    },
    helperText: {
      fontSize: "0.8rem",
      color: "rgba(255, 255, 255, 0.4)",
      marginTop: "5px",
      fontStyle: "italic"
    },
    // Admin Login Button Styles
    adminButtonContainer: {
      textAlign: "center",
      marginTop: "20px",
      padding: "10px 0"
    },
    adminButton: {
      background: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "rgba(255, 255, 255, 0.5)",
      padding: "6px 15px",
      borderRadius: "20px",
      fontSize: "0.8rem",
      cursor: "pointer",
      transition: "all 0.3s ease"
    }
  };

  // Animation keyframes as string
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
    
    @keyframes progress {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(0); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        {/* Animated background elements */}
        <div style={styles.backgroundOrb}></div>
        <div style={styles.backgroundOrb2}></div>
        
        {/* Progress bar (visible when loading) */}
        {loading && <div style={styles.progressBar}></div>}

        {/* Main Form Card */}
        <div style={styles.formCard}>
          {/* Header with glow effect */}
          <div style={styles.header}>
            <div style={styles.headerGlow}></div>
            <h1 style={styles.headerTitle}>TECHVISHWA 2K26</h1>
            <p style={styles.headerSubtitle}>Where Innovation Meets Excellence</p>
          </div>

          {/* Form Content */}
          <div style={styles.formContent}>
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div style={styles.section}>
                <div style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>👤</span>
                  Personal Information
                </div>
                
                <div style={styles.grid2}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Full Name</label>
                    <input
                      name="name"
                      placeholder="Enter your full name"
                      onChange={handleChange}
                      required
                      style={styles.input}
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.input)}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Email Address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      onChange={handleChange}
                      required
                      style={styles.input}
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.input)}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                      name="phone"
                      placeholder="+91 98765 43210"
                      onChange={handleChange}
                      required
                      style={styles.input}
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.input)}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Gender</label>
                    <select
                      name="gender"
                      onChange={handleChange}
                      required
                      style={styles.select}
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.select)}
                    >
                      <option value="" style={{background: "#1a1a2e"}}>Select Gender</option>
                      <option style={{background: "#1a1a2e"}}>Male</option>
                      <option style={{background: "#1a1a2e"}}>Female</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Academic Details */}
              <div style={styles.section}>
                <div style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>🎓</span>
                  Academic Details
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>College Name</label>
                  <input
                    name="college"
                    placeholder="Enter your college name"
                    onChange={handleChange}
                    required
                    style={styles.input}
                    onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                    onBlur={(e) => Object.assign(e.target.style, styles.input)}
                  />
                </div>

                <div style={styles.grid2}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Year of Study</label>
                    <select
                      name="year"
                      onChange={handleChange}
                      required
                      style={styles.select}
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.select)}
                    >
                      <option value="" style={{background: "#1a1a2e"}}>Select Year</option>
                      <option style={{background: "#1a1a2e"}}>First Year</option>
                      <option style={{background: "#1a1a2e"}}>Second Year</option>
                      <option style={{background: "#1a1a2e"}}>Third Year</option>
                      <option style={{background: "#1a1a2e"}}>Fourth Year</option>
                    </select>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Your Department</label>
                    <select
                      name="yourDepartment"
                      onChange={handleChange}
                      required
                      style={styles.select}
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.select)}
                    >
                      <option value="" style={{background: "#1a1a2e"}}>Select Department</option>
                      <option style={{background: "#1a1a2e"}}>Computer</option>
                      <option style={{background: "#1a1a2e"}}>Information & Technology</option>
                      <option style={{background: "#1a1a2e"}}>Electronics</option>
                      <option style={{background: "#1a1a2e"}}>Mechanical</option>
                      <option style={{background: "#1a1a2e"}}>Civil</option>
                      <option style={{background: "#1a1a2e"}}>Electrical</option>
                      <option value="Other" style={{background: "#1a1a2e"}}>Other</option>
                    </select>
                  </div>
                </div>

                {form.yourDepartment === "Other" && (
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Specify Department</label>
                    <input
                      name="customDepartment"
                      placeholder="Enter your department name"
                      onChange={handleChange}
                      required
                      style={styles.input}
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.input)}
                    />
                  </div>
                )}
              </div>

              {/* Event Selection */}
              <div style={styles.section}>
                <div style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>🎯</span>
                  Event Selection
                </div>

                <div style={styles.grid2}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Event Department</label>
                    <select
                      name="eventDepartment"
                      onChange={handleChange}
                      required
                      style={styles.select}
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.select)}
                    >
                      <option value="" style={{background: "#1a1a2e"}}>Select Department</option>
                      <option value="Civil" style={{background: "#1a1a2e"}}>Civil Engineering</option>
                      <option value="Computer" style={{background: "#1a1a2e"}}>Computer & IT</option>
                      <option value="Electrical" style={{background: "#1a1a2e"}}>Electrical Engineering</option>
                      <option value="Mechanical" style={{background: "#1a1a2e"}}>Mechanical Engineering</option>
                      <option value="Electronics" style={{background: "#1a1a2e"}}>Electronics Engineering</option>
                    </select>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Event Name</label>
                    <select
                      name="event"
                      onChange={handleChange}
                      required
                      style={styles.select}
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.select)}
                    >
                      <option value="" style={{background: "#1a1a2e"}}>Select Event</option>
                      {form.eventDepartment &&
                        events[form.eventDepartment].events.map((ev, index) => (
                          <option key={index} style={{background: "#1a1a2e"}}>{ev}</option>
                        ))}
                    </select>
                  </div>
                </div>

                {form.eventDepartment && (
                  <div style={styles.coordinatorCard}>
                    <div style={styles.coordinatorItem}>
                      <span style={styles.coordinatorIcon}>👩‍🏫</span>
                      <div>
                        <p style={styles.coordinatorText}>
                          <span style={styles.coordinatorHighlight}>Faculty Coordinator</span>
                          <br />
                          {events[form.eventDepartment].coordinator}
                        </p>
                      </div>
                    </div>
                    <div style={styles.coordinatorItem}>
                      <span style={styles.coordinatorIcon}>👨‍🎓</span>
                      <div>
                        <p style={styles.coordinatorText}>
                          <span style={styles.coordinatorHighlight}>Student Coordinator</span>
                          <br />
                          {events[form.eventDepartment].studentCoordinator}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Section */}
              <div style={styles.section}>
                <div style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>💰</span>
                  Payment Details
                </div>

                <div style={styles.paymentSection}>
                  <div style={styles.paymentHeader}>
                    <span style={styles.feeBadge}>₹30 Registration Fee</span>
                    <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>Scan to Pay</span>
                  </div>

                  <div style={styles.qrContainer}>
                    <div style={styles.qrWrapper}>
                      <div style={styles.qrGlow}></div>
                      <img 
                        src={qrImage} 
                        alt="Payment QR Code" 
                        style={styles.qrImage}
                      />
                    </div>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Transaction ID / UTR</label>
                    <input
                      name="transactionId"
                      placeholder="Enter transaction ID from payment app"
                      onChange={handleChange}
                      required
                      style={styles.input}
                      onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, styles.input)}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Payment Screenshot</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setScreenshot(e.target.files[0])}
                      required
                      style={styles.fileInput}
                      onMouseEnter={(e) => e.target.style.borderColor = "#ff3366"}
                      onMouseLeave={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.2)"}
                    />
                    <div style={styles.helperText}>
                      Upload screenshot of payment confirmation (JPG, PNG)
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  ...styles.button,
                  ...(loading ? styles.buttonDisabled : {})
                }}
                onMouseEnter={(e) => !loading && Object.assign(e.target.style, styles.buttonHover)}
                onMouseLeave={(e) => !loading && Object.assign(e.target.style, styles.button)}
              >
                {loading ? "PROCESSING..." : "COMPLETE REGISTRATION"}
              </button>
            </form>

            {/* Admin Login Button - Chota sa niche */}
            <div style={styles.adminButtonContainer}>
              <button
                onClick={() => navigate("/admin-login")}
                style={styles.adminButton}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 51, 102, 0.1)";
                  e.target.style.borderColor = "#ff3366";
                  e.target.style.color = "#ff3366";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  e.target.style.color = "rgba(255, 255, 255, 0.5)";
                }}
              >
                🔐 Admin Login
              </button>
            </div>

            <p style={{ 
              textAlign: "center", 
              color: "rgba(255, 255, 255, 0.3)", 
              fontSize: "0.8rem", 
              marginTop: "10px",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              paddingTop: "20px"
            }}>
              By registering, you agree to our terms and conditions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;