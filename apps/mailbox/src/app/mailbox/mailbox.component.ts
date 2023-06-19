import { StateService } from '@fe-mf/state';
import { Component, OnInit, inject } from "@angular/core";
import { AsyncPipe, DatePipe } from "@angular/common";
import { fromEvent, map, take } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-mailbox",
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: "./mailbox.component.html",
  styleUrls: ["./mailbox.component.scss"],
})
export class MailboxComponent implements OnInit {
  param$ = this.activatedRoute.queryParamMap.pipe(
    map(paramMap => paramMap.get('page'))
  );

  stateService = inject(StateService);

  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    fromEvent(window, 'reloadMailbox').pipe(
      take(5),
    ).subscribe((e) => {
      console.log('From mailbox', (e));
    })
  }
}
