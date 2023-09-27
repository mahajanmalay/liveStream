from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

overlays = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/overlays', methods=['GET'])
def get_overlays():
    return jsonify(overlays)

@app.route('/api/overlays', methods=['POST'])
def create_overlay():
    data = request.json
    overlays.append(data)
    return jsonify(data)

@app.route('/api/overlays/<int:id>', methods=['PUT'])
def update_overlay(id):
    data = request.json
    overlays[id] = data
    return jsonify(data)

@app.route('/api/overlays/<int:id>', methods=['DELETE'])
def delete_overlay(id):
    del overlays[id]
    return jsonify({"message": "Overlay deleted"})

if __name__ == '__main__':
    app.run(debug=True)
