from flask import Flask, request, jsonify
from flask_cors import CORS 
import pickle
from predictfertilizer import fert_recommend  # Import your fert_recommend function from predictfertilizer.py
from predictdisease import predict_image 
from sklearn.ensemble import RandomForestClassifier
from google.generativeai import configure, GenerativeModel

app = Flask(__name__)
CORS(app)

# Load the trained model
with open('mlmodel.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# Configure Google Generative AI
configure(api_key='AIzaSyCvuuQm4eJ4GIAIHHxaWl-FozyfYDqEnBA')
generative_model = GenerativeModel('gemini-pro')

# Endpoint for recommendations
@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        # Get input data from the POST request
        input_data = request.json.get('data')

        # Ensure the input data has the expected number of features
        if len(input_data) != 7:
            return jsonify({'error': 'Invalid input. Please provide 7 values.'}), 400

        # Convert input data to a NumPy array
        input_array = [float(value) for value in input_data.values()]

        # Make prediction using the loaded model
        prediction = model.predict([input_array])

        return jsonify({'prediction': prediction.tolist()})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# New endpoint for Plantinfo with modified prompt
@app.route('/Plantinfo', methods=['POST'])
def plant_info():
    try:
        # Get input data from the POST request
        plantname = request.json.get('plantname', 'Sunflower')  # Default to 'Sunflower' if not provided
        language= request.json.get('language','english')
        # plantname="rice"
        # Modified prompt for generative model
        generative_prompt = f"Provide advice on grooming a {plantname} plant and recommend fertilizers. (write in {language} language transalate the plant name also, do not want any ** /n in my text give only plain text give it in boolet points)"

        # Use the generative model to generate content
        generative_response = generative_model.generate_content(generative_prompt)
        generated_text = generative_response.text

        return jsonify({'output': generated_text})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/promt', methods=['POST'])
def plant_promt():
    try:
        # Get input data from the POST request
        question = request.json.get('query', 'there is no input write 3 lines to tell user to ask proper question')  
        language=request.json.get('language','english')
        # Modified prompt for generative model
        generative_prompt = f" {question}  give info ( write me response  in {language} language the answer should not exceed 40 words)"

        # Use the generative model to generate content
        generative_response = generative_model.generate_content(generative_prompt)
        generated_text = generative_response.text

        return jsonify({'output': generated_text})

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@app.route('/predictfertilizer', methods=['POST'])
def predict_fertilizer():
    try:
        # Assuming JSON payload like {"arr": ["rice", "80", "40", "30"]}
        data = request.get_json()
        arr = data.get('arr', [])

        if not arr:
            return jsonify({"error": "Invalid input format"}), 400

        # Convert nutrient values to numeric types
        crop = arr[0]
        nitrogen = float(arr[1])
        phosphorus = float(arr[2])
        potassium = float(arr[3])

        # Call the fert_recommend function with the converted values
        result = fert_recommend([crop, nitrogen, phosphorus, potassium])

        return jsonify({"result": result}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/predictdisease', methods=['POST'])
def predict_disease():
    try:
        # Assuming the POST request contains an image file
        file = request.files['image']
        
        if file:
            image_data = file.read()
            result = predict_image(img=image_data)
            return jsonify({"result": result}), 200
        else:
            return jsonify({"error": "No image file provided"}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
