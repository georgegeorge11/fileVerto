import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {ConvertType} from '../../models/convertType.model';
import {ConvertCardComponent} from '../../shared/convert-card/convert-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule, MatGridListModule, ConvertCardComponent, CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public convertTypes: ConvertType[] = [
    {
      convertTypePK: 1,
      name: 'Word to PDF',
      description: 'Convert files to and from PDF format.',
      icon: 'picture_as_pdf',
      route: '/convert-pdf'
    },
    {
      convertTypePK: 4,
      name: 'PowerPoint to PDF',
      description: 'Convert files to and from PDF format.',
      icon: 'picture_as_pdf',
      route: '/convert-pdf'
    },
    {
      convertTypePK: 5,
      name: 'Excel to PDF',
      description: 'Convert files to and from PDF format.',
      icon: 'picture_as_pdf',
      route: '/convert-pdf'
    },
    {
      convertTypePK: 2,
      name: 'Merge Files',
      description: 'Combine multiple files into one.',
      icon: 'call_merge',
      route: '/merge'
    },
    {
      convertTypePK: 3,
      name: 'Convert Word',
      description: 'Convert files to and from PDF format.',
      icon: 'convert_to_text',
      route: '/convert-word'
    },

  ];
}
