from flask import Blueprint,jsonify

admin_blueprint = Blueprint('admin', __name__)

@admin_blueprint.route("/")
def admin_home():
    return "Admin Home is here"