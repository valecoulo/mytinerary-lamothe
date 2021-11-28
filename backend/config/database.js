const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('Database Connected'))
.catch(err => console.log(err)) 