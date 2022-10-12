import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  courseForm: FormGroup;
  unamepattern="[0-9]{5}";
  constructor() {
    this.courseForm=new FormGroup({
      CourseId:new FormControl('0'),
      CourseName:new FormControl('',[Validators.required]),
      CourseDuration:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      CourseBasicFees:new FormControl('', [Validators.pattern(this.unamepattern)])
    })
  }
  ngOnInit(): void {
  }
  onSubmit(){
    debugger;
    const courValu=this.courseForm.value;

  }

}
