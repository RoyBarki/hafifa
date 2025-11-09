from flask import Flask, jsonify
from flask_cors import CORS
import random
app = Flask(__name__)
CORS(app)  # <-- allow requests from React (port 3000)

@app.route("/random")
def random_color():
    color = random.choice(["blue", "red"])
    print(color)
    return jsonify({"color": color})

if __name__ == "__main__":
    app.run(debug=True)