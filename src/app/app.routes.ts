import { AppComponent }    from './app.component';  
import { Routes, RouterModule } from '@angular/router';  
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { TeamComponent } from '../team/team.component';
import { WorkComponent } from '../work/work.component';
import { ServicesComponent } from '../services/services.component';
import { ProjectComponent } from '../project/project.component';
import { GraphicsComponent } from '../work/graphics.component';
import { VideoComponent } from '../work/video.component';
import { MotionComponent } from '../work/motion.component';

  
export const appRoutes: Routes = [  
  { path: 'home', component: HomeComponent},
   { 
    path: '',  
    redirectTo: '/home',  
    pathMatch: 'full'
   },
   { 
     path: 'team', component: TeamComponent
   },
   {
     path: 'work', component: WorkComponent
   },
   {
    path: 'services', component: ServicesComponent
   },
   {
     path: 'project', component: ProjectComponent
   },
   {
     path: 'work/graphic-design', component: GraphicsComponent
   },
   {
     path: 'work/video-showreel', component: VideoComponent
   },
   {
     path: 'work/motion-graphics-3d', component: MotionComponent
   }   
]; 


export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); 