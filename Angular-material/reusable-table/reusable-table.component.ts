import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: "app-reusable-table",
  templateUrl: "./reusable-table.component.html",
  styleUrls: ["./reusable-table.component.css"]
})
export class ReusableTableComponent implements OnInit, OnChanges {
  @Input()
  displayedColumns$;

  @Input()
  dataSource$;

  displayedColumns: string[];
  dataSource;
  pageList;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    //this.initializeDataTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initializeDataTable();
  }

  initializeDataTable() {
    this.displayedColumns = this.displayedColumns$;
    this.dataSource = new MatTableDataSource(this.dataSource$);

    this.pageList = [];
    for (var i = 1; i < this.dataSource$.length / 5 + 1; i++) {
      this.pageList.push(i * 5);
    }

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
