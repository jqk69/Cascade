from flask import Blueprint, request, jsonify

auth_blueprint = Blueprint("auth", __name__)
@auth_blueprint.route("/signup", methods=["POST"])
def signup():
    pass

@auth_blueprint.route("/login", methods=["POST"])
def login():
    pass

@auth_blueprint.route("/home",methods=["GET"])
def home():
    return jsonify({"message":"Welcome to the Auth Home Page"})