import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { LoginComponent } from "./login/login.component"
import { ReservationComponent } from "./reservation/reservation.component"
const routes: Routes = [
    { path: "", component: HomeComponent },
    {path: "login" ,component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'reservation',component:ReservationComponent}
    
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
    
})
export class AppRoutingModule { }