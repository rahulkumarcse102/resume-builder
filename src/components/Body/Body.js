import React from 'react';
import styles from './Body.module.css';
import { Download } from 'react-feather';
import Editor from '../Editor/Editor';

function Body() {
    const colors = ["239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
      };
  return (
    <div className={styles.container}>
        <p className={styles.heading}>Resume Builder</p>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {colors.map((item)=>(
                    <span 
                    key = {item}
                    style = {{backgroundColor: item}}
                    className={styles.color}
                    />
                    ))}
            </div>
            <button>Download <Download /></button>
        </div>
        <div className={styles.main}>
            <Editor sections={sections}/>
        </div>
    </div>
  );
}

export default Body;