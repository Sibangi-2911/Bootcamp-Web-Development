import UserProfile from "./components/userProfile/userProfile";

const user = {
  firstName: "John",
  lastName: "Doe",
  skills: "NodeJs, React",
};
const user1 = {
  firstName: "Sibangi",
  lastName: "Boxipatro",
  skills: "HTML, React",
};

export default function App() {

  return (
    <>
      <UserProfile firstName={user.firstName}  lastName={user.lastName} skills={user.skills} />
      <UserProfile firstName={user1.firstName} lastName={user1.lastName} skills={user1.skills} />
    </>
  )  
}


