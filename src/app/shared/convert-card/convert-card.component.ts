import {Component, inject, Input} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import { MatIconModule} from '@angular/material/icon';
import {ConvertType} from '../../models/convertType.model';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-convert-card',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './convert-card.component.html',
  styleUrl: './convert-card.component.scss'
})
export class ConvertCardComponent {
  @Input() convertType!: ConvertType;
  router = inject(Router);

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
