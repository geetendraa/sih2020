from app import db
import random
import string

def gen_random_int():
  return ''.join(random.SystemRandom().choice(string.ascii_lowercase + string.digits) for _ in range(64))


class User(db.Model):
  id = db.Column(db.String(70), primary_key=True, unique=True, default=gen_random_int)
  first_name = db.Column(db.String(25))
  last_name = db.Column(db.String(25))
  email = db.Column(db.String(64))
  password_hash = db.Column(db.String(128))
  worker_type = db.Column(db.String(20)) # can be either freelancer or government
  salt = db.Column(db.String(60))

  def __repr__(self):
    return 'User: {}'.format(self.email)