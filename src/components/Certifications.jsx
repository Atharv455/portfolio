import { useState } from "react";
import { certifications } from "../data/portfolioData";
import CertificateCard from "./CertificateCard";
import "./Certifications.css";

const INITIAL_VISIBLE = 3;
const CATEGORIES = ["All", ...new Set(certifications.map((cert) => cert.category))];

function Certifications() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const filtered = filter === "All" ? certifications : certifications.filter((cert) => cert.category === filter);
  const visibleCertifications = expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  function handleFilterChange(category) {
    setFilter(category);
    setExpanded(false);
  }

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Learning &amp; Training</span>
          <h2>Certifications</h2>
        </div>

        <div className="filter-row" role="tablist" aria-label="Filter certifications by category">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
              className={`filter-chip ${filter === category ? "filter-chip--active" : ""}`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="certifications-grid">
          {visibleCertifications.map((certificate) => (
            <CertificateCard key={certificate.title} certificate={certificate} />
          ))}
        </div>

        {filtered.length > INITIAL_VISIBLE && (
          <button type="button" className="btn btn-outline certifications__toggle" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Show Less" : `View More (${filtered.length - INITIAL_VISIBLE})`}
          </button>
        )}
      </div>
    </section>
  );
}

export default Certifications;
