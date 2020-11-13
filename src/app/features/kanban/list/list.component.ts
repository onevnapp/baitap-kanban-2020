import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmDeleteComponent } from '../../../shared/dialog-confirm-delete/dialog-confirm-delete.component';
import { JobListService } from '../services/job-list.service';

export class JobList {
  name: string;
  jobs: string[];
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  jobLists: JobList[];

  constructor(
    private jobListService: JobListService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.jobLists = this.jobListService.getJobLists();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.jobListService.updateLocalStorage();
  }

  deleteJob(jobIndex: number, listIndex: number) {
    const dialogRef = this.dialog.open(DialogConfirmDeleteComponent, {
      width: '500px',
      data: { name: 'job' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobListService.deleteJob(listIndex, jobIndex);
      }
    });
  }

  deleteList(listIndex: number) {
    const dialogRef = this.dialog.open(DialogConfirmDeleteComponent, {
      width: '500px',
      data: { name: 'list' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobListService.deleteList(listIndex);
      }
    });
  }
}
