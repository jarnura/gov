import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DistrictsComponent } from './districts/districts.component';
import { DistrictService} from './districts/districts.service';
import { DistrictSaveComponent } from './district-save/district-save.component';
import { DistrictSaveService } from './district-save/district-save.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BlocksComponent } from './blocks/blocks.component';
import { BlockService } from './blocks/blocks.service';
import { BlockSaveComponent } from './block-save/block-save.component';
import { BlockSaveService } from './block-save/block-save.service';
import { VillagesComponent } from './villages/villages.component';
import { VillageService } from './villages/villages.service';
import { VillageSaveComponent } from './village-save/village-save.component';
import { VillageSaveService } from './village-save/village-save.service';
import { HabitatsComponent } from './habitats/habitats.component';
import { HabitatService } from './habitats/habitats.service';
import { HabitatSaveComponent } from './habitat-save/habitat-save.component';
import { HabitatSaveService } from './habitat-save/habitat-save.service';
import { PlansComponent } from './plans/plans.component';
import { PlanService } from './plans/plans.service';
import { PlanSaveComponent } from './plan-save/plan-save.component';
import { PlanSaveService } from './plan-save/plan-save.service';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LikeDislikeComponent } from './home/like_dislike.component';

const appRoutes: Routes = [
    { path: 'district', component: DistrictSaveComponent },
    { path: 'block', component: BlockSaveComponent },
    { path: 'village', component: VillageSaveComponent },
    { path: 'habitat', component: HabitatSaveComponent },
    { path: 'plan', component: PlanSaveComponent },
    { path: 'home', component: HomeComponent },
    { path: 'app', component: AppComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    DistrictsComponent,
    DistrictSaveComponent,
    BlocksComponent,
    BlockSaveComponent,
    VillagesComponent,
    VillageSaveComponent,
    HabitatsComponent,
    HabitatSaveComponent,
    PlansComponent,
    PlanSaveComponent,
    HomeComponent,
    LikeDislikeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
      DistrictService,
      DistrictSaveService,
      BlockService,
      BlockSaveService,
      VillageService,
      VillageSaveService,
      HabitatService,
      HabitatSaveService,
      PlanService,
      PlanSaveService,
      HomeService
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
