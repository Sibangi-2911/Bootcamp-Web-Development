import LikeButton from "../likeButton/likeButton";
// styles is an object
import styles from "./userProfile.module.css";

export default function UserProfile(props){
  const {firstName="First name not added",
    lastName="last Name not added",
    skills="skills not specified",
    } = props;
  return (
    <>
      <section>
        <ul className={`${styles.userDetails} ${styles.border}`}>
          <li>First Name: {firstName}</li>
          <li>Last Name: {lastName}</li>
          <li>Skills: {skills}</li>
        </ul>
        <LikeButton />
      </section>
    </>
  )
}