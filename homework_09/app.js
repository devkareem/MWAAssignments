const mongoClient = require('mongodb').MongoClient;
const client = new mongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
let test;
class Zips {

    constructor(_db) {
        this.db = _db;
    }
    async  dbConnect() {
        try {
            await client.connect();
            this.db = client.db('homework09');
        } catch (err) {
            console.error(err);
        }
    }

    async  query1() {
        await this.dbConnect();
        try {
            const data = await this.db.collection('zips').aggregate([
                { $match: { state: 'WA' } }
            ]).toArray();
            console.log(data)
        }
        catch (err) {
            console.error(err);
        }
    }

    async  query2() {
        await this.dbConnect();
        try {
            const data = await this.db.collection('zips').aggregate([
                { $match: { pop: { $lt: 5000 } } }
            ]).toArray();
            console.log(data)
        }
        catch (err) {
            console.error(err);
        }
    }

    async  query3() {
        await this.dbConnect();
        try {
            const data = await this.db.collection('zips').aggregate([
                {
                    $group: {
                        _id: { "state": "$state", "city": "$city" },
                        num_citie: { $sum: 1 },
                    }
                },
                { $match: { num_citie: { $gt: 1 } } },
                { $project: { _id: 0, 'city': '$_id.city', 'state': '$_id.state' } }
                ,
                { $sort: { city: 1 } }
            ]).toArray();
            console.log(data)
        }
        catch (err) {
            console.error(err);
        }
    }

    async  query4() {
        await this.dbConnect();
        try {
            const data = await this.db.collection('zips').aggregate([
                {
                    $group: {
                        _id: { "state": "$state", "city": "$city" },
                        num_citie: { $sum: "$pop" },
                    }
                },
                { $project: { _id: 0, 'city': '$_id.city', 'state': '$_id.state','pop':'$num_citie' } }
                ,
                {$sort:{pop:1}}
                ,
                {
                    $group: {
                        _id: { "state": "$state" },
                        pop:{$first:'$pop'},
                        city:{$first:'$city'}

                    }
                }
            ]).toArray();
            console.log(data)
        }
        catch (err) {
            console.error(err);
        }
    }
}

const rest = new Zips();
rest.query4();