import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LabelControl } from "./label-control.directive";

@NgModule({
    declarations: [LabelControl],
    exports: [LabelControl],
    imports: [CommonModule]
})
export class DirectiveModule { }