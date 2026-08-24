import StudentCard from "./components/StudentCard";

function App(){
    return(
        <div>
            <StudentCard name="Aimiel" age={26} birthday="Kanina" studentNumber="00001234" course="BSIT" section="3-7"></StudentCard>
        </div>
    )
}
export default App;