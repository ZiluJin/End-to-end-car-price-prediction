# End-to-end-car-price-prediction
This project is a full-stack machine learning application that predicts used-car market prices based on key vehicle attributes.
First I used sklearn and RandomForestRegressor to build a model using [car prices dataset](https://www.kaggle.com/datasets/deepcontractor/car-price-prediction-challenge) from kaggle.com. Then I wrote a python flask server that used the saved model to serve http requests. The website built in html, css and javascript that allowed user to enter Production Year, Mileage, Levy and choose the manufacture's name from a list. It will call python flask server to retrieve the predicted price. This website also deployed on AWS EC2 with Nginx reverse-proxy.


Technology and tools wise this project covers:
- Python
- Numpy and Pandas for data cleaning
- Matplotlib for data visualization
- Sklearn for model building
- Jupyter notebook, visual studio code and pycharm as IDE
- Python flask for http server
- HTML/CSS/Javascript for UI

<img width="1451" height="831" alt="image" src="https://github.com/user-attachments/assets/9978ae52-d7f8-4b1d-a758-403c9646f662" />

  
