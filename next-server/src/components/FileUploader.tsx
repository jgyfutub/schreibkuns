"use client"
import { Inbox, Loader2 } from "lucide-react";
import React, { useState,useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from 'axios'
import { toast } from "react-hot-toast";
import { uploadToS3 } from "@/lib/s3";
type Props = { chatid:String,email:String}
const FileUpload=( {chatid,email}: Props)=>{
    const [upload,isupload]=useState(false)
    const [result,setresult]=useState("")
    const [filename1,setfilename1]=useState("")
    useEffect(()=>{
        const fetchImage=async()=>{
            const image=await axios.post('http://127.0.0.1:5000/get_image_url', {email,chatid})
            // setfilename1()
            setfilename1(image.data.imageurl)
        }
        fetchImage()

    },[email,chatid])
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
            const data=await uploadToS3(file,chatid)
            if(!data?.file_key || !data.file_name){
                alert("Something went wrong")
            }
            const filename=data.file_name
            const formData = new FormData();
            formData.append('username',data.file_name);
            // formData.append('email',chatid)d
            console.log(filename)
            setfilename1(filename)
            try {
                const response = await axios.post('http://127.0.0.1:5000/upload_image_url', {email,chatid,filename}
                //     formData, {
                //   headers: {
                //     'Content-Type': 'multipart/form-data',
                //   },
                // }
            );
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
        <div>
            {filename1=="" ?(
        <div className="p-2 bg-white rounded-xl">
            <div {...getRootProps({
                className:'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col'
            })}>
                <input {...getInputProps()}/>
                {(upload )?(
                    <>
                    <Loader2 className="h-10 w-10 text-blue-500 animate-spin"/>
                    <p className="mmt-2 text-sm text-slate-400">
                        sending text to the LLM 
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
            ):(
        <div>
      <img src={"https://chatpdf-ved.s3.eu-north-1.amazonaws.com/"+filename1} alt="Description of image" style={{ width: '300px', height: 'auto' }} />
    </div>)}
        </div>
    )
}
export default FileUpload