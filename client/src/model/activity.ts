


export interface ExerciseActivity {
    id: number;
    userId: number;
    name: string;
    type: string;
    duration: number;
    workout: string;
    caloriesBurned: number;
}

const exerciseData: ExerciseActivity[] = [
    { id: 1, userId: 1, name: "Push-ups", type: "Strength Training", duration: 10, caloriesBurned: 100 },
    { id: 2, userId: 1, name: "Running", type: "Cardio", duration: 30, caloriesBurned: 300 },
    // Add more exercise records here...
    { id: 25, userId: 2, name: "Cycling", type: "Cardio", duration: 45, caloriesBurned: 400 }
];