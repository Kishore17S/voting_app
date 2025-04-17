from flask import Flask, render_template, request
import requests

app = Flask(__name__)

# filepath: /Users/kishoresankar/Desktop/voting_app/frontend/app.py
BACKEND_URL = "http://127.0.0.1:3000/api/votes"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/vote', methods=['POST'])
def vote():
    cricketer = request.form['cricketer']
    requests.post(BACKEND_URL, json={"cricketer": cricketer})
    return "Vote cast successfully!"

@app.route('/results')
def results():
    response = requests.get(f"{BACKEND_URL}/results")
    return response.json()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)