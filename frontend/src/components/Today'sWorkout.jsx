export default function TodaysWorkout({ workoutName, category, exercises }){
    return(
        <div className="rounded-[20px] border border-[#1e1e2c] overflow-hidden relative"
            style={{background: 'linear-gradient(135deg, #131320 0%, #0e0e1a 100%)'}}
        >
            <div 
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'linear-gradient(#c8f135 1px, transparent 1px), linear-gradient(90deg, #c8f135 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}    
            />

            <div className="relative px-6 pt-6 pb-5">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <p className="text-[#52526a] text-[11px] font-semibold uppercase tracking-widest mb-1.5">Today's workout</p>
                        <div className="flex items-center gap-3">
                            <h2 className="text-[#f0f0f5] text-2xl font-bold tracking-tight">{workoutName}</h2>
                            <span
                                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                                style={{background: '#c8f135d3', color: '#20211c'}}
                            >
                                {category}
                            </span>
                        </div>

                        <p>{exercises} exercises</p>
                    </div>
                </div>
            </div>

        </div>
    )
}