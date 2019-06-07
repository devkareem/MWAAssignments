const mongoClient = require('mongodb').MongoClient;
const client = new mongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
let test;
class Resturant {

    constructor(_db) {
        this.db = _db;
    }
    async  dbConnect() {
        try {
            await client.connect();
            this.db = client.db('homework08');
        } catch (err) {
            console.error(err);
        }
    }
    async  query1() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query2() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({}).project({'restaurant_id':1,'name':1,'district':1,'cuisine':1}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query3() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({}).project({'_id':0,'restaurant_id':1,'name':1,'district':1,'cuisine':1}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query4() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({}).project({'_id':0,'restaurant_id':1,'name':1,'district':1,'address.zipcode':1}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query5() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'district':'Bronx'}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }
    async  query6() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'district':'Bronx'}).limit(5).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }
    async  query7() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'district':'Bronx'}).skip(5).limit(5).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query8() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'address.coord':{$elemMatch:{$lt:-95.754168}}}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query9() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'address.coord':{$elemMatch:{$lt:-65.754168}},'grades':{$elemMatch:{'score':{$gt:70}}},'cuisine':{$ne:'American '}}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }
"ces$"

    async  query10() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'name':{$regex:"^Wil", $options:"i"}}).project({'restaurant_id':1,'name':1,'district':1,'cuisine':1}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query11() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'name':{$regex:"ces$", $options:"i"}}).project({'restaurant_id':1,'name':1,'district':1,'cuisine':1}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }
    async  query12() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'name':{$regex:".*Reg.*"}}).project({'restaurant_id':1,'name':1,'district':1,'cuisine':1}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query13() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'district':'Bronx','cuisine':{$in:['American ','Chinese']}}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query14() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'district':{$in:["Bronx","Staten Island","Queens","Brooklyn"]}}).project({'restaurant_id':1,'name':1,'district':1,'cuisine':1}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query15() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'district':{$nin:["Bronx","Staten Island","Queens","Brooklyn"]}}).project({'restaurant_id':1,'name':1,'district':1,'cuisine':1}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query16() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'grades':{$elemMatch:{'score':{$lte:10}}}}).project({'restaurant_id':1,'name':1,'district':1,'cuisine':1}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query17() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'address.coord.1':{$gte:42,$lt:52}}).project({'restaurant_id':1,'name':1,'address':1}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }
    async  query18() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({}).sort('name',1).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query19() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({}).sort('name',-1).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query20() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({}).sort([['cuisine',1],['district',-1]]).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query21() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'address.coord':{$type:1}}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    async  query22() {
        await this.dbConnect();
        try{
            const data = await this.db.collection('restaurants').find({'name':{$regex:"^Mad", $options:"i"}}).project({'name':1,'district':1,'cuisine':1,'address.coord':1}).toArray();
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

}

const rest = new Resturant();
rest.query22();