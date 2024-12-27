from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.complaint_routes import complaint_router
from routes.admin_routes import admin_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(complaint_router, prefix="/complaints")
app.include_router(admin_router, prefix="/admin")

@app.get("/")
def read_root():
    return {"message": "Complaint Management System API"}