import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent implements OnInit {

  form: FormGroup;
  skillList: Array<any> = [{
    id: 1,
    descricao: 'AngularJS'
  }, {
    id: 2,
    descricao: 'Angular 2'
  }, {
    id: 3,
    descricao: 'ReactJS'
  }, {
    id: 4,
    descricao: 'Vue.js'
  }, {
    id: 5,
    descricao: 'Ember.js'
  }, {
    id: 6,
    descricao: 'Meteor.js'
  }];

  constructor(private fb: FormBuilder) { }

  createForm() {
    this.form = this.fb.group({
      multiSelect: this.fb.array([])
    });
  }

  onChange(valor: Object, checked: boolean) {
    const multiples: FormArray = <FormArray>this.form.controls.multiSelect;
    if (checked) {
      multiples.push(new FormControl(valor));
    } else {
      multiples.removeAt(multiples.controls.findIndex(c => c.value === valor));
    }
  }

  ngOnInit() {
    this.createForm();
  }

}
