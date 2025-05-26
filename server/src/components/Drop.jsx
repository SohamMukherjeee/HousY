import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL;

export default function DropzoneUpload({ onFilesUploaded }) {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback(
    async (acceptedFiles) => {
      const uploadedFiles = await Promise.all(
        acceptedFiles.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "Housy_db_pic"); // 🔁 Change this
          // You can optionally add more fields, like folder or tags

          try {
            const response = await fetch(
              CLOUDINARY_URL, // 🔁 Change this
              {
                method: "POST",
                body: formData,
              }
            );
            const data = await response.json();
            return { name: file.name, url: data.secure_url };
          } catch (err) {
            console.error("Upload failed for", file.name, err);
            return null;
          }
        })
      );

      // Remove any failed uploads (nulls)
      const validUploads = uploadedFiles.filter((file) => file !== null);
      setFiles((prev) => [...prev, ...validUploads]);
      if (onFilesUploaded) {
        onFilesUploaded(validUploads.map((file) => file.url));
      }
    },
    [onFilesUploaded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div className="p-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition ${
          isDragActive ? "bg-blue-100" : "bg-white"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          {isDragActive
            ? "Drop the files here ..."
            : "Drag & drop files here, or click to select"}
        </p>
      </div>

      <div className="flex flex-wrap mt-4 gap-4">
        {files.map((file, idx) => (
          <div key={idx} className="w-24 h-24 border rounded overflow-hidden">
            <img
              src={file.url}
              className="object-cover w-full h-full"
              alt="preview"
              onLoad={() => URL.revokeObjectURL(file.preview)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
