from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import mysql.connector
import os

app = Flask(__name__)
CORS(app)  # Allow your separate HTML file to access Flask API

# MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",           
    password="root",  
    database="formdb"      
)
cursor = db.cursor()

# Create table if not exists
cursor.execute("""
CREATE TABLE IF NOT EXISTS form_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT
)
""")
db.commit()

# Serve HTML file (optional)
@app.route('/')
def serve_html():
    return send_from_directory(os.getcwd(), "portfolio.html")  # serve your form.html

# Handle form submission
@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    cursor.execute(
        "INSERT INTO form_data (name, email, message) VALUES (%s, %s, %s)",
        (name, email, message)
    )
    db.commit()
    return jsonify({"status": "success", "message": "Form submitted successfully!"})

# Fetch all submitted data
@app.route('/fetch', methods=['GET'])
def fetch_data():
    cursor.execute("SELECT * FROM form_data")
    rows = cursor.fetchall()
    return jsonify(rows)

if __name__ == '__main__':
    app.run(debug=True, port=8000)
