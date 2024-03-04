import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import pickle

# Read Data
df = pd.read_csv('Crop_recommendation.csv')

# Splitting Data
x = df.drop('label', axis=1)
y = df['label']

# Split test and train data
from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(x, y, stratify=y, random_state=1)

# Logistic Regression
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(x_train, y_train)
y_pred = model.predict(x_test)

# Accuracy of Model
from sklearn.metrics import accuracy_score
logistic_acc = accuracy_score(y_test, y_pred)

# Decision Tree
from sklearn.tree import DecisionTreeClassifier
model_2 = DecisionTreeClassifier(criterion='entropy', max_depth=6, random_state=2)
model_2.fit(x_train, y_train)
y_pred_2 = model_2.predict(x_test)

# Accuracy
decision_acc = accuracy_score(y_test, y_pred_2)

# Naive Bayes
from sklearn.naive_bayes import GaussianNB
model_3 = GaussianNB()
model_3.fit(x_train, y_train)
y_pred_3 = model_3.predict(x_test)

# Accuracy
naive_bayes_acc = accuracy_score(y_test, y_pred_3)

# Random Forest
from sklearn.ensemble import RandomForestClassifier
model_4 = RandomForestClassifier(n_estimators=25, random_state=2)
model_4.fit(x_train.values, y_train.values)
y_pred_4 = model_4.predict(x_test)

# Accuracy
random_fore_acc = accuracy_score(y_test, y_pred_4)

# Our Data
sample_data = [[90, 42, 43, 20.879744, 82.002744, 6.502985, 202.935536]]
sample_df = pd.DataFrame(sample_data, columns=x.columns)

# Predict using the trained model
acc = model_4.predict(sample_df)
print(acc)

# Save the model
with open('mlmodel.pkl', 'wb') as f:
    pickle.dump(model_4, f)
