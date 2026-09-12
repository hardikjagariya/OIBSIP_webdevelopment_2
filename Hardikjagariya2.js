const CERT_URL = "hardik_certificate.jpg";

const downloadBtn = document.getElementById("download-cert");

async function downloadCertificate() {
  try {
    const response = await fetch(CERT_URL);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "Hardik-Jagariya-HACKOSHOP-2.0-Certificate.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  } catch {
    const link = document.createElement("a");
    link.href = CERT_URL;
    link.download = "Hardik-Jagariya-HACKOSHOP-2.0-Certificate.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

if (downloadBtn) {
  downloadBtn.addEventListener("click", downloadCertificate);
}
