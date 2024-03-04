from flask import Flask, request, jsonify
from flask_cors import CORS 
import pandas as pd
import pickle
from sklearn.ensemble import RandomForestClassifier

app = Flask(__name__)
CORS(app)
# Load the trained model
with open('mlmodel.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# Endpoint for recommendations
@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        # Get input data from the POST request
        input_data = request.json['data']

        # Ensure the input data has the expected number of features
        if len(input_data) != 7:
            return jsonify({'error': 'Invalid input. Please provide 7 values.'}), 400

        # Convert input data to a NumPy array
        input_array = [float(value) for value in input_data]

        # Make prediction using the loaded model
        prediction = model.predict([input_array])

        return jsonify({'prediction': prediction.tolist()})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
