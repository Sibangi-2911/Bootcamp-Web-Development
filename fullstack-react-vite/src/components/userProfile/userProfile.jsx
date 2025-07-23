// styles is an object
import styles from "./userProfile.module.css";

export default function UserProfile(){
  return (
    <>
      <section>
        <ul className={`${styles.userDetails} ${styles.border}`}>
          <li>First Name: Sibangi</li>
          <li>Last Name: Boxipatro</li>
          <li>Skills: React, JavaScript</li>
        </ul>
      </section>
    </>
  )
}