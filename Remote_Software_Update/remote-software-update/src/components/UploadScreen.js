import React from "react";

function UploadScreen() {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Upload-Seite</h1>
      <p>Hier kannst du Dateien hochladen.</p>
      {/* Datei-Upload-Komponente */}
      <input type="file" />
      <button style={{ marginTop: "20px", padding: "10px", cursor: "pointer" }}>Hochladen</button>
    </div>
  );
}

export default UploadScreen;
