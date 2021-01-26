from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello():

    return render_template("index.html")

@app.route("/getapi", methods=['GET', 'POST'])
def get_api():

    if request.method == "GET":
        print(request.form)
        name = request.args.get("username")
        age = request.args.get("age")
        sex = request.args.get("sex")

        str = {
            "name": name,
            "age": age,
            "sex": sex
        }
        print(str)
        return jsonify({"data": str})

@app.route("/postapi", methods=['GET', 'POST'])
def post_api():

    if request.method == "POST":
        print(request.form)
        name = request.form["username"]
        age = request.form["age"]
        sex = request.form["sex"]

        str = {
            "name": name,
            "age": age,
            "sex": sex
        }
        print(str)
        return jsonify({"data": str})

if __name__ == '__main__':
    app.run(debug=True)