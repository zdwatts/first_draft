from .db import db
from app.models import Story, User

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    story_id = db.Column(db.Integer, db.ForeignKey('stories.id'))
    comment = db.Column(db.Text, nullable=False)
    
    user = db.relationship('User', back_populates='comments')
    story = db.relationship('Story', back_populates='comments', )
    
    def __init__(self, user_id, story_id, comment):
        self.user_id = user_id
        self.comment = comment
        self.story_id = story_id
        
    def to_dict(self):
        return {
            "story_id": self.story_id,
            "user_id": self.user_id,
            "comment": self.comment,
            "user": self.user.username
        }