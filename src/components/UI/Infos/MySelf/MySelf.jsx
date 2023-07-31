import { useState, useEffect } from "react";

const MySelf = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthdayDate = new Date("1997-11-25");
      const currentDate = new Date();
      const ageDifference = currentDate - birthdayDate;
      const ageDate = new Date(ageDifference);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    };

    calculateAge();

    const intervalId = setInterval(() => {
      calculateAge();
    }, 1000 * 60 * 60 * 24 * 365); // (1 ano)

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <p>
      My name is Igor Cardoso and i´m {age} years old. I consider myself a
      goal-oriented person with the will to be in constant learning. Proactive,
      dynamic, organised, responsible, good communication skills, teamwork, and
      management skills are my main skills.
    </p>
  );
};

export default MySelf;
