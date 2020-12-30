from app.api.story_routes import stories
from flask import Blueprint, jsonify
from app.models import User, Story

user_stories = Blueprint('user', __name__)

@user_stories.route('/<int:id>')
def one_user(id):
    user = User.query.get(id)
    stories = Story.query.join(User, Story.author_id == User.id).filter(User.id == id)
    return {'author': user.to_dict(), 
            'stories': [story.to_dict() for story in stories]
            }