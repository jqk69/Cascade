from flask import Flask
from  .routes.user import user_blueprint
from  .routes.admin import admin_blueprint
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app,origins="*",supports_credentials=True)

    app.register_blueprint(user_blueprint, url_prefix='/user')
    app.register_blueprint(admin_blueprint, url_prefix='/admin')

    return app