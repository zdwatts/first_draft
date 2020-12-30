from app.models import db, Story, User

def seed_stories():

    demo = Story(title='Title Demo', body='This is a Body Demo', author_id=User.query.filter_by(username='Demo').first().id)
    demo2 = Story(title="This is Bob's story", body="This story is awesome", author_id=User.query.filter_by(username='bob').first().id)
    demo3 = Story(title='Who wrote this one?', body='This story is written by no one', author_id=User.query.filter_by(username='saad').first().id)

    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)

    db.session.commit()


def undo_stories():
    db.session.execute('TRUNCATE stories;')
    db.session.commit()
