from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    ip_address = data.get('ipAddress')
    password = data.get('password')
    
    # Prüfen der Zugangsdaten (Beispiel)
    if ip_address == "127.0.0.1" and password == "passwort123":
        return jsonify({"message": "Login erfolgreich"}), 200
    else:
        return jsonify({"message": "Login fehlgeschlagen"}), 401

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    option = request.form['option']

    # Datei speichern oder verarbeiten
    file.save(f"./uploads/{file.filename}")
    
    return jsonify({"message": f"Datei {file.filename} mit Option {option} hochgeladen"}), 200

if __name__ == '__main__':
    app.run(debug=True)
