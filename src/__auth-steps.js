/*
* 1. create a new firebase project from console.firebase.google.com
* 2. npm install firebase
* 3. create a file 'firebase.init.js', initialize firebase, call getAuth in auth vaiable, pass app to getAuth and export default auth into the file.
* 4. enable a sign in method that you need from authentication>get started>sign in method
* 5. Create login, sign up component, setup route
* 6. attach form feild handler and form submit handler
* 7. npm install --save react-firebase-hooks
* 8. useCreateUserWithEmailAndPassword from react-firebase-hooks
* 9. If user is created redirect to the expected page
* 10. useSignInWithEmailAndPassword for login
* 11. implement signOut(auth) on Sigh Out button to sign out
* 12. create RequiredAuth component > inside it check if user exists and track user's location
* 13. in route, Wrap the component you want to protect with RequiredAuth component
*/


// Firebase hosting steps:
/*
* 1. npm install -g firebase-tools
* 2. firebase login
* 3. firebase init
* 4. npm run build
* 5. firebase deploy
*/