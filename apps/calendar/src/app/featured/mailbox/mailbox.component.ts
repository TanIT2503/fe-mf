import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-mailbox",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./mailbox.component.html",
  styleUrls: ["./mailbox.component.scss"],
})
export class MailboxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
