from app.models import db, Story, User

def seed_stories():

    demo = Story(title='Title Demo', body='This is a Body Demo', author_id=User.query.filter_by(username='Demo').first().id)

    db.session.add(demo)

    db.session.commit()


def undo_stories():
    db.session.execute('TRUNCATE stories;')
    db.session.commit()
