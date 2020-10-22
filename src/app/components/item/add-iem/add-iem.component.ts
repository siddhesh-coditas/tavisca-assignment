import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonDbService } from 'src/app/services/common-db.service';

@Component({
  selector: 'app-add-iem',
  templateUrl: './add-iem.component.html',
  styleUrls: ['./add-iem.component.scss']
})
export class AddIemComponent implements OnInit {

  addForm: FormGroup;
  private imageUrl = 'https://images-na.ssl-images-amazon.com/images/I/61dwpZr1htL._SL1000_.jpg';

  constructor(
    private router: Router,
    private commonDb: CommonDbService
  ) {
    this.addForm = new FormGroup({
      name: new FormControl(null, []),
      description: new FormControl(null, []),
      imgUrl: new FormControl(null, []),
      price: new FormControl(null, [])
    });
  }

  ngOnInit(): void {
  }

  onAddItem(): void {
    const values = this.addForm.value;
    // values.imgUrl = this.imageUrl;
    values.price = Number(values.price).toFixed(2);
    this.commonDb.addItem(values).subscribe(() => {
      this.redirectToHome();
    });
  }

  onCancel(): void {
    this.redirectToHome();
  }

  redirectToHome(): void {
    this.router.navigateByUrl('home');
  }

}
