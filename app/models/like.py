from .db import db
from app.models import Story, User

class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    story_id = db.Column(db.Integer, db.ForeignKey('stories.id'), nullable=False)
    count = db.Column(db.Integer)
    
    story = db.relationship('Story', back_populates='likes')
    
    def __init__(self, user_id, story_id, count):
        self.user_id = user_id
        self.story_id = story_id
        self.count = count

    def to_dict(self):
        return {
            "story_id": self.story_id,
            "user_id": self.user_id,
            "vote": self.count,
            # "story_title": self.story.title
        }