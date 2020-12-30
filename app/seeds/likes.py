from app.models import db, Story, User, Like

def seed_likes():
    
    demo = Like(user_id=User.query.filter_by(username='Demo').first().id, vote=1, story_id=Story.query.get(1).id)
    demo1 = Like(user_id=User.query.filter_by(username='saad').first().id, vote=1, story_id=Story.query.get(2).id)
    demo2 = Like(user_id=User.query.filter_by(username='bob').first().id, vote=1, story_id=Story.query.get(2).id)
    
    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.commit()
    
def undo_likes():
    db.session.execute('TRUNCATE likes;')
    db.session.commit()