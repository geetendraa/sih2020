from app import app, db
from flask import render_template, send_from_directory, jsonify, request
from .models import User
import random
import string
import bcrypt

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
  return render_template('index.html')

# @app.route('/js/<path:path>')
# def send_js(path): return send_from_directory('js', path)

  
@app.route('/api/ajax', methods=['GET','POST'])
def ajax():
  return jsonify({ 'res': 'success!!' })

""" Signup  """
@app.route('/api/users', methods=['POST'])
def users():
  data = request.get_json()
  print(db.session.query(User).filter_by(email=data['email']).first())
  if (db.session.query(User).filter_by(email=data['email']).first() is not None):
    return jsonify({ 'emailError': 'true' })

  else:
    # generate random string for user id
    print('user exists already')
    password = data['password'].encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password, salt)
    worker_type = ''
    # print(db.session.query(User).filter_by(email='anc.shukla@gmail.com').first())
    if data['worker_type'] == '0':
      worker_type = 'freelancer'
    else:
      worker_type = 'government'
    
    user = User(first_name=data['first_name'], last_name=data['last_name'], email=data['email'], password_hash=hashed_password, worker_type=worker_type, salt=salt )
    
    db.session.add(user)
    db.session.commit()

    return jsonify({'abc': 'xyz'})


""" login """
@app.route('/api/login', methods=['post'])
def login():
  login_details = request.get_json()
  print(login_details)
  if db.session.query(User).filter_by(email=login_details['email']).first() is not None:
    user = db.session.query.filter_by(email=login_details['email'])
    # user_salt = user['password']
    print(user)
    # print(user_salt)
    password_hash = bcrypt.hashpw(data['password'].encode('utf-8'), user_salt)
    if password_hash == user['password_hash']:
      return jsonify({ 'logged_in': 'true', 'email': user['email']})
    else:
      return jsonify({ 'error': 'Invalid email/password'})
  
  else:
    return jsonify({ 'error': 'Invalid email/password' })