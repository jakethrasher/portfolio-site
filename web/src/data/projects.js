const projects = [
    {
        image: './socketjockey.png',
        name:'Socket Jockey',
        github:'https://github.com/socket-jockey',
        site:'https://socketjockey.netlify.app/',
        tech:['Node.js', 'Express', 'React','Socket.io','Matter.js', 'Tone.js', 'p5', 'Heroku'],
        description: 'Anyone can make beautiful noise with Socket Jockey. This audiovisual app uses physics and colliding objects to generate musical soundscapes. One or more users may enter rooms where they can collaborate by adding sonically charged objects to a collective space.'
    },
    {
        image: './awesomebot.png',
        name:'AwesomeBot',
        github:'https://github.com/team-acl-slackbot',
        tech:['Node.js', 'Express','PostgreSQL','Slack-API/SDK','Cheerio.js','Heroku'],
        description: 'Built with a team of engineers during a five day sprint, AwesomeBot is a Slack application designed to increase the productivity of both students and staff of the Alchemy Code Lab by bringing commonly used tooling into the Slack environment. Students can invoke custom slack commands to access course assignments, Alchemy-specific Zoom rooms, and schedule meetings.'
    },
    {
        image: './clearskies.png',
        name:'Clear Skies',
        github:'https://github.com/clear-skies-app',
        tech:['Node.js', 'Express','PostgreSQL','Jest','React','React-Bootstrap','Heroku'],
        site:'https://clear-skies.netlify.app/',
        description: 'Clear Skies is an app created to assist budding astronomers in planning their own star-gazing adventure. The app features a virtual sky map that helps the user locate celestial objects that can be viewed from their location. The user may create an account and log the details of their journey.'
    },
    {
        image: './nutrizone.png',
        name:'Nutrizone',
        github:'https://github.com/Dominique-Sakrisson/nutri-project',
        tech:['JavaScript','HTML','CSS','CanvasJS','Netlify'],
        site:'https://dominique-sakrisson.github.io/nutri-project/',
        description: 'Built remotely during a four day sprint, Nutrizone helps users track their daily caloric intake based on their preferred diet type.It was a blast and a challenge coding this app entirely in vanilla JavaScript. We provide tabular data and bar charts built with CanvasJS to help the user meet their daily macronutrient goals.'
    }
]
export default projects;