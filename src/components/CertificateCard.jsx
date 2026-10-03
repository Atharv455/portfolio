import { FiFileText } from "react-icons/fi";
import { useReveal } from "../hooks/useReveal";
import "./CertificateCard.css";

function CertificateCard({ certificate }) {
  const revealRef = useReveal();

  return (
    <div className="certificate-card card reveal" ref={revealRef}>
      <div className="certificate-card__icon-wrap">
        <FiFileText size={22} className="certificate-card__icon" />
      </div>
      <h3>{certificate.title}</h3>
      {certificate.issuer && <p className="certificate-card__issuer">{certificate.issuer}</p>}
      {certificate.date && <p className="certificate-card__date">{certificate.date}</p>}
      <p className="certificate-card__description">{certificate.description}</p>

      {certificate.available ? (
        <a
          href={`/certificates/${certificate.file}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
        >
          View Certificate
        </a>
      ) : (
        <button type="button" className="btn btn-outline btn-sm" disabled title="Certificate PDF not yet added">
          View Certificate
        </button>
      )}
    </div>
  );
}

export default CertificateCard;
