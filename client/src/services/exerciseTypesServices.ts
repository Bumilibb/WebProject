const API_ROOT = "https://fitnessappfinal.onrender.com";

export async function computeStats(userID: number){
    let response = await fetch(`${API_ROOT}/statistics/${userID}`,
    {
        method:"POST"
    }
    );
    return response.json();
}