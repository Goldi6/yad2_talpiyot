// const crypto = require('crypto');
// const { promisify } = require('util');


// INFO: For dev purpose, the s3 bucket is public, and has a policy to allow getObject from any IP,

/* INFO: CORS settings are needed to allow the web page to display images (like in an img tag) so it needs to have permission to make a request for an url that is different from the source, which is s3 bucket url. */
// ! In production mode we will allow only our domain to access the bucket. 

//any client can get objects but only our server should be able to upload and delete images.
// for this purpose we will create a policy and a IAM user.
/*
[
    
    {
        "AllowedHeaders":["*"],
        "AllowedMethods":["GET","PUT","HEAD"],
        "AllowedOrigins":["*"],
        "ExposeHeaders":[]
    }
    
    ]
*/

const { S3Client } = require("@aws-sdk/client-s3")
const { GetObjectCommand, PutObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")


const region = process.env.AWS_REGION || 'eu-north-1';
const bucketName = process.env.AWS_BUCKET_NAME || 'bucket';
const accessKeyId = process.env.AWS_ACCESS_KEY_ID || '';
const secretAccessKey = process.env.AWS_ACCESS_KEY || '';


const s3 = new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey
    },

    // signatureVersion: 'v4'
});




const generateUploadURL = async (imageName) => {


    // const rawBytes = await promisify(crypto.randomBytes)(16);
    // const imageName = rawBytes.toString('hex');

    const params = {
        Bucket: bucketName,
        Key: imageName,
        ContentType: 'image/*',
        // Expires: 60 //seconds

    }
    const putObjectCommand = new PutObjectCommand(params);
    const expirationInSeconds = 3600;

    try {
        const uploadURL = await getSignedUrl(s3, putObjectCommand, { expiresIn: expirationInSeconds });
        return uploadURL;
    } catch (error) {
        console.error("Error generating signed URL:", error);
        throw error;
    }

};

const deleteImageFromBucket = async (key) => {

    const deleteCommand = new DeleteObjectCommand({
        Bucket: bucketName,
        Key: key
    });

    try {

        await s3.send(deleteCommand);
    } catch (error) {
        throw error;
    }
}

module.exports = { generateUploadURL, deleteImageFromBucket }