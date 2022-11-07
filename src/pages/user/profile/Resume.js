import React, { useEffect, useState } from "react";
import { storage, auth, fireDB } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Resume =() =>{
  const[resume, setResume] = useState("");
  const[resumeError, setResumeError] = useState("");
  const types = ["application/pdf", "application/doc", "application/docx"];
  const handleProductResume = (e) => {
    e.preventDefault();
    let selectedFile = e.target.files[0];
    console.log(e)
    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setResume(selectedFile);
        setResumeError("");
      } else {
        setResume(null);
        setResumeError("please select valid file, .pdf or .doc or .docx");
      }
    } else {
      setResumeError("select your file");
    }
  };
  const handleAddResume = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const storageRef = ref(
      storage,
      `Resume-${Date.now()}`
      
    );
    console.log(storageRef);
    uploadBytes(storageRef, resume).then(() => {
      getDownloadURL(storageRef).then((url) => {
        addDoc(collection(fireDB, `Resume`), {
          resume: url,
          postedByUserId: user.id
        });
        alert("Resume added");
      });
    });
  };

  return(
    <div>
      <form >
        <input type="file" onChange={handleProductResume}/>
          {resumeError && (
            <>
                  <div className="Error">{resumeError}</div>
            </>
          )}
          <input type="checkbox" id="111" className="checkbox-width" onChange={handleAddResume}/>
          <label for="111">I agree to share my resume with all the employers</label>
          <br/><br/>
          <button className="primary-contained-btn">Add</button>
      </form>
    </div>
  )


};
export default Resume;
