from flask import Blueprint, jsonify
from app.models import Story, User

story_routes = Blueprint('stories', __name__)

@story_routes.route('/')
def stories():
    stories = Story.query.all()
    return {'stories': [story.to_dict() for story in stories]}

@story_routes.route('/<id>')
def one_story(id):
    story = Story.query.filter_by(author_id = id)
    author = User.query.join(Story).filter(Story.author_id == id).all()
    return {'author': [s.to_dict() for s in author], 'story': [s.to_dict() for s in story]}