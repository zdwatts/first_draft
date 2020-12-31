from .db import db
from .user import User

class Story(db.Model):
    __tablename__ = 'stories'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    body = db.Column(db.String, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    likes = db.relationship('Like', back_populates='story')
    story = db.relationship('User', back_populates='authors')
    
    def __init__(self, title, body, author_id):
        self.title = title
        self.body = body
        self.author_id = author_id

    def to_dict(self):
        return {
        "id": self.id,
        "title": self.title,
        "body": self.body,
        "author_id": self.author_id,
        "author_name": self.story.username
        }
