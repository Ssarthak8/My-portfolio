import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cert1 from "../assets/img1.png";
import cert2 from "../assets/img2.png";
import cert3 from "../assets/img3.png";
import "./Certificates.css";

const Certificates = () => {
  const certificates = [
    { id: 1, src: cert1, title: "Red Hat Certified Developer" },
    { id: 2, src: cert2, title: "Blockchain Specialization - Coursera" },
    { id: 3, src: cert3, title: "Agile Project Management - Coursera" },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="certificates-container">
      <h2 className="cert-title">📜 My Certificates</h2>

      <div className="cert-grid">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="cert-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedCert(cert)}
          >
            <motion.img
              src={cert.src}
              alt={cert.title}
              className="cert-img"
              layoutId={cert.id}
            />
            <p className="cert-name">{cert.title}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="overlay"
            onClick={() => setSelectedCert(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="expanded-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedCert(null)}
              >
                ❌
              </button>
              <img
                src={selectedCert.src}
                alt={selectedCert.title}
                className="expanded-img"
              />
              <h3>{selectedCert.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
