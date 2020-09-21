import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FavoritesComponent } from './favorites/favorites.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  { path: "one/:name", component: OneComponent },
  { path: "two", component: TwoComponent },
  { path: "favorites", component: FavoritesComponent },
  // { path: "", pathMatch: "full", redirectTo: "main" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
