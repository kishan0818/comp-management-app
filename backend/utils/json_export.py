import json
from sqlalchemy.orm import Session
from models import Complaint

def export_complaints_to_json(db: Session, output_path="complaints.json"):
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
    with open(output_path, "w") as f:
        json.dump(complaints_list, f, indent=4)