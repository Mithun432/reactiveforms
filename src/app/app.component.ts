import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task9';
  forms!: FormGroup;

  constructor(private _fb:FormBuilder){}
  ngOnInit(){
    this.forms=this._fb.group({
      bookname: new FormControl('',[Validators.required]),
      author: new FormControl('',[Validators.required]),
      publication: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      genre: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      desc: new FormControl('',[Validators.required]),
    });
  }
  submit(){
    if(this.forms.valid)
    {
    console.log(this.forms.value);
    alert("Successfully Submitted")
    }
    else if(this.forms.invalid){
      alert("Please provide all details carefully!!!")
    }
}
}
