import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(privite afsAuth: AngularFireAuth) { }

  ngOnInit() {
  }

signIn = (email, password) => 
  firebase.auth().signInWithEmailAndPassword(email, password)

export const createProfile = (email, name) =>
  firebase.firestore().collection('user').add({
    email: email,
    name: name
  })

// export const editProfile = (email, name) => 
//   firebase.firestore().collection('user').doc(email).update({
//     name:  name
//   });

export const confirmUniqueProfile = (emailInput, name) =>
  firebase.firestore().collection('user').where('email', '==', emailInput).get()
    .then ((querySnapshot) =>{
      querySnapshot.forEach((doc) => {
        const emailDB = doc.data().email;
        if (emailDB !== emailInput) return createProfile(emailInput, name);
        else return undefined;
      })
    })
    .catch(() =>{ });

export const authenticationGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => confirmUniqueProfile(result.user.email, result.user.displayName))
    .catch(() => { });
};

export const authenticationFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => confirmUniqueProfile(result.user.email, result.user.displayName))
    .catch(() => { });
};

export const userData = () => {
  const user = firebase.auth().currentUser
  if (user != null) return user.email;
  else return undefined;
};

export const addPublish = (email, textNewPublish, security) => 
  firebase.firestore().collection('posts').add({
    email: email,
    post: textNewPublish,
    countLikes: 0,
    security: security
  })

export const getPublish = (callback) =>
  firebase.firestore().collection('posts')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
  }); 


export const editPublish = (idPost, textEditPost) => 
  firebase.firestore().collection('posts').doc(idPost).update({
    post:  textEditPost
  });
  
export const deletePublish = (idPost) => 
  firebase.firestore().collection('posts').doc(idPost).delete()  

export const signOut = () => {
  return firebase.auth().signOut()
    .catch(() => {})
};
 
// Función para traer todos los documentos de la colección user
export const getProfile = (callback) =>
  firebase.firestore().collection('user')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
    }); 

export const increaseLikes = (idPost) => {
  const firebaseCollection = firebase.firestore().collection("posts").doc(idPost);
  return firebaseCollection.get()
    .then((result) => {
      if (result.exists) return result.data().countLikes;      
    })
    .then((result) => {
      firebaseCollection.update({
        countLikes: result + 1
      })
    })
};

export const securityPost = (type, callback) =>
 firebase.firestore().collection('posts')
 .where('security', '==', type)
 .onSnapshot((querySnapshot) => {
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() })
  });
  callback(data);
}); 
}
