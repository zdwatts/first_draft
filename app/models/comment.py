from .db import db
from app.models import Story, User

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    story_id = db.Column(db.Integer, db.ForeignKey('stories.id'), nullable=False)
    comment = db.Column(db.Text, nullable=False)
    
    def __init__(self, user_id, story_id, comment):
        self.user_id = user_id
        self.comment = comment
        self.story_id = story_id
        
    def to_dict(self):
        return {
            "story_id": self.story_id,
            "user_id": self.user_id,
            "comment": self.comment,
        }