const URL = 'https://git.heroku.com/portfolio-ses.git'
export const sendContact = async (email, subject, message) =>{
    await fetch(`${URL}/email`,{
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
