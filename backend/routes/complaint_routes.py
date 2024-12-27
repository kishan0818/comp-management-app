from fastapi import APIRouter, Depends, File, UploadFile
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Complaint
import shutil
import os
import uuid

complaint_router = APIRouter()

async def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

if not os.path.exists("uploads"):
    os.makedirs("uploads")

@complaint_router.post("/submit")
def submit_complaint(
    description: str,
    category: str,
    image: UploadFile = None,
    video: UploadFile = None,
    audio: UploadFile = None,
    db: Session = Depends(get_db),
):
    image_path, video_path, audio_path = None, None, None

    if image:
        image_filename = f"{uuid.uuid4().hex}_{image.filename}"
        image_path = f"uploads/{image_filename}"
        with open(image_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

    if video:
        video_filename = f"{uuid.uuid4().hex}_{video.filename}"
        video_path = f"uploads/{video_filename}"
        with open(video_path, "wb") as buffer:
            shutil.copyfileobj(video.file, buffer)

    if audio:
        audio_filename = f"{uuid.uuid4().hex}_{audio.filename}"
        audio_path = f"uploads/{audio_filename}"
        with open(audio_path, "wb") as buffer:
            shutil.copyfileobj(audio.file, buffer)

    complaint = Complaint(
        description=description,
        category=category,
        image_path=image_path,
        video_path=video_path,
        audio_path=audio_path,
    )

    try:
        db.add(complaint)
        db.commit()
        db.refresh(complaint)
        return {"message": "Complaint submitted successfully", "id": complaint.id}
    except Exception as e:
        db.rollback()
        return {"message": f"Error: {str(e)}"}