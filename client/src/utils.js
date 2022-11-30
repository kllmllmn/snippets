export const createFormData = ({
  lastModifiedDate,
  name,
  size,
  type,
  fileChunk,
  chunk,
  chunks,
  uploadSize,
  filename,
}) => {
  const fd = new FormData();
  fd.append("lastModifiedDate", lastModifiedDate);
  fd.append("name", name);
  fd.append("size", size);
  fd.append("type", type);
  fd.append("fileChunk", fileChunk);
  fd.append("chunk", chunk);
  fd.append("chunks", chunks);
  fd.append("uploadSize", uploadSize);
  fd.append("filename", filename);
  return fd;
};
