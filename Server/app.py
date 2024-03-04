from flask import Flask, request, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

# Load the trained model
with open('mlmodel.pkl', 'rb') as f:
    model = pickle.load(f)

# Other routes...

@app.route('/predict_crop', methods=['POST'])
def predict_crop():
    try:
        # Get input data from the request
        input_data = request.json['input_data']

        # Create a DataFrame from the input data
        input_df = pd.DataFrame(input_data, columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'])

        # Use the trained model to predict the crop
        prediction = model.predict(input_df)

        return jsonify({'crop_prediction': prediction[0]})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
