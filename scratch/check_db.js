import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '/Users/Prince/Property-Call-Center/company-server-property/.env' });

const propertySchema = new mongoose.Schema({}, { strict: false });
const Property = mongoose.model('Property', propertySchema);

async function check() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to DB');
        
        const sample = await Property.findOne({ phoneNumber: { $exists: true } });
        if (sample) {
            console.log('Sample property found:');
            console.log('Title:', sample.get('title'));
            console.log('PhoneNumber:', sample.get('phoneNumber'), 'Type:', typeof sample.get('phoneNumber'));
        } else {
            console.log('No properties with phoneNumber found');
        }
        
        await mongoose.disconnect();
    } catch (err) {
        console.error(err);
    }
}

check();
