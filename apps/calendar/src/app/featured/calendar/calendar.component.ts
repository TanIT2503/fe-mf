import {Component, inject, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import {StateService} from "@fe-mf/state";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-calendar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent{
  stateService = inject(StateService);
  constructor(private activatedRoute: ActivatedRoute) { }
}
