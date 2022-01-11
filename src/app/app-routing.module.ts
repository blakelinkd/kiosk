import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { InfoEditComponent } from './info/info-edit/info-edit.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductsEditComponent } from './products/products-edit/products-edit.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'info-edit', component: InfoEditComponent },
    { path: 'products-edit', component: ProductsEditComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {}