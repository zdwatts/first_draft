<h1 align="center">
  <img src="react-app/src/components/images/Screenshot 2021-02-03 173423.jpg" alt="firstdraftlogo" width="300">
  <br>
  Documentation
</h1>
<h1 align="center">
  <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="js-logo" width="50">
  <img src="https://miro.medium.com/max/1400/1*Q5EUk28Xc3iCDoMSkrd1_w.png" alt="pug-logo" width="50">
  <img src="https://i.ibb.co/VpGfh8w/icons8-postgresql-96-1.png" alt="psql-logo" width="50">
  <img src="https://hakin9.org/wp-content/uploads/2019/08/connect-a-flask-app-to-a-mysql-database-with-sqlalchemy-and-pymysql.jpg" alt="psql-logo" width="50">
</h1>

<h1 align="center">
  Overview
</h1>
<h4>
first_draft is a web app that allows user to create an account to create stories and share their thoughts.
</h4>

---

<h1 align="center" >
 <img src="react-app/src/components/images/Screen Shot 2020-12-31 at 1.13.58 PM.png" alt="firstdraft-home">
</h1>

<h4 align="center">'first_draft' is a web app inspired by 'Medium' that allows users to share thoughts, stories, and experience. A logged in users have the ability to create stories, giving comments, likes, & follows.
<pFirst_draft is built with React, Flask, Python and PostgreSQL, SQLAlchemy/></h4>

---

<h1>Database Schema</h1>

 <img src="react-app/src/components/images/database-schema.png" alt="firstdraftlogo">

---

<h1>Features</h1>

<h3 align='left'>

- Login
- Story
- Comment
- Like
- Follow

</h3>

---

<h3>Follow</h3>

```py

```

---

<h1>Endpoint Screenshots</h1>

<h3 align='left'>'/'</h3>

<img src="react-app/src/components/images/Screenshot 2020-12-31 190326.jpg" alt="home">

---

<h3>Login</h3>
<h3 align='left'>'/login'</h3>

<img src="react-app/src/components/images/Screenshot 2020-12-31 192059.jpg" alt="home">

<h4 align='left'>

```py

@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    print(request.get_json())
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


```

---

<h3 align='left'>'/signup'</h3>

<img src="react-app/src/components/images/Screenshot 2020-12-31 192120.jpg" alt="home">

---

<h3>Story</h3>
<h3 align='left'>'/stories'</h3>

<img src="react-app/src/components/images/Screenshot 2020-12-31 151046.jpg" alt="home">

<h4 align='left'>

```js
useEffect(() => {
  document.title = "first_draft: Story";
  (async () => {
    const data = await axios.get(`/api/stories/${id}`);
    data.data.story.length > 0 && setStory(data.data.story[0]);
    data.data.story.length > 0 && setAuthor(data.data.author[0].username);
    data.data.comments.length > 0 && setComments(data.data.comments);

    const response = await authenticate();
    const loggedUser = response.username;
    setCurrentUser(loggedUser);
    setTotalLikes(data.data.total_likes);
  })();
}, [authenticate, id]);
```

---

<h3 align='left'>'/stories/<:id>'</h3>

<img src="react-app/src/components/images/Screenshot 2020-12-31 151709.jpg" alt="home">

---

<h3>Comment</h3>
<h3 align='left'>'/stories/<:id>' for comments toggle</h3>

<img src="react-app/src/components/images/Screenshot 2020-12-31 151401.jpg" alt="home">

<h4 align='left'>

```js

function Comment({ storyId, setComments, currentUser }) {
	const [comment, setComment] = useState("");
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setComment("");

		const response = await fetch(`/api/stories/${storyId}/comment`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				comment,
				author: currentUser,
			}),
		});
		if (response.ok) {
			const data = await response.json();
			const storyId = data.story_id;
			history.push(`/stories/${storyId}`);
		}
		const data = await axios.get(`/api/stories/${storyId}`);
		const newComments = data.data.comments;
		newComments.length > 0 && setComments(newComments);
	};

```

---

<h3>Like</h3>

<h4 align='left'>

```py

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

```

---

<h3 align='left'>'/users'</h3>

<img src="react-app/src/components/images/Screenshot 2020-12-31 151447.jpg" alt="home">

---

<h3 align='left'>'/users/<:id>'</h3>

<img src="react-app/src/components/images/Screenshot 2020-12-31 192746.jpg" alt="home">

---

---

<h3 align='left'>'/' for most recent stories</h3>

<img src="react-app/src/components/images/Screenshot 2020-12-31 192920.jpg" alt="home">

---

# Flask React Project

This is the backend for the Flask React project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

---

_IMPORTANT!_
If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
You can do this by running:

```bash
pipenv lock -r > requirements.txt
```

_ALSO IMPORTANT!_
psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.

---

## Deploy to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run

   ```bash
   heroku login
   ```

5. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
7. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry

   ```bash
   heroku container:push web -a my-firstdraft
   ```

8. Release your docker container to heroku

   ```bash
   heroku container:release web -a my-firstdraft
   ```

9. set up your database:

   ```bash
   heroku run -a my-firstdraft flask db upgrade
   heroku run -a my-firstdraft flask seed all
   ```

10. Under Settings find "Config Vars" and add any additional/secret .env variables.

11. profit
