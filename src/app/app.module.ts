import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PostRequestComponent } from './post-request/post-request.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponentComponent } from './popup-component/popup-component.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MyPostComponent } from './myPost/myPost.component';
import { DonatorDetailComponent } from './donator-detail/donator-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    PostRequestComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponentComponent,
    MyPostComponent,
    PopupComponentComponent,
    DonatorDetailComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule ,
    RouterModule,
    ReactiveFormsModule,NgbModule,
    FormsModule,MatSelectModule,MatNativeDateModule,HttpClientModule,
    MatStepperModule, MatButtonModule,MatDatepickerModule,MatSlideToggleModule,MatTooltipModule
  ],
  entryComponents: [PopupComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
