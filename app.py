from flask import Flask , render_template , request
'''from flask_sqlalchemy import SQLAlchemy
from datetime import datetime'''
app = Flask(__name__)
'''app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/flask'
db = SQLAlchemy(app)'''


'''class Contact(db.Model):
        __tablename__ = 'contact'
        id = db.Column(db.Integer, primary_key = True)
        name = db.Column(db.String(80), nullable=False)
        phone = db.Column(db.String(12), nullable=False)
        msg = db.Column(db.String(120), nullable=False)
        #date = db.Column(db.String(12), nullable=True)
        email = db.Column(db.String(20), nullable=False)'''

@app.route("/")
def hello():
    return render_template('index.html')
'''@app.route("/about.html")
def about():
    return render_template('about.html')
@app.route("/contact.html", methods = ['GET', 'POST'])
def contacts():
    if(request.method=='POST'):
        #Add entry to the database
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        msg = request.form.get('msg')
        entry = Contact(name=name, phone = phone, msg = msg, email = email )
        db.session.add(entry)
        db.session.commit()
    return render_template('contact.html')'''

app.run(debug = True)