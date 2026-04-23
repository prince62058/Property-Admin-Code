import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '/Users/Prince/Property-Call-Center/company-server-property/.env' });

async function checkCities() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to DB');
        
        const cities = await mongoose.connection.db.collection('cities').find({}).toArray();
        console.log('Cities found:', cities.map(c => ({ name: c.name, id: c._id })));
        
        await mongoose.disconnect();
    } catch (err) {
        console.error(err);
    }
}

checkCities();
