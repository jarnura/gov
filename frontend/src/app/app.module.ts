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

const appRoutes: Routes = [
    { path: 'district', component: DistrictSaveComponent },
    { path: 'block', component: BlockSaveComponent },
    { path: 'village', component: VillageSaveComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    DistrictsComponent,
    DistrictSaveComponent,
    BlocksComponent,
    BlockSaveComponent,
    VillagesComponent,
    VillageSaveComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      DistrictService,
      DistrictSaveService,
      BlockService,
      BlockSaveService,
      VillageService,
      VillageSaveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
