import AWS from 'aws-sdk'
export async function uploadToS3(file:File,chatid:String){
    // try{
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
            region: process.env.NEXT_PUBLIC_AWS_REGION
        })
        const s3=new AWS.S3({
            params:{
                Bucket:process.env.AWS_SECRET_BUCKET_NAME,
            },
            region:'eu-north-1'
        })
        const file_key='uploads/'+Date.now().toString()+file.name.replace(" ",'-')
        const file_name=chatid+"."+file.name.split(".")[1]
        const params={
            Bucket:"chatpdf-ved",
            Key:file_name,
            Body:file
        }
        const upload=s3.putObject(params).on('httpUploadProgress',evt=>{
            console.log('uploading the file to s3')
        }).promise()
        await upload.then(data=>{
            console.log("successful uploaded to s3!!")
        })

        return Promise.resolve({
            file_key,
            file_name:file_name
        })
}