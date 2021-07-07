export const sendContact = async (email, subject, message) =>{
    await fetch('https://portfolio-ses.herokuapp.com/',{
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
