import UserCard from "./UserCard";
import type {User, Skill} from './types';
import SkillList from "./SkillList";


function App(){
  const user: User={
    name:"Aliya",
    email:"aliya.kaldibay01@gmail.com",
    age:19
  };

  const skills: Skill[] = [
    { id: 1, name: "React", level: "Expert" },
    { id: 2, name: "TypeScript", level: "Intermediate" },
    { id: 3, name: "CSS", level: "Beginner" }
  ]
  return (
    <>
      <UserCard user={user} isActive={true}>
        <p>This is user bio</p>
      </UserCard>

      <SkillList skills={skills} />
    </>
  );
}

export default App;