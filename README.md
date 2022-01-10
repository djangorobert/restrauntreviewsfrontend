Technologys used:
1.)React JS
2.)Node JS
3.)Heroku Cloud PlatForm(Paas)
4.)Heroku CLI



React JS was used to consume from a Django Rest API. Since React is a popular Javascript Framework I utilized it to consume from my Python Django Rest Backend.
To allow for the two Technologys to work together I used a Popular Package on the backend side called Django Cors Headers to allow both Servers to be able to communicate.
If you are Interested in looking at the Backend Side take a look at my other Repository that contains the Django Rest Framework backend called (restrauntreviewapi).
Feel free to go look at the Backend Django Rest API here:https://www.uateit.com/

I currently have this Frontend SPA site live at: https://restrauntapi.herokuapp.com/
Feel free to go look.I am using Heroku Cloud Platform (Paas).
To use Heroku Clout Platform you can use there Heroku CLI you can download it with Windows or Apple the command with npm is: npm install -g heroku.
To verify you installed it do this: heroku --version
Then can login to your account with this command: heroku login

#Here is a Look at the React Side Landing Page. Here we can see Data being pulled from the Django Rest API and being Displayed. It gives us all Restraunt Reviews by a User.
![Alt text](reactfrontend.JPG?raw=true)
