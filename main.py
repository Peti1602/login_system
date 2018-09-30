import hash
import sql_query

from flask import Flask, render_template, request


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/registration', methods=['POST'])
def registration():
    email = request.json['Email']
    hash_code = hash.hash_password(request.json['Password'])
    first_name = request.json['FirstName']
    last_name = request.json['LastName']
    try:
        sql_query.sql_add_new_user(email, hash_code, first_name, last_name)
        return "fine"
    except KeyError:
        return "false"


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
