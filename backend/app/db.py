# from supabase import create_client
# import os 
# from dotenv import load_dotenv

# load_dotenv()

# def create_db_client():
#     supabase=create_client(
#         os.getenv("SUPABASE_URL"),
#         os.getenv("SUPABASE_SERVICE_ROLE_KEY")
#         )
#     return supabase
# def create_anon_db_client():
#     supabase=create_client(
#         os.getenv("SUPABASE_URL"),
#         os.getenv("SUPABASE_ANON_KEY")
#         )
#     return supabase