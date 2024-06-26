import type { User } from "@/model/users";

const API_ROOT = "https://draftfinal.onrender.com";
 

export async function registerUser(data:any){
    /*
        Content-Type left blank as it will prevent an error in multer. The browser will automaitcally assign the content-type
    
        source: https://stackoverflow.com/questions/35192841/how-do-i-post-with-multipart-form-data-using-fetch

    */
    let response =  await fetch(`${API_ROOT}/signup`,{
        method:"POST",
        headers:{
            "Accept":'image/*',
        },
        body:data,
    })

    return response.json();
}


export async function loginAPI(loginCredentials:any){
    let response = await fetch(`${API_ROOT}/login`,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(loginCredentials)
    })

    return response.json(); 
}

export async function getAllUsers(){
    let response = await fetch(`${API_ROOT}/user`,{
        method:"POST"
    });

    return response.json();
}

export async function updateUserByID(userID:number,userData:any){
    let response = await fetch(`${API_ROOT}/user/update/${userID}`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData),
    });

    return response.json(); 
}

export async function deleteUser(userID:number) {
    let response = await fetch(`${API_ROOT}/user/delete/${userID}`,{
        method:"POST",
    });

    return response.json();  
    
}
