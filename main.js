import {initializeApp} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import {getDatabase, get, ref, child} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDj-8XuDJES-WRcGubdsyAi8A11_IWC39Y",
  authDomain: "vidyalay-c86ac.firebaseapp.com",
  databaseURL: "https://vidyalay-c86ac-default-rtdb.firebaseio.com",
  projectId: "vidyalay-c86ac",
  storageBucket: "vidyalay-c86ac.appspot.com",
  messagingSenderId: "1087024805919",
  appId: "1:1087024805919:web:0322d06cd7164a1b877d2a"
        };


  const app = initializeApp(firebaseConfigg);
  const db = getDatabase();
  const auth = getAuth(app);
  const dbref = ref(db);



  let EmailIn = document.getElementById('emailIn');
  let PassIn = document.getElementById('passwordIn');

  let SmainInp = document.getElementById('SmainInp');

        let SignInUser = evt => {
    evt.preventDefault();

  SignInWithEmailAndPassword(auth, EmailInp.value, PassInp.value)
                .then((credentials) => {
    console.log(credentials);
                })
                .catch((error) => {
    alert(error.massage);
  console.log(error.code);
  console.log(error.massage);
                })
        }
  MainForm.addEventListener('Submit', SignInUser);
