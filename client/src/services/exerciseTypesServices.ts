const API_ROOT = "https://draftfinal.onrender.com";

export async function computeStats(userID: number){
    let response = await fetch(`${API_ROOT}/statistics/${userID}`,
    {
        method:"POST"
    }
    );
    return response.json();
}