import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '/Users/Prince/Property-Call-Center/company-server-property/.env' });

async function checkIndoreCategories() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to DB');
        
        const indoreId = '69d0d1e5e7b6deee3a01d9d6';
        const categories = await mongoose.connection.db.collection('categories').find({
            $or: [
                { cities: new mongoose.Types.ObjectId(indoreId) },
                { cities: indoreId }
            ]
        }).toArray();
        
        console.log('Categories for Indore:', categories.map(c => c.name));
        
        const allCategories = await mongoose.connection.db.collection('categories').find({}).toArray();
        console.log('Total categories in DB:', allCategories.length);
        console.log('Global categories (empty cities):', allCategories.filter(c => !c.cities || c.cities.length === 0).map(c => c.name));
        
        await mongoose.disconnect();
    } catch (err) {
        console.error(err);
    }
}

checkIndoreCategories();
