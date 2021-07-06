export const sendContact = async (email, subject, message) =>{
    await fetch('http://localhost:8000/email',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json' 
        },
        body:JSON.stringify({
            email,
            subject,
            message,
        })
    })
};
