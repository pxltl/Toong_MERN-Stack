import StudentCard from "./components/StudentCard";
import Subjects from "./components/Subjects";

function App(){
    return(
        <div>
            <div>
            <StudentCard name="Aimiel" age={26} birthday="Kanina" studentNumber="00001234" course="BSIT" section="3-7"></StudentCard>
        </div>
        <h1>Subjects</h1>
        <div>
            <Subjects subjectId="BSIT-101" subjectName="Web Development" instructor="Sir John"></Subjects>
            <Subjects subjectId="BSIT-102" subjectName="Database Management" instructor="Ma'am Jane"></Subjects>
            <Subjects subjectId="BSIT-103" subjectName="Mobile App Development" instructor="Sir Mark"></Subjects>
        </div>
        </div>
    );
}
export default App;