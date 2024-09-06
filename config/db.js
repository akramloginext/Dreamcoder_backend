// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://mohammadbhati2121:wIPLiEUyGoZ6tOWi@demodatabase.im9wljz.mongodb.net/',{
   
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;




// config/db.js
// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://mohammadbhati2121:wIPLiEUyGoZ6tOWi@demodatabase.im9wljz.mongodb.net/', {
//       // Remove deprecated options
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;


// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected locally');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;





// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://akram:KHjlpyQaINnBt3Sy@travesycluster0.sg3iqyi.mongodb.net/'); // Remove useNewUrlParser and useUnifiedTopology
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error.message);
  
//   }
// };

// export default connectDB;
