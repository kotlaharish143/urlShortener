const { db } = require("../models/db");
const { int2radix64, radix64toint } = require("../services/radix64-service");

async function createRandomShortCode(link) {
  const genCode = parseInt(Math.random() * 999999999999);

  const exists = await db.find({
  
      id: genCode,
    
  });
  if (exists.length!=0) {
    // FIX: possible race condition if multiple servers vs 1 db
    return await createRandomShortCode(link);
  }
  const doc={
    "id":genCode,
    "code": int2radix64(genCode),
    "link":link
  }
  return await db.create(doc)
   
  
  
}

async function createCustomShortCode(code, link) {
  // TODO: validate code
  const id = radix64toint(code);
  const exists = await db.findOne({
  
      id: id,
    },
  );
  if (exists) {
    throw new Error("This shortcode [" + code + "] already exists");
  }
  return await db.create({
    id: id,
    code: code,
    link: link,
  });
}

async function findLongUrl(code) {
  const id = radix64toint(code);
  return await db.findOne({
      id: id,
  },{_id:0}).select('link');
}

module.exports = {
  createCustomShortCode,
  createRandomShortCode,
  findLongUrl,
};
