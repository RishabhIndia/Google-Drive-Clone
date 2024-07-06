import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Modal, Box, Button, Typography } from "@mui/material";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Added getDownloadURL
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore"; // Added Firestore imports

function PlusButton() {
  const [open, setOpen] = useState(false); // Changed initial state to false
  const [uploading, setUploading] = useState(false); // Corrected variable name
  const [file, setFile] = useState(null); // Corrected variable name

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const storage = getStorage();
  const db = getFirestore(); // Added Firestore initialization

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]); // Corrected variable name
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    setUploading(true); // Set uploading to true when upload starts
    const uploadFileRef = ref(storage, `files/${file.name}`); // Corrected the file reference
    try {
      await uploadBytes(uploadFileRef, file); // Corrected the upload function
      const url = await getDownloadURL(uploadFileRef); // Get the download URL
      await addDoc(collection(db, "myFiles"), {
        timestamp: serverTimestamp(),
        filename: file.name,
        fileURL: url,
        size: file.size, // Corrected to use file size directly
      });
      setUploading(false); // Set uploading to false after upload completes
      setFile(null);
      setOpen(false);
    } catch (error) {
      console.error("File upload failed:", error);
      setUploading(false); // Ensure uploading is set to false if an error occurs
    }
  };

  return (
    <>
      {/* Button to open the modal */}
      <button type="button" onClick={handleOpen}>
        <span className="inline-block p-4 pt-2">
          <span className="flex items-center gap-3 py-4 pl-4 pr-5 bg-white shadow-md rounded-2xl hover:bg-opacity-10 hover:bg-blue-300 dark:hover:bg-slate-900 dark:text-slate-300">
            <FiPlus style={{ width: "25px", height: "25px" }} />
            <h3>New</h3>
          </span>
        </span>
      </button>

      {/* Material-UI Modal for file upload */}
      <Modal open={open} onClose={handleClose}>
        {uploading ? (
          <div className="flex relative top-72 justify-center ali">
            {" "}
            {/* Corrected className */}
            <p className="bg-lime-500 font-bold text-white my-5 text-center py-2 tracking-wide w-1/4 rounded-lg">
              {" "}
              {/* Corrected className */}
              Uploading ....
            </p>
          </div>
        ) : (
          <>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" component="h2">
                Upload File
              </Typography>
              <input type="file" onChange={handleChange} />
              <Button
                variant="contained"
                color="primary"
                onClick={handleFileUpload}
                sx={{ mt: 2 }}
              >
                Upload
              </Button>
            </Box>
          </>
        )}
      </Modal>
    </>
  );
}

export default PlusButton;
