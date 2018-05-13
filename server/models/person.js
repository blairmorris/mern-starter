import mongoose from 'mongoose';
const schema = mongoose.Schema;

const personSchema = new Schema({
    name: { type: 'String', required: true },
    age: { type: 'Number', required: true },
    cuid: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true }
})

export default mongoose.model('Person', personSchema);