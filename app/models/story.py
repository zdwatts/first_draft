from .db import db
from .user import User

class Story(db.Model):
    __tablename__ = 'stories'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    body = db.Column(db.String, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


    def to_dict(self):
        return {
        "id": self.id,
        "title": self.title,
        "body": self.body,
        "author_id": self.author_id
        }
