from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io', password='password')
    saad = User(username='saad', email='saad@saad.com', password='password')
    bob = User(username='bob', email='bob@bob.com', password='password')
    cow = User(username='cow', email='cow@wow.com', password='password')
    zac = User(username="Zac", email="zac@zac.com", password="password")
    ronald = User(username="Ronald", email="ronald@ronald.com", password="password")
    miguel = User(username="Miguel", email="miguel@miguel.com", password="password")
    geralt = User(username="Geralt of Rivia", email="geralt@kaermorhen.com", password="password")
    tanjiro = User(username="Tanjiro", email="tanjiro@demonslayercorps.com", password="password")

    db.session.add(demo)
    db.session.add(saad)
    db.session.add(bob)
    db.session.add(cow)
    db.session.add(zac)
    db.session.add(ronald)
    db.session.add(miguel)
    db.session.add(geralt)
    db.session.add(tanjiro)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
