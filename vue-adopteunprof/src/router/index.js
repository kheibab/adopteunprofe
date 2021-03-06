import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../components/auth/Register.vue";
import Login from "../components/auth/Login.vue";
import Profile from "../components/auth/Profile.vue";
import Paypal from "../components/Paypal.vue";
import CardCours from "../components/CardCours.vue";
import CrudStudent from "../views/CrudStudent.vue";
import FBregister from "../components/auth/FBregister.vue";
import CrudProfessor from "../views/CrudProfessor.vue";
import CrudAnnonce from "../views/CrudAnnonce.vue";
import ProfSpace from "../components/ProfSpace.vue";
import StudSpace from "../components/StudSpace.vue";
import UserSpace from "../components/UserSpace.vue";
import CrudUser from "../views/CrudUser.vue";
import ListeCours from "../views/ListeCours.vue";
import ListeProfs from "../views/ListeProfs.vue";
import AddAnnonces from "../components/AddAnnonces.vue";
import Chat from "../views/Chat.vue";
import Comments from '../components/Comments.vue'
import LeaveComment from '../components/LeaveComment.vue'
import ProfProfil from '../components/ProfProfil.vue'
import Conditions from '../views/Conditions.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  // =++£

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  
    {
      path: "/conditions",
      name: "Conditions",
      component: Conditions,
    },
    {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/paypal",
    name: "PAYPAL",
    component: Paypal,
  },
  {
    path: "/cardcours",
    name: "CardCours",
    component: CardCours,
  },
  {
    path: "/crudstudent",
    name: "CrudStudent",
    component: CrudStudent,
  },
  {
    path: "/fbregister",
    name: "FBregister",
    component: FBregister,
  },
  {
    path: "/crudprofessor",
    name: "CrudProfessor",
    component: CrudProfessor,
  },
  {
    path: "/crudannonces",
    name: "CrudAnnonce",
    component: CrudAnnonce,
  },
  {
    path: "/personalspace/prof",
    name: "ProfSpace",
    component: ProfSpace,
  },
  {
    path: "/personalspace/stud",
    name: "StudSpace",
    component: StudSpace,
  },
  {
    path: "/personalspace/user",
    name: "UserSpace",
    component: UserSpace,
  },
  {
    path: "/personalspace/prof/addannonces",
    name: "AddAnnonces",
    component: AddAnnonces,
  },
  {
    path: "/crudusers",
    name: "CrudUser",
    component: CrudUser,
  },
  {
    path: "/listecours",
    name: "ListeCours",
    component: ListeCours,
  },
  {
    path: "/listeprofs",
    name: "ListeProfs",
    component: ListeProfs
  },
  {
    path: "/chat",
    name: "chat",
    component: Chat
  },
  {
    path: "/comments",
    name: "Comments",
    component: Comments
  },
  {
    path: "/leavecomment",
    name: "LeaveComment",
    component: LeaveComment
  },
  {
    path: "/profprofil",
    name: "ProfProfil",
    component: ProfProfil,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
