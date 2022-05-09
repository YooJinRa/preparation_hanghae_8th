from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://test:sparta@cluster0.svgu3.mongodb.net/cluster0?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta

from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/yoojin", methods=["POST"])
def yoojin_post():
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']
    doc = {
        'name':name_receive,
        'comment':comment_receive
    }
    db.yoojin.insert_one(doc)

    return jsonify({'msg':'응원을 남겨주셔서 감사합니다:)'})

@app.route("/yoojin", methods=["GET"])
def yoojin_get():
    yoojin_list = list(db.yoojin.find({}, {'_id': False}))
    return jsonify({'yoojin':yoojin_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)