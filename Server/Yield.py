import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import pickle

# Read Data
df = pd.read_csv('crop_production.csv')

# Assuming 'label' is the column representing yield, replace it with the actual column name
# For example, assuming 'Yield' is the column name representing crop yield
y_column_name = 'Yield'
x = df.drop(y_column_name, axis=1)
y = df[y_column_name]

# Split test and train data
from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.25, random_state=1)

# Logistic Regression
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(x_train, y_train)
y_pred = model.predict(x_test)

# Accuracy of Model
from sklearn.metrics import accuracy_score
logistic_acc = accuracy_score(y_test, y_pred)

# Decision Tree
from sklearn.tree import DecisionTreeRegressor
model_2 = DecisionTreeRegressor(criterion='mse', max_depth=6, random_state=2)
model_2.fit(x_train, y_train)
y_pred_2 = model_2.predict(x_test)

# Accuracy
decision_acc = model_2.score(x_test, y_test)

# Naive Bayes
# Assuming GaussianNB is not appropriate for regression tasks, you might want to use another model
# For regression tasks, consider using GaussianProcessRegressor or other suitable models
# Example: from sklearn.gaussian_process import GaussianProcessRegressor
# model_3 = GaussianProcessRegressor()
# ...
model_3 = None  # Replace this line with an appropriate regression model for Naive Bayes

# Accuracy
naive_bayes_acc = None  # Replace this line with appropriate evaluation for regression models

# Random Forest
from sklearn.ensemble import RandomForestRegressor
model_4 = RandomForestRegressor(n_estimators=25, random_state=2)
model_4.fit(x_train, y_train)
y_pred_4 = model_4.predict(x_test)

# Accuracy
random_fore_acc = model_4.score(x_test, y_test)

# Our Data
sample_data = [[90, 42, 2022, 'Kharif', 'Rice', 6.502985, 202.935536]]
sample_df = pd.DataFrame(sample_data, columns=x.columns)

# Predict using the trained model
predicted_yield = model_4.predict(sample_df)
print("Predicted Yield:", predicted_yield)

# Save the model
with open('crop_yield_model.pkl', 'wb') as f:
    pickle.dump(model_4, f)
