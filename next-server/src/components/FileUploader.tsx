"use client"
import { Inbox, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from 'axios'
import { toast } from "react-hot-toast";
import { uploadToS3 } from "@/lib/s3";

const FileUpload=()=>{
    const [upload,isupload]=useState(false)
    const {getRootProps,getInputProps}=useDropzone({
        accept:{'image/jpeg': [],
      'image/png': []},
        maxFiles:1,
        onDrop:async (acceptedFiles)=>{
            console.log(acceptedFiles)
            const file=acceptedFiles[0]
            if (file.size>10*1024*1024){
                toast.error("file too large")
                alert("upload a smaller file")
                return
            }else{
                console.log("dd")
            }
           try{
            isupload(true)
            const data=await uploadToS3(file)
            if(!data?.file_key || !data.file_name){
                alert("Something went wrong")
            }
            const formData = new FormData();
            formData.append('username',data.file_name);
            try {
                const response = await axios.post('http://127.0.0.1:5000/upload_image_url', formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                });
                console.log('Server response:', response.data);
              } catch (error) {
                console.error('Error submitting the form:', error);
              }
           }catch(error){
            console.log(error)
           }finally{
            isupload(false)
           }
        }
    })
    return (
        <div className="p-2 bg-white rounded-xl">
            <div {...getRootProps({
                className:'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col'
            })}>
                <input {...getInputProps()}/>
                {(upload )?(
                    <>
                    <Loader2 className="h-10 w-10 text-blue-500 animate-spin"/>
                    <p className="mmt-2 text-sm text-slate-400">
                        sending text to gpt my nigga
                    </p>
                    </>
                ):(
                    <>
                    <Inbox className="w-10 h-10 text-blue-500"/>
                    <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
                    </>
                )}
            </div>
        </div>
    )
}
export default FileUpload