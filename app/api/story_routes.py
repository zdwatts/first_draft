from flask import Blueprint, jsonify, request
from app.models import Story, User, Comment, Like
from app.models import db


story_routes = Blueprint('stories', __name__)

# Get all the story route
@story_routes.route('/')
def stories():
    stories = Story.query.all()
    return {'stories': [story.to_dict() for story in stories]}

# Get one story route with author and associated comments
@story_routes.route('/<int:id>')
def one_story(id):
    story = Story.query.get(id)
    author = User.query.join(Story, User.id == Story.author_id).filter(Story.id == id)
    comments = Comment.query.join(Story, Comment.story_id == Story.id ).filter(Story.id == id)
    count_likes = sum([like.count for like in story.likes])
    
    return {
            'author': [s.to_dict() for s in author],
            "story" : [story.to_dict()],
            'comments': [comment.to_dict() for comment in comments],
            "total_likes": count_likes
            }

# Post a story route
@story_routes.route('', methods=['POST'])
def add_story():
    title = request.json['title']
    body = request.json['body']
    author_id = User.query.filter_by(username = request.json['author']).first().id
    
    new_story = Story(title, body, author_id)
    
    db.session.add(new_story)
    db.session.commit()
    
    return {"id": new_story.id}


# Get all the stories written by a single user
@story_routes.route('/user/<int:id>')
def user_stories():
    stories_by_user = Story.query.all()
    return {'stories': [story.to_dict() for story in stories_by_user]}


# Post a comment Route
@story_routes.route('/<int:id>/comment', methods=['POST'])
def post_comment(id):
    story_id = Story.query.get(id).id
    user_id = User.query.filter_by(username = request.json['author']).first().id
    comment = request.json['comment']
    
    new_comment = Comment(user_id, story_id, comment)
    db.session.add(new_comment)
    db.session.commit()

    return new_comment.to_dict()

# Post a like
@story_routes.route('/<int:id>/like', methods=['POST'])
def post_like(id):
    story_id = Story.query.get(id).id
    user_id = User.query.filter_by(username = request.json['user']).first().id
    like = Like.query.filter(Like.story_id == id).filter(Like.user_id == user_id).first()
    # count = 1
    if like:
        like.count = like.count + 1
        db.session.add(like)
        db.session.commit()
        return like.to_dict()
    else:
        new_like = Like(user_id, story_id, count=1)
        db.session.add(new_like)
        db.session.commit()
        return new_like.to_dict()
