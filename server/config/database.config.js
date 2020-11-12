const mongoose = require('mongoose'),
    uri = 'disco-dogs';

mongoose.connect(`mongodb://localhost/${uri}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("You're now in the main frame . . ."))
    .catch(err => console.log("Meltdown! Meltdown! Meltdown!",err))