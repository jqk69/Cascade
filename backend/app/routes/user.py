from flask import Blueprint, jsonify, request
from app.utils.verify_token import token_required

user_blueprint = Blueprint("user", __name__)

@user_blueprint.route("/profile", methods=["GET"])
def profile():
    user = request.user  # comes from verify_token.py
    return jsonify({
        "message": "This is your profile",
        "user": user
    })
