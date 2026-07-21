export default function StartWorkoutButton({ onClick }){
    return(
        <button onClick={onClick} 
            className="flex-1 py-3.5 px-25 rounded-[12px] text-[#09090e] font-bold text-sm tracking-wide transition-all hover:brightness-95 cursor-pointer"
            style={{background: '#c8f135'}}
        >
            Start Workout
        </button>
    )
}