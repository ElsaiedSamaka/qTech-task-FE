import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ModalComponent, PopupComponent, InputComponent, FormComponent],
  exports: [ModalComponent, PopupComponent, InputComponent, FormComponent],
})
export class SharedModule {}
