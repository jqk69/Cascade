import os
import jwt 
from functools import wraps
from flask import request, jsonify

JWT_SECRET = os.getenv("SUPABASE_JWT_SECRET")

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        # Extract token from Authorization header
        if "Authorization" in request.headers:
            bearer = request.headers["Authorization"]
            parts = bearer.split()
            if len(parts) == 2 and parts[0] == "Bearer":
                token = parts[1]

        if not token:
            return jsonify({"error": "Token is missing!"}), 401

        try:
            # Decode using PyJWT
            decoded = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
            request.user = decoded  # attach decoded payload to request
        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token has expired"}), 401
        except jwt.InvalidTokenError as e:
            return jsonify({"error": "Invalid token", "details": str(e)}), 401

        return f(*args, **kwargs)

    return decorated
