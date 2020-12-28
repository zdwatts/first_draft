from app.models import db, Story

def seed_stories():

    demo = Story(title='Title Demo', body='This is a Body Demo', author_id=1)

    db.session.add(demo)

    db.session.commit()


def undo_stories():
    db.session.execute('TRUNCATE stories;')
    db.session.commit()
