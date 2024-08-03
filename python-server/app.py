import requests
from PIL import Image
from io import BytesIO
import numpy as np
from flask import Flask,request,jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import datetime
import urllib.parse
from pinecone.grpc import PineconeGRPC as Pinecone
from pinecone import ServerlessSpec
import random
import time

load_dotenv('.env')
pc = Pinecone(api_key=os.getenv('PINECONE_KEY'))
print(pc)
index_name = "docs-quickstart-index"
if index_name not in pc.list_indexes().names():
    pc.create_index(
        name=index_name,
        dimension=2,
        metric="cosine",
        spec=ServerlessSpec(
            cloud='aws', 
            region='us-east-1'
        ) 
    ) 
index = pc.Index(index_name)
index.upsert(
    vectors=[
        {
            "id": "vec1", 
            "values": [0.1, 0.1], 
            "metadata": {"genre": "drama"}
        }, {
            "id": "vec2", 
            "values": [0.2, 0.2], 
            "metadata": {"genre": "action"}
        }, {
            "id": "vec3", 
            "values": [0.3, 0.3], 
            "metadata": {"genre": "drama"}
        }, {
            "id": "vec4", 
            "values": [0.4, 0.4,], 
            "metadata": {"genre": "action"}
        }
    ],
    namespace= "ns1"
)
print(index.describe_index_stats())
def url_to_np_array(url):
    response = requests.get(url)
    response.raise_for_status()
    image = Image.open(BytesIO(response.content))
    np_array = np.array(image)

    return np_array


app=Flask(__name__)
CORS(app, supports_credentials=True)
client=OpenAI(api_key=os.getenv('API_KEY'))
print(client)

messages_db = {
    12345: [
        {"id": "msg1", "userId": "user1", "senderName": "Alice", "content": "Hello, how are you?", "timestamp": "2024-08-02T10:15:30Z","role":"user"},
        {"id": "msg2", "userId": "user2", "senderName": "Bob", "content": "I'm good, thanks! How about you?", "timestamp": "2024-08-02T10:16:00Z","role":"assistant"},
        {"id": "msg3", "userId": "user1", "senderName": "Alice", "content": "Doing well, just working on some projects.", "timestamp": "2024-08-02T10:17:15Z","role":"user"}
    ]
    # Add more chat data as needed
}

@app.route('/api/get-messages', methods=['POST'])
def get_messages():
    data = request.get_json()
    chat_id = data.get('chatId')
    print(data,chat_id)
    if chat_id is None:
        return jsonify({"error": "chatId is required"}), 400
    
    # Retrieve messages for the given chatId
    messages = messages_db[chat_id]
    # print(messages_db[chat_id])
    m=[]
    index1 = pc.Index("chatdatabase")
    for i in index1.query(
        vector=[chat_id],
        # include_values=True,
        include_metadata=True,
        top_k=1000
    )['matches']:
        m.append(i['metadata'])
    m=sorted(m, key=lambda x: x['timestamp'])
    print(m)
    return jsonify({"message":"done","chats":m})


@app.route('/upload_image_url', methods=['POST'])
def upload_video():
    url=request.form['username']
#https://chatpdf-ved.s3.eu-north-1.amazonaws.com/desktop-wallpaper-war-flag-of-the-german-empire-german-empire1722359696535.jpg
    imageurl="https://"+os.getenv('AWS_SECRET_BUCKET_NAME')+".s3."+os.getenv("NEXT_PUBLIC_AWS_REGION")+".amazonaws.com/"+url
    print(imageurl)
    # response = client.chat.completions.create(
    # model="gpt-4o-mini",
    # messages=[
    #     {
    #     "role": "user",
    #     "content": [
    #         {
    #         "type": "text",
    #         "text": "Explain the image in clarity.",
    #         },
    #         {
    #         "type": "image_url",
    #         "image_url": {
    #             "url": imageurl,
    #         },
    #         },
    #     ],
    #     }
    #     ],
    #     max_tokens=100,
    # )
    # print(response.choices[0])
    return jsonify({"message":"done","response":"Explain the image in clarity"})
    
@app.route('/api/chat', methods=['POST'])
def chat():
    print("hello")
    data=request.get_json()
    print(data['messages'][-1]['content'])
    index1=pc.Index('chatdatabase')
    index1.upsert(
        vectors=[
            {
            "id":str(random.randint(1000000000, 9999999999)),
            "values":[12345],
            "metadata":{ "id": "msg3", "userId": "user1","senderName": "Alice", "content":data['messages'][-1]['content'] , "timestamp": int(time.time()),"role":"user"}
            },
            {
            "id":str(random.randint(1000000000, 9999999999)),
            "values":[12345],
            "metadata":{ "id": "msg3", "userId": "user1","senderName": "Alice", "content":data['messages'][-1]['content'] , "timestamp": int(time.time())+10,"role":"assistant"}
            }
        ]
    )
    # messages_db[12345].append({"id": "msg3", "userId": "user1", "senderName": "Alice", "content":data[12345][-1]['content'], "timestamp": "2024-08-02T10:17:15Z","role":"user"})
    return jsonify({"chat":"random text"})

@app.route('/email_entry', methods=['POST'])
def email_entry():
    index = pc.Index('chatpdf-yt')
    index.upsert(
    vectors=[
    {
      "id": "A", 
      "values": [-1]*1536, 
      "metadata": {"email":request.form['email']}
    },])
    return jsonify({"message":"done",})
if __name__ == '__main__':
    app.run(debug=True,port=5000)