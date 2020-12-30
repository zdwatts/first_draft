from flask import Blueprint, jsonify, request
from app.models import Story, User, Comment
from app.models import db


story_routes = Blueprint('stories', __name__)

@story_routes.route('/')
def stories():
    stories = Story.query.all()
    return {'stories': [story.to_dict() for story in stories]}


@story_routes.route('/<int:id>')
def one_story(id):
    story = Story.query.filter(Story.id == id)
    author = User.query.join(Story, User.id == Story.author_id).filter(Story.id == id)
    comments = Comment.query.join(Story, Comment.story_id == Story.id ).filter(Story.id == id)
    return {'author': [s.to_dict() for s in author],
            'story': [s.to_dict() for s in story],
            'comments': [comment.to_dict() for comment in comments]}


@story_routes.route('', methods=['POST'])
def add_story():
    title = request.json['title']
    body = request.json['body']
    author_id = User.query.filter_by(username = request.json['author']).first().id
    
    new_story = Story(title, body, author_id)
    
    db.session.add(new_story)
    db.session.commit()
    
    return {"id": new_story.id}


@story_routes.route('/user/<int:id>')
def user_stories():
    stories_by_user = Story.query.all()
    return {'stories': [story.to_dict() for story in stories_by_user]}