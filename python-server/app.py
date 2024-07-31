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

@app.route('/upload_image_url', methods=['POST'])
def upload_video():
    url=request.form['username']
#https://chatpdf-ved.s3.eu-north-1.amazonaws.com/desktop-wallpaper-war-flag-of-the-german-empire-german-empire1722359696535.jpg
    imageurl="https://"+os.getenv('AWS_SECRET_BUCKET_NAME')+".s3."+os.getenv("NEXT_PUBLIC_AWS_REGION")+".amazonaws.com/"+url
    print(imageurl)
    response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {
        "role": "user",
        "content": [
            {
            "type": "text",
            "text": "Explain the image in clarity.",
            },
            {
            "type": "image_url",
            "image_url": {
                "url": imageurl,
            },
            },
        ],
        }
        ],
        max_tokens=100,
    )
    print(response.choices[0])
    return jsonify({"message":"done"})
    
if __name__ == '__main__':
    app.run(debug=True,port=5000)