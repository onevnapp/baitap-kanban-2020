import { Component, Input } from '@angular/core';
import { JobListService } from '../services/job-list.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
})
export class AddNewComponent {
  @Input() placeholder: string;
  @Input() listIndex: number;
  input = '';

  constructor(
    private jobListService: JobListService,
  ) {}

  addNew() {
    // Do not add list or job with no name
    if (this.input.trim()) {
      // Add List
      if (this.listIndex === undefined) {
        this.jobListService.addNewList(this.input);


      }
      // Add job
      else {
        this.jobListService.addNewJob(this.listIndex, this.input);

      }

      this.input = '';
    }
  }
}
