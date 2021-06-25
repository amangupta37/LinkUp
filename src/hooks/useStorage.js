import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (localImgurl) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(localImgurl.name);

    storageRef.put(localImgurl).on(
      "state_changed",

      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

        setProgress(percentage);
      },

      (err) => {
        setError(err);
      },

      async (snap) => {
        const url = await storageRef.getDownloadURL();

        setUrl(url);
      }
    );
  }, [localImgurl]);

  return { progress, error, url };
};

export default useStorage;
