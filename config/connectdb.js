import mongoose from 'mongoose';

const connectDB =async (DATABASE_URL)=>{
    console.log(DATABASE_URL)
   await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected successfully..."))
    .catch((error) => console.log(error));
}

// const connectDB =async (DATABASE_URL)=>{
//     try {
//         const DB_OPTIONS={
//             dbName:"finalyear"
//         }
//         await mongoose.connect(DATABASE_URL,DB_OPTIONS)
//         console.log("Connected successfully...")
//     } catch (error) {
//         console.log(error)  
//     }
// }

export default connectDB