import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { TablesComponent } from './pages/tables/tables.component';
export const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent

    },
    {
        path: 'boards',
        component: BoardsComponent
    },
    {
        path: 'board',
        component: BoardComponent
    },
    {
        path: 'scroll',
        component: ScrollComponent
    },
    {
        path: 'table',
        component: TablesComponent
    },
]
    
