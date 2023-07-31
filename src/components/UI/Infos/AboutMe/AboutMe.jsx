import { myData } from "../../../../myData";

const aboutMe = () => {
  const myData = getmyData();
  return (
    <div>
      <p>
        My name is {myData.name} and i´m 25 years old. I consider myself a
        goal-oriented person with the will to be in constant learning.
        Proactive, dynamic, organised, responsible, good communication skills,
        teamwork, and management skills are my main skills.
      </p>
    </div>
  );
};
export default aboutMe;
