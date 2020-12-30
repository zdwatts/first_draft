from app.models import db, Story, User, Comment

def seed_comments():
    
    demo = Comment(user_id=User.query.filter_by(username='Demo').first().id, comment='This is the first comment to some super cool story', story_id=Story.query.get(1).id)
    
    demo2 = Comment(user_id=User.query.filter_by(username='saad').first().id, comment='This is the first comment to some super cool story', story_id=Story.query.get(3).id)
    
    db.session.add(demo)
    db.session.add(demo2)
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments;')
    db.session.commit()