
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  allIspsData: any;
  isps: any;
  rank: any;
  uploads: any;
  subscribers: any;
  views: any;
  channelName: any;
  grade: any;
  video: any;
  constructor(public appService: AppService,
    public router: Router,
    private toastr: ToastrService,
    private modal: NgbModal) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['rank', 'grade', 'channelName', 'uploads',  'views', 'subscribers'];
  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('paginator1') paginator1: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;
  searchKey: string;

  ngOnInit() {

    this.getAllIsps();
  }

  public getAllIsps() {

    this.appService.getAllIsps()
      .subscribe((response) => {
        if (response.status === 200) {
          this.allIspsData = response.data;
          this.listData = new MatTableDataSource(this.allIspsData);
          this.listData.sort = this.sort1;
          this.listData.paginator = this.paginator1;
        } else {
          this.toastr.error(response.message);
        }
      }, (error) => {
        this.toastr.error('something went wrong');
      });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }





}
