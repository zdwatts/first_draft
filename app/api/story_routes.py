from flask import Blueprint, jsonify
from app.models import Story

story_routes = Blueprint('stories', __name__)

@story_routes.route('/')
def stories():
    stories = Story.query.all()
    return {'stories': [story.to_dict() for story in stories]}
