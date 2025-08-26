from flask import Blueprint,jsonify

user_blueprint = Blueprint('user', __name__)


@user_blueprint.route("/")
def user_home():
    pass