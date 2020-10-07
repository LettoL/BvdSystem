import React from 'react';
import {useStore} from "effector-react";
import {$user} from './features/session/model';
import {UserRole} from "./data/auth/types";
import {AdminHomePage} from "./pages/admin/home.page";
import {AuthPage} from "./pages/auth.page";

function App() {
  const user = useStore($user)

  if(user && user.role === UserRole.Admin) return <AdminHomePage/>

  return <AuthPage/>
}

export default App;
