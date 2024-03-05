from flask import Flask
from flask_pymongo import PyMongo,ObjectId
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb+srv://harishij101:nFuIx52WonhbVNHy@cluster0.e59kdcr.mongodb.net/DB?retryWrites=true&w=majority&appName=Cluster0"

mongodb_client = PyMongo(app)
db = mongodb_client.db


from application import routes