import { AsyncPipe, DatePipe } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StateService } from "@fe-mf/state";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, DatePipe, AsyncPipe, AppComponent, HeaderComponent, FooterComponent],
})
export class AppComponent implements OnInit {
  title = "shell";
  state = inject(StateService);
  ngOnInit() {
    window.addEventListener('reloadMailbox', (e) => {
      console.log('From shell', (e as CustomEvent).detail);
    });
  }
  reloadMailbox() {
    const event = new CustomEvent("reloadMailbox", {
      detail: 'update something'
    });
    window.dispatchEvent(event);
    const d = new Date();
    d.setDate((Math.random() * 30) >> 0);
    this.state.data.next(d);
  }

}
