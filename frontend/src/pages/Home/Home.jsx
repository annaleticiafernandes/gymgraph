import { useNavigate } from "react-router"

import StartWorkoutButton from "../../components/StartWorkoutButton"
import TodaysWorkout from "../../components/Today'sWorkout"

export default function Home(){
    const navigate = useNavigate()
    const goToWorkouts = () => {navigate("/workouts")}

    const workoutName = "Upper Body"
    const category = "Upper"
    const exercises = 6

    return(
        <>
        
            <TodaysWorkout 
                workoutName={workoutName}
                category= {category}
                exercises={exercises}
            />

            <StartWorkoutButton onClick={goToWorkouts} />
        </>
    )
}