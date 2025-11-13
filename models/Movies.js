import mongoose, { mongo } from "mongoose";

// define Schema 
const movieSchema = new mongoose.Schema({
    name : { type: String, required: true, trim: true },
    ratings : { type: Number, required: true, min: 1, max: 5 },
    money : { 
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 10,
     },
    genre: {
        type: Array,
    },
    isActive: { type: Boolean },
    comments : [ {value: {type: String}, published: {type: Date, default: Date.now() } }],
})


// create a model using the schema 
const movieModel = mongoose.model('Movie', movieSchema)

// const createDoc = async () => {
//     try {
//         // creating new document 
//         const m1 = new movieModel({
//             name : "Extraction 2",
//             ratings : 4,
//             money : 60000,
//             genre: ['action','adventure'],
//             isActive: true,
//             comments: [{ value : 'That was an amazing movie.' }]
//         })

//         const result = await m1.save()
//         console.log(result)

        
//     } catch (error) {
//         console.log(error);
//     }
// }


// const insertManyDoc = async () => {
//     try {
        // creating new document 
        // const m1 = new movieModel({
        //     name : "Extraction 2",
        //     ratings : 4,
        //     money : 60000,
        //     genre: ['action','adventure'],
        //     isActive: true,
        //     comments: [{ value : 'That was an amazing movie.' }]
        // })

        // const m2 = new movieModel({
        //     name : "John Week 4",
        //     ratings : 5,
        //     money : 40000,
        //     genre: ['action','cool'],
        //     isActive: true,
        //     comments: [{ value : 'I like the movie most' }]
        // })

        // const m3 = new movieModel({
        //     name : "Titanic",
        //     ratings : 3,
        //     money : 90000,
        //     genre: ['action', 'love'],
        //     isActive: true,
        //     comments: [{ value : 'good movie' }]
        // })

        // const m4 = new movieModel({
        //     name : "Diwale Dulhania",
        //     ratings : 5,
//             money : 60000,
//             genre: ['love', 'romantic'],
//             isActive: false,
//             comments: [{ value : 'cool movie and ofcourse good one who agree? Shahrulh Khan!' }]
//         })

//         const result = await movieModel.insertMany([m1,m2,m3,m4])
//         console.log(result)

        
//     } catch (error) {
//         console.log(error);
//     }
// }


// const allDoc = async () => {
//     try {
//         const result = await movieModel.find(); // find all the movies 
//         console.log(result);

//         // iterating Over to get the name 
//         // result.forEach((movie) => {
//         //     console.log(movie.name)
//         // })

//     } catch (error) {
//         console.log(error);
//     }
// }


// const singleDoc = async () => {
//     try {

//         const result = await movieModel.findById('38373283hede8383hh9294232$yew234', "name")
//         console.log(result)
//         // console.log(result.name)
//         // console.log(result.ratings)
//         // console.log(result.comments)
        
//     } catch (error) {
//         console.log(error)
//     }

// }


// const doWithField = async () => {
//     try {

//         const result = await movieModel.find({ name: "Extraction 2" })
//         console.clear();
//         console.log(result);
//         // console.log(result.name)
//         // console.log(result.ratings)
//         // console.log(result.comments)
        
//     } catch (error) {
//         console.log(error);
//     }

// }


// const dowithSkip = async () => {
//     try {
//         //  do limiting 
//         // const result1 = await movieModel.find().limit(4);

//         // skipping first 3 documents 
//         // const result = await movieModel.find().skip(3);

//         // const countNoOfDocuments = await movieModel.find().countDocuments();

//         // const sortDocuments = await movieModel.find().sort({name: -1}) // sort in descending order 

//         const sortDocuments = await movieModel.find().sort({name: 1}) // sort in ascending order 

//         // there is also greater than , less than , not included, and operator , or operator  etc all these stuffs  -> Do search 

//         console.clear();
//         console.log(sortDocuments);
        
//     } catch (error) {
//         console.log(error);
//     }

// }



// Update the document 
// const updateById = async (id) => {
//     try {
//         // updateOne(filter , whatToUpdate?)
//         const result = await movieModel.updateOne({ _id: id }, { name: "Pabitra WebDev" })

//         console.log(result);
        
//     } catch (error) {
//         console.log(error);
//     }
// }



// const updateMany = async () => {
//     try {
//         // updateOne(filter , whatToUpdate?)
//         const result = await movieModel.updateMany({ratings: 5}, { name : "5 star movie" })

//         console.log(result);
        
//     } catch (error) {
//         console.log(error);
//     }
// }



// delete a document 
// const deleteById = async () => {
//     try {
//         // updateOne(filter , whatToUpdate?)
//         const result = await movieModel.findByIdAndDelete("33623hfhd67dgd89sah$82j")

//         console.log(result);
        
//     } catch (error) {
//         console.log(error);
//     }
// }



// const deleteOne = async () => {
//     try {
//         // updateOne(filter , whatToUpdate?)
//         const result = await movieModel.deleteOne({ name : "5 star movie" })

//         console.log(result);
        
//     } catch (error) {
//         console.log(error);
//     }
// }


const deleteMany = async () => {
    try {
        // updateOne(filter , whatToUpdate?)
        const result = await movieModel.deleteMany({ ratings: 4 })

        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}


export { deleteOne };
