import "./Home.css"
import "../../../src/style.css"
import Studentcard from "../../components/Studentcard/Studentcard"
import studentimg1 from "../../components/Studentcard/img/std1.jpeg"
import studentimg2 from "../../components/Studentcard/img/std2.jpeg"
import studentimg3 from "../../components/Studentcard/img/std3.jpeg"

const Home = () => {
    return (
        <>
        <h1>Zoom App</h1>

        <div className="Student-card-container">
        <Studentcard
         StudentName= "Atharva"
         StudentImage = {studentimg1}
         MicState={true}
         />

        <Studentcard 
        StudentName= "Prathamaesh"
        StudentImage = {studentimg2}
        MicState={false}
        />

        <Studentcard 
        StudentName= "Binod"
        StudentImage = {studentimg3}
        MicState={true}
        />
        </div>
        </>
    )

}

export default Home