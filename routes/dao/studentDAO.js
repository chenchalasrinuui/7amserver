var mongodb = require("mongodb")
var getDB = require("../../common/getDB")


async function getStudentDAO() {
    try {
        console.log("getStudentDAO")
        // connect with DB
        const db = await getDB()
        const collection = db.collection("students")
        const result = await collection.find({}).toArray()
        // send response to service
        return result
    } catch (e) {
        console.error(e);
    } finally {

    }
}

async function regStudentDAO(data) {
    try {
        // connect with DB
        const db = await getDB()
        const collection = db.collection("students")
        // perform required operation
        const result = await collection.insertOne(data)
        // send response to service
        return result
    } catch (e) {
        console.error(e)
    } finally {

    }

}

async function loginDAO(data) {
    try {
        const db = await getDB();
        const collection = db.collection("students")
        return await collection.find(data).toArray()
    } catch (e) {

    } finally {

    }
}

module.exports = { getStudentDAO, regStudentDAO, loginDAO }