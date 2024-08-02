import requests
from PIL import Image
from io import BytesIO
import numpy as np
from flask import Flask,request,jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv('.env')

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
        {"id": "msg1", "userId": "user1", "senderName": "Alice", "message": "Hello, how are you?", "timestamp": "2024-08-02T10:15:30Z","role":"user"},
        {"id": "msg2", "userId": "user2", "senderName": "Bob", "message": "I'm good, thanks! How about you?", "timestamp": "2024-08-02T10:16:00Z","role":"assistant"},
        {"id": "msg3", "userId": "user1", "senderName": "Alice", "message": "Doing well, just working on some projects.", "timestamp": "2024-08-02T10:17:15Z","role":"user"}
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
    print(messages_db[chat_id])
    return jsonify({"message":"done","chats":messages})


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
    
if __name__ == '__main__':
    app.run(debug=True,port=5000)