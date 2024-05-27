import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ImgLinkConverter = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await response.json();
      setImageUrl(data.filePath);
      if (onUpload) onUpload(data.filePath);
      setError("");
      console.log("Image uploaded. URL:", data.filePath); // Added log
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="mockup-window border bg-base-300">
        <input type="file" onChange={handleFileChange} />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleUpload}
        >
          Upload
        </Button>
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        {imageUrl && (
          <Box mt={2}>
            <TextField
              label="Image URL"
              value={imageUrl}
              InputProps={{
                readOnly: true,
              }}
              fullWidth
            />
            <Box mt={2}>
              <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={imageUrl}
                  alt="Uploaded"
                  style={{ maxWidth: "100%" }}
                />
              </a>
            </Box>
          </Box>
        )}
      </div>
    </>
  );
};

export default ImgLinkConverter;
