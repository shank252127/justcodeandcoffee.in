import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    console.log(activatedRoute);
  }
  ngOnInit(): void {
    const routePath = Object.keys(this.activatedRoute.snapshot.params)[0];
    // this.route.navigate(['/devtools', 'jsonformater']);
    // console.log(this.activatedRoute.snapshot?.state?.data);
  }
}
