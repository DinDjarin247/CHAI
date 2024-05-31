import { useEffect, useState } from "react";
import TrainingCard from "./TrainingCard";
import TrainingEditor from "./TrainingEditor";

const TrainingIndex = () => {
  const [trainings, setTrainings] = useState([]);

  const addTraining = (training) => {
    setTrainings([...trainings, training]);
    console.log(training, "동작했다 App");
  };
  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await fetch("http://localhost:5000/persons");
        const data = await response.json();
        setTrainings(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPersons();
  }, []);
  console.log(trainings, "Index");

  return (
    <>
      <TrainingEditor addPerson={addTraining}></TrainingEditor>

      <div className="divider">SEARCH</div>
      <div className="container">
        {trainings.map((person, index) => (
          <div className="item" key={index}>
            <TrainingCard
              name={person.name}
              age={person.age}
              image={person.image}
              content={person.content}
              classStartDate={person.classStartDate}
              chipCartData={person.chipCartData}
              personId={person.personId}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TrainingIndex;
