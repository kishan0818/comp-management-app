from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Complaint
import json

admin_router = APIRouter()

async def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@admin_router.get("/export-json")
def export_complaints_to_json(db: Session = Depends(get_db)):
    complaints = db.query(Complaint).all()
    complaints_list = [
        {
            "id": c.id,
            "description": c.description,
            "category": c.category,
            "status": c.status,
            "image_path": c.image_path,
            "video_path": c.video_path,
            "audio_path": c.audio_path,
            "created_at": c.created_at.isoformat(),
        }
        for c in complaints
    ]
    with open("complaints.json", "w") as f:
        json.dump(complaints_list, f, indent=4)
    return {"message": "Complaints exported to JSON"}
