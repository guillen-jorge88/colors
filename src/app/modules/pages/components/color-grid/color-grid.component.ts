import { Component, OnInit } from '@angular/core';
import { Tile } from '../../interfaces/tile';
import { ColorsService } from '../../sevices/colors.service';
import { ClipboardService } from 'ngx-clipboard';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-color-grid',
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.scss']
})
export class ColorGridComponent implements OnInit {
  tiles: Tile[] = [];
  pagination:any = {};
  constructor(
    private colorServices: ColorsService,
    private _clipboardService: ClipboardService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getColorsList();
  }

  getColorsList(page:number = 1){
    this.colorServices.getColors(page).subscribe((colors:any)=>{
      this.pagination = {
        length: colors.total,
        pageSize: colors.per_page,
        pageSizeOptions: [6],
        pageIndex: colors.page -1
      };
      colors.data.forEach((color:any) => {
        let item = {
          color:color.color,
          year: color.year,
          name: color.name,
          pantone_value: color.pantone_value,
          cols: 1,
          rows: 1
        }
        this.tiles.push(item);
      });
    });
  }

  page(event:any){
    let page = event.pageIndex + 1;
    this.tiles = [];
    this.getColorsList(page);
    console.log(event)
  }

  copied(obj:any){
    console.log(obj);
    let objtxt = JSON.stringify(obj);
    this._clipboardService.copyFromContent(objtxt);
    this._snackBar.open(`${obj.name} color copied`, '', {
      duration: 2000,
    });
  }

}
