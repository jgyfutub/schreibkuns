import requests
from PIL import Image
from io import BytesIO
import numpy as np
from flask import Flask,request,jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv('.env.local')

def url_to_np_array(url):
    response = requests.get(url)
    response.raise_for_status()
    image = Image.open(BytesIO(response.content))
    np_array = np.array(image)

    return np_array


app=Flask(__name__)
CORS(app, supports_credentials=True)
client=OpenAI(api_key=os.getenv('API_KEY'))

@app.route('/upload_image_url', methods=['POST'])
def upload_video():
    url=request.form['username']
  #   response = client.chat.completions.create(
  # model="gpt-4o-mini",
  # messages=[
  #   {
  #     "role": "user",
  #     "content": [
  #       {
  #         "type": "text",
  #         "text": "What are in these images? Is there any difference between them?",
  #       },
  #       {
  #         "type": "image_url",
  #         "image_url": {
  #           "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
  #         },
  #       },
  #       {
  #         "type": "image_url",
  #         "image_url": {
  #           "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
  #         },
  #       },
  #     ],
  #     }
  #   ],
  #   max_tokens=300,
  # )
  #   print(response.choices[0])
    return jsonify({"message":"done"})
    
if __name__ == '__main__':
    app.run(debug=True,port=5000)