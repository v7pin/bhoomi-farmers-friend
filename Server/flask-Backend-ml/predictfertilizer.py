import numpy as np
import pandas as pd
import config
import pickle
import io
import torch
from torchvision import transforms
from PIL import Image
from utils.model import ResNet9
from utils.fertilizer import fertilizer_dic
from utils.disease import disease_dic


def fert_recommend(arr):
    title = '- Fertilizer Suggestion'

    # crop_name = str(request.form['cropname'])
    # N = int(request.form['nitrogen'])
    # P = int(request.form['phosphorous'])
    # K = int(request.form['pottasium'])
    # ph = float(request.form['ph'])

    # 0,rice,80,40,40,5.5,30
    crop_name = arr[0]
    N = arr[1]
    P = arr[2]
    K = arr[3]
    
    df = pd.read_csv('Data/fertilizer.csv')
    
    if crop_name not in df['Crop'].values:
        return f"No fertilizer recommendation found for '{crop_name}'"
    

    nr = df[df['Crop'] == crop_name]['N'].iloc[0]
    pr = df[df['Crop'] == crop_name]['P'].iloc[0]
    kr = df[df['Crop'] == crop_name]['K'].iloc[0]

    n = nr - N
    p = pr - P
    k = kr - K
    temp = {abs(n): "N", abs(p): "P", abs(k): "K"}
    max_value = temp[max(temp.keys())]
    if max_value == "N":
        if n < 0:
            key = 'NHigh'
        else:
            key = "Nlow"
    elif max_value == "P":
        if p < 0:
            key = 'PHigh'
        else:
            key = "Plow"
    else:
        if k < 0:
            key = 'KHigh'
        else:
            key = "Klow"

    # response = Markup(str(fertilizer_dic[key]))
    response = str(fertilizer_dic[key])
    return response
    # return render_template('fertilizer-result.html', recommendation=response, title=title)

# print(fert_recommend(['rice', 80, 40, 30]))


