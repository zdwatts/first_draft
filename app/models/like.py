from .db import db
from app.models import Story, User

class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    story_id = db.Column(db.Integer, db.ForeignKey('stories.id'), nullable=False)
    vote = db.Column(db.Integer)
    
    story = db.relationship('Story', back_populates='likes')

    def to_dict(self):
        return {
            "story_id": self.story_id,
            "user_id": self.user_id,
            "vote": self.vote,
            "story_title": self.story.title
        }