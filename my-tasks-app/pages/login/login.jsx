import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function Login(){
  return(
    <>
      <h1>This is a Login Page.</h1>
      <ul>
        <li>
          <Link to="tasks">Tasks</Link>
        </li>
        <li>
          <Button asChild>
            <Link to="signup">Signup</Link>
          </Button>
        </li>
      </ul>
    </>
  );
}