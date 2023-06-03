import { Component, Input } from '@angular/core';
import { comment } from '../overview.interface';
import { comments } from 'src/app/sampleData';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
@Input() comments : comment[] = comments;

}
