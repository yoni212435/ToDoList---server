const { userModel } = require('../model/user')

async function create(data) {
    return await userModel.create(data);
}

async function readOne(filter, proj) {
    return await userModel.findOne(filter, proj);
}
async function read(filter, proj) {
    return await userModel.find(filter, proj);
}
async function update(filter, newData) {
    console.log("update newdata:",newData, filter);
    return await userModel.updateOne(filter, newData);
}
async function del(filter) {
    return await update(filter, { isActive: false });
}

module.exports = { create, readOne, read, update, del }






