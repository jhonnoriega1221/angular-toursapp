import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: StarRatingComponent
  }
  ]
})
export class StarRatingComponent implements ControlValueAccessor {

  @Input() questionName:string = '';
  @Input() questionAnswer:string = '';

  onChange = (answer:string) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  public answer:string = '0';

  constructor() { }

  public onChangeAnswer():void{
    this.markAsTouched();
    if (!this.disabled) {
      this.onChange(this.answer);
    }
  }

  writeValue(answer: string) {
    this.answer = answer;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}
