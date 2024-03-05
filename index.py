from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

API_KEY = 'HxKLNvQ8.4HBCfooZf1ZLNezdqHt6P0ZB3fS2xnSp'
BASE_URL = 'https://payload.vextapp.com/hook/QAC97AJK2Q/catch/{}'

@app.route('/webhook', methods=['POST'])
def webhook():
    try:
        user_query = request.json.get('payload', '')
        
        headers = {
            'Content-Type': 'application/json',
            'Apikey': f'Api-Key {API_KEY}',
        }

        data = {
            "payload": user_query
        }

        url = BASE_URL.format('$(consti)')

        response = requests.post(url, json=data, headers=headers)
        response.raise_for_status()

        # Display API response
        return jsonify({"API Response": response.text}), 200

    except requests.exceptions.RequestException as e:
        return jsonify({"Error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
